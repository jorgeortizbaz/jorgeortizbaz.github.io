import { useLanguage } from '../context/LanguageContext';

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 5L2 7" />
    </svg>
  );
}


function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="site-footer">
      <div className="site-footer__inner">
        <h2 className="site-footer__heading">{t.footerContact}</h2>
        <ul className="site-footer__contact">
          <li>
            <a href="tel:+34680848172">
              <PhoneIcon />
              (+34) 680 84 81 72
            </a>
          </li>
          <li>
            <a href="mailto:jortizb96@gmail.com">
              <MailIcon />
              jortizb96@gmail.com
            </a>
          </li>
        </ul>
        <p className="site-footer__rights">
          © {new Date().getFullYear()} {t.name}. {t.footerRights}
        </p>
      </div>
    </footer>
  );
}

export default Footer;