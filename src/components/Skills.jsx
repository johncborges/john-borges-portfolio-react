import Tag from './Tag.jsx';
import { SKILL_GROUPS } from '../data.js';

function SkillGroup({ label, items }) {
  return (
    <div className="skill-group">
      <div className="label">{label}</div>
      <div className="tags">
        {items.map((i) => (
          <Tag key={i}>{i}</Tag>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills">
      <p className="eyebrow">Skills</p>
      <h2>What I work with</h2>
      {SKILL_GROUPS.map((group) => (
        <SkillGroup key={group.label} {...group} />
      ))}
    </section>
  );
}
