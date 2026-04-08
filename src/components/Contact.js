import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact section" id="contact">
      <div className="section-title">
        <h2>Get In <span>Touch</span></h2>
        <div className="title-line" />
      </div>
      <div className="contact-grid">
        <div className="contact-info">
          <h3>Let's work together</h3>
          <p>I'm currently open to new opportunities. Whether you have a project, a question, or just want to say hi — my inbox is always open!</p>
          <div className="contact-items">
            <div className="contact-item">
              <span>📧</span>
              <a href="mailto:pavanryavdavkumsi25@gmail.com">pavanryavdavkumsi25@gmail.com</a>
            </div>
            <div className="contact-item">
              <span>📍</span>
              <p>India</p>
            </div>
            <div className="contact-item">
              <span>💼</span>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn Profile</a>
            </div>
            <div className="contact-item">
              <span>🐙</span>
              <a href="https://github.com" target="_blank" rel="noreferrer">GitHub Profile</a>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <input name="name" placeholder="Your Name" value={form.name} onChange={handle} required />
          <input name="email" type="email" placeholder="Your Email" value={form.email} onChange={handle} required />
          <textarea name="message" placeholder="Your Message" rows={5} value={form.message} onChange={handle} required />
          <button type="submit" className="btn-primary">
            {sent ? '✅ Message Sent!' : 'Send Message →'}
          </button>
        </form>
      </div>
    </section>
  );
}
