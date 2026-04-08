const skills = [
  { name: 'Java', icon: '☕', level: 85, color: '#f89820' },
  { name: 'React.js', icon: '⚛️', level: 80, color: '#61dafb' },
  { name: 'JavaScript', icon: '🟨', level: 78, color: '#f7df1e' },
  { name: 'HTML & CSS', icon: '🎨', level: 90, color: '#e34f26' },
  { name: 'SQL', icon: '🗄️', level: 75, color: '#336791' },
  { name: 'Node.js', icon: '🟢', level: 65, color: '#68a063' },
  { name: 'Git & GitHub', icon: '🐙', level: 80, color: '#f05032' },
  { name: 'Spring Boot', icon: '🍃', level: 60, color: '#6db33f' },
  { name: 'REST APIs', icon: '🔗', level: 75, color: '#9333ea' },
  { name: 'Tailwind CSS', icon: '💨', level: 70, color: '#38bdf8' },
];

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="section-title">
        <h2>My <span>Skills</span></h2>
        <div className="title-line" />
      </div>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div className="skill-card" key={skill.name} style={{ '--delay': `${i * 0.05}s`, '--color': skill.color }}>
            <div className="skill-icon">{skill.icon}</div>
            <h4>{skill.name}</h4>
            <div className="skill-bar-bg">
              <div className="skill-bar" style={{ '--width': `${skill.level}%`, '--color': skill.color }} />
            </div>
            <span className="skill-percent">{skill.level}%</span>
            <div className="skill-glow" />
          </div>
        ))}
      </div>
    </section>
  );
}
