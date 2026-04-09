import { useState, useEffect } from 'react';

const links = ['About', 'Skills', 'Projects', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = links.map(l => document.getElementById(l.toLowerCase()));
      sections.forEach(sec => {
        if (sec) {
          const { top, bottom } = sec.getBoundingClientRect();
          if (top <= 120 && bottom >= 120) setActive(sec.id);
        }
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="nav-logo-wrap">
        <img src="/pry-logo.png" alt="PRY Logo" className="nav-logo-img" />
      </a>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map(l => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className={active === l.toLowerCase() ? 'nav-active' : ''}
            onClick={() => setMenuOpen(false)}
          >{l}</a>
        ))}
        <a href="/PAVANR-RESUME-5-04-2026.pdf" download className="nav-resume-btn">
          <span>Resume</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        </a>
      </div>
      <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span /><span /><span />
      </button>
    </nav>
  );
}
