import { useLanguage } from '../context/LanguageContext';
import { cvData } from '../data/cvData';
import foto from '../assets/images/foto.jpeg';
import ScrollArrow from './ScrollArrow';

function Hero() {
  const { lang, t } = useLanguage();
  const data = cvData[lang];

  return (
    <section id="hero" className="hero">
      <img className="hero__photo" src={foto} alt={t.name} />
      <div className="hero__intro">
        <h1 className="hero__name">{t.name}</h1>
        <p className="hero__title">{data.title}</p>
        <p className="hero__about">{data.about}</p>
      </div>
      <ScrollArrow direction="down" targetId="skills" className="scroll-arrow--bottom" />
    </section>
  );
}

export default Hero;