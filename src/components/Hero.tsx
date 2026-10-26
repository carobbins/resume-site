import type { Basics } from '../types/resume';

interface HeroProps {
  basics: Basics;
  summary: string;
}

export function Hero({ basics, summary }: HeroProps) {
  // return JSX: <header> with an <h1>, title, location, summary, link
  return (
    <header>
      <h1>{basics.name}</h1>
      <p>{basics.title}</p>
      <p>{basics.location?.city}, {basics.location?.state}</p>
      <p>{summary}</p>
      <a href={`mailto:${basics.email}`}>Email</a>
      <a href={basics.linkedIn}>LinkedIn</a>
      <a href={basics.website}>Website</a>
    </header>
  );
}