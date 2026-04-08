import { useEffect, useRef } from 'react';

const roles = ['Full Stack Developer', 'Java Developer', 'React Developer', 'Problem Solver'];

export default function Hero() {
  const textRef = useRef(null);

  useEffect(() => {
    let i = 0, j = 0, deleting = false;
    const tick = () => {
      const current = roles[i % roles.length];
      if (textRef.current) {
        textRef.current.textContent = deleting
          ? current.substring(0, j--)
          : current.substring(0, j++);
      }
      let speed = deleting ? 60 : 100;
      if (!deleting && j === current.length + 1) { speed = 1500; deleting = true; }
      if (deleting && j === 0) { deleting = false; i++; speed = 300; }
      setTimeout(tick, speed);
    };
    tick();
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        {[...Array(20)].map((_, i) => <div key={i} className="particle" style={{ '--i': i }} />)}
      </div>
      <div className="hero-content">
        <p className="hero-greeting">👋 Hello, I'm</p>
        <h1 className="hero-name">Pavan R</h1>
        <h2 className="hero-role">
          <span ref={textRef} className="typed-text"></span>
          <span className="cursor">|</span>
        </h2>
        <p className="hero-desc">
          Passionate fresher building modern, scalable web applications with clean code and great UX.
        </p>
        <div className="hero-btns">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-outline">Contact Me</a>
        </div>
        <div className="hero-socials">
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:pavanryavdavkumsi25@gmail.com">Email</a>
        </div>
      </div>
      <div className="hero-3d-card">
        <div className="avatar-ring">
          <div className="avatar-inner">PR</div>
        </div>
        <div className="orbit orbit-1"><div className="orbit-dot" /></div>
        <div className="orbit orbit-2"><div className="orbit-dot" /></div>
        <div className="orbit orbit-3"><div className="orbit-dot" /></div>
      </div>
    </section>
  );
}
