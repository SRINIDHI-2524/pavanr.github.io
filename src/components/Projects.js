const projects = [
  {
    title: 'Zomato UI Clone',
    desc: 'A pixel-perfect responsive clone of Zomato\'s food delivery UI with smooth animations and interactive components.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    color: '#e23744',
    icon: '🍕',
    github: 'https://github.com',
    live: '#',
  },
  {
    title: 'Task Manager App',
    desc: 'Full-stack task management application with CRUD operations, user authentication, and real-time updates.',
    tech: ['React', 'Node.js', 'SQL'],
    color: '#2563eb',
    icon: '✅',
    github: 'https://github.com',
    live: '#',
  },
  {
    title: 'Portfolio Website',
    desc: 'Modern developer portfolio with 3D animations, dark theme, and responsive design built with React.',
    tech: ['React', 'CSS', 'JavaScript'],
    color: '#9333ea',
    icon: '🚀',
    github: 'https://github.com',
    live: '#',
  },
  {
    title: 'E-Commerce Backend',
    desc: 'RESTful API for an e-commerce platform with Spring Boot, JWT authentication, and MySQL database.',
    tech: ['Java', 'Spring Boot', 'MySQL'],
    color: '#10b981',
    icon: '🛒',
    github: 'https://github.com',
    live: '#',
  },
  {
    title: 'Weather Dashboard',
    desc: 'Real-time weather app consuming OpenWeatherMap API with beautiful UI and location-based forecasts.',
    tech: ['React', 'API', 'CSS'],
    color: '#f59e0b',
    icon: '🌤️',
    github: 'https://github.com',
    live: '#',
  },
];

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="section-title">
        <h2>My <span>Projects</span></h2>
        <div className="title-line" />
      </div>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div className="project-card" key={p.title} style={{ '--color': p.color, '--delay': `${i * 0.1}s` }}>
            <div className="project-top">
              <span className="project-icon">{p.icon}</span>
              <div className="project-links">
                <a href={p.github} target="_blank" rel="noreferrer">GitHub</a>
                <a href={p.live} target="_blank" rel="noreferrer">Live ↗</a>
              </div>
            </div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="project-tech">
              {p.tech.map(t => <span key={t}>{t}</span>)}
            </div>
            <div className="project-glow" />
          </div>
        ))}
      </div>
    </section>
  );
}
