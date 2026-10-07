import Tag from './tag';
import { SKILL_GROUPS } from '../data';
import type { SkillGroup as SkillGroupData } from '../data';

function SkillGroup({ label, items }: SkillGroupData) {
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
