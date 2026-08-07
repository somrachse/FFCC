import { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert('Thank you for subscribing!');
      setEmail('');
    }
  };

  return (
    <section className="newsletter" id="newsletter-section">
      <div className="container">
        <div className="newsletter-inner">
          <div className="newsletter-icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </div>
          <div className="newsletter-content">
            <h3 className="newsletter-title">Subscribe to Our Newsletter</h3>
            <p className="newsletter-text">Stay updated with our latest sermons, events, and community news.</p>
          </div>
          <form className="newsletter-form" onSubmit={handleSubmit} id="newsletter-form">
            <input
              type="email"
              className="newsletter-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              id="newsletter-email"
            />
            <button type="submit" className="newsletter-btn" id="newsletter-submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
