import { useLanguage } from '../context/LanguageContext';
import { cvData } from '../data/cvData';
import Section from './Section';
import rollforgeLogo from '../assets/images/RollForge.png';

function ProjectSection() {
  const { lang } = useLanguage();
  const data = cvData[lang];

  return (
    <Section id="rollstories" title={data.project.title} prevId="languages">
      <a className="project-card" href="https://rollforgegames.github.io/" target="_blank" rel="noopener noreferrer">
        <div className="project-card__preview">
          <img src={rollforgeLogo} alt="RollForge Games" />
        </div>
        <div className="project-card__body">
          <h3 className="project-card__name">{data.project.name}</h3>
          <p className="project-card__description">{data.project.description}</p>
          <span className="project-card__cta">{data.project.cta} →</span>
        </div>
      </a>
    </Section>
  );
}

export default ProjectSection;