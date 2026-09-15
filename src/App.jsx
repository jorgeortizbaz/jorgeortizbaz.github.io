import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import LanguagesSection from './components/LanguagesSection';
import ProjectSection from './components/ProjectSection';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Header />
        <Hero />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <LanguagesSection />
        <ProjectSection />
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;