import type { Job } from '../types/resume';

export function Experience({ jobs }: { jobs: Job[] }) {
  return (
    <section>
      <h2>Experience</h2>
      {jobs.map((job) => (
        // one <article> per job, with key={...}
        <article key={job.company + job.role}>
          <h3>{job.role} at {job.company}</h3>
          <p>{job.startDate} - {job.endDate ?? 'Present'}</p>
          <p>{job.summary}</p>
          <ul>
            {job.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}