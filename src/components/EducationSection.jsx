import { useLanguage } from '../context/LanguageContext';
import { cvData } from '../data/cvData';
import Section from './Section';

function EducationSection() {
  const { lang } = useLanguage();
  const data = cvData[lang];

  return (
    <Section id="education" title={data.sections.education} prevId="experience" nextId="languages">
      {data.education.map((item) => (
        <div className="card" key={item.title}>
          <h3 className="card__heading">{item.title}</h3>
          <p className="card__subheading">{item.institution}</p>
          <p className="card__period">{item.period}</p>
        </div>
      ))}
    </Section>
  );
}

export default EducationSection;