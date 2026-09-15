import { useLanguage } from '../context/LanguageContext';

function ScrollArrow({ direction, targetId, className = '' }) {
  const { t } = useLanguage();

  const scrollToTarget = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      className={`scroll-arrow ${className}`}
      onClick={scrollToTarget}
      aria-label={direction === 'down' ? t.scrollDownLabel : t.scrollUpLabel}
    >
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {direction === 'down' ? <path d="M6 9l6 6 6-6" /> : <path d="M6 15l6-6 6 6" />}
      </svg>
    </button>
  );
}

export default ScrollArrow;