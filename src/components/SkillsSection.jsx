import { useLanguage } from '../context/LanguageContext';
import { cvData } from '../data/cvData';
import Section from './Section';

function SkillsSection() {
  const { lang } = useLanguage();
  const data = cvData[lang];

  return (
    <Section id="skills" title={data.sections.skills} prevId="hero" nextId="experience">
      {data.skills.map((group) => (
        <div className="card" key={group.category}>
          <h3 className="card__heading">{group.category}</h3>
          <ul className="card__tags">
            {group.items.map((item) => (
              <li key={item} className="card__tag">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Section>
  );
}

export default SkillsSection;