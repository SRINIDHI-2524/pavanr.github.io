export default function About() {
  const stats = [
    { label: 'Projects Built', value: '5+' },
    { label: 'Technologies', value: '10+' },
    { label: 'Certifications', value: '3+' },
  ];

  return (
    <section className="about section" id="about">
      <div className="section-title">
        <h2>About <span>Me</span></h2>
        <div className="title-line" />
      </div>
      <div className="about-grid">
        <div className="about-card">
          <div className="about-avatar">PR</div>
          <div className="about-glow" />
        </div>
        <div className="about-text">
          <h3>Fresher Full Stack Developer</h3>
          <p>
            I'm <strong>Pavan R</strong>, a passionate Full Stack Developer with a strong foundation in
            Java, React.js, and modern web technologies. I love turning ideas into real-world
            applications with clean, efficient code.
          </p>
          <p>
            Currently seeking opportunities to contribute to innovative teams and grow as a developer.
            I thrive on solving complex problems and building user-friendly interfaces.
          </p>
          <div className="about-stats">
            {stats.map(s => (
              <div key={s.label} className="stat-box">
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
          <a href="/PAVANR-RESUME-5-04-2026.pdf" download className="btn-primary">Download Resume ↓</a>
        </div>
      </div>
    </section>
  );
}
