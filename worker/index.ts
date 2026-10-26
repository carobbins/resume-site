interface Env {
  TURNSTILE_SECRET_KEY: string;
  CONTACT_EMAIL: string;
  CONTACT_PHONE: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname !== '/api/contact') {
      return new Response('Not found', { status: 404 });
    }
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    const body = (await request.json().catch(() => ({}))) as { token?: string };
    if (!body.token) {
      return Response.json({ error: 'Missing token' }, { status: 400 });
    }

    const form = new FormData();
    form.append('secret', env.TURNSTILE_SECRET_KEY);
    form.append('response', body.token);
    const ip = request.headers.get('CF-Connecting-IP');
    if (ip) form.append('remoteip', ip);

    const check = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      { method: 'POST', body: form },
    );
    const outcome = (await check.json()) as { success: boolean };
    if (!outcome.success) {
      return Response.json({ error: 'Verification failed' }, { status: 403 });
    }

    return Response.json(
      { email: env.CONTACT_EMAIL, phone: env.CONTACT_PHONE },
      { headers: { 'Cache-Control': 'no-store' } },
    );
  },
};