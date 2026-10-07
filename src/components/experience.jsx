import Job from './job.jsx';
import { JOBS } from '../data.js';

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
