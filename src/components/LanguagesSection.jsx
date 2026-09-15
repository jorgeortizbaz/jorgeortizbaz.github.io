import { useLanguage } from '../context/LanguageContext';
import { cvData } from '../data/cvData';
import Section from './Section';

function LanguagesSection() {
  const { lang } = useLanguage();
  const data = cvData[lang];

  return (
    <Section id="languages" title={data.sections.languages} prevId="education" nextId="rollstories">
      {data.languages.map((item) => (
        <div className="card" key={item.name}>
          <h3 className="card__heading">{item.name}</h3>
          <p className="card__subheading">{item.level}</p>
        </div>
      ))}
    </Section>
  );
}

export default LanguagesSection;