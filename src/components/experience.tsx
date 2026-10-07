import Job from './job';
import { JOBS } from '../data';

export default function Experience() {
  return (
    <section id="experience">
      <p className="eyebrow">Experience</p>
      <h2>Where I've worked</h2>
      {JOBS.map((job) => (
        <Job key={job.title} {...job} />
      ))}
    </section>
  );
}
