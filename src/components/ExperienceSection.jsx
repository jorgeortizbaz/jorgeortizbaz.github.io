import { useLanguage } from '../context/LanguageContext';
import { cvData } from '../data/cvData';
import Section from './Section';

function ExperienceSection() {
  const { lang } = useLanguage();
  const data = cvData[lang];

  return (
    <Section id="experience" title={data.sections.experience} prevId="skills" nextId="education">
      {data.experience.map((job) => (
        <div className="card" key={`${job.company}-${job.period}`}>
          <h3 className="card__heading">{job.role}</h3>
          <p className="card__subheading">{job.company}</p>
          <p className="card__period">{job.period}</p>
          <ul className="card__bullets">
            {job.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}
    </Section>
  );
}

export default ExperienceSection;