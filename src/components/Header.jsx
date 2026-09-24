import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function Header() {
  const { lang, toggleLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToId = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navLinks = [
    { id: 'hero', label: t.navAbout },
    { id: 'skills', label: t.navSkills },
    { id: 'experience', label: t.navExperience },
    { id: 'education', label: t.navEducation },
    { id: 'languages', label: t.navLanguages },
    { id: 'rollstories', label: t.navProjects },
    { id: 'contact', label: t.navContact },
  ];

  return (
    <header className="site-header">
      <button className="site-header__name" onClick={scrollToTop}>
        {t.name}
      </button>

      <nav className="site-header__nav">
        {navLinks.map((link) => (
          <button key={link.id} className="site-header__nav-link" onClick={() => scrollToId(link.id)}>
            {link.label}
          </button>
        ))}
      </nav>

      <div className="site-header__controls">
        <button
          className="site-header__lang"
          onClick={toggleLang}
          aria-label={t.langButtonLabel}
        >
          {lang === 'es' ? 'EN' : 'ES'}
        </button>

        <button
          className="site-header__theme-switch"
          onClick={toggleTheme}
          aria-label={t.themeButtonLabel}
          data-theme-active={theme}
        >
          <SunIcon />
          <span className="site-header__theme-knob" />
          <MoonIcon />
        </button>

        <button
          className="site-header__hamburger"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? t.menuCloseLabel : t.menuOpenLabel}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="site-header__mobile-menu">
          <nav className="site-header__mobile-nav">
            {navLinks.map((link) => (
              <button key={link.id} className="site-header__mobile-nav-link" onClick={() => scrollToId(link.id)}>
                {link.label}
              </button>
            ))}
          </nav>

          <div className="site-header__mobile-controls">
            <button className="site-header__lang" onClick={toggleLang} aria-label={t.langButtonLabel}>
              {lang === 'es' ? 'EN' : 'ES'}
            </button>

            <button
              className="site-header__theme-switch"
              onClick={toggleTheme}
              aria-label={t.themeButtonLabel}
              data-theme-active={theme}
            >
              <SunIcon />
              <span className="site-header__theme-knob" />
              <MoonIcon />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;