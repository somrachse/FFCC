import { useState } from 'react';
import './Contact.css';

const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/VAWMqYxyQ3GPiW228';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <main id="contact-page">
      {/* Hero */}
      <section className="contact-hero" id="contact-hero">
        <div className="container">
          <span className="section-label">Reach Out</span>
          <h1>We Would Love to Hear From You</h1>
          <p>
            Have a question about FFCC, one of our ministries, visiting the church,
            prayer, or getting involved? Send us a message and our team will do our
            best to help.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content" id="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Info Column */}
            <div className="contact-info" id="contact-info">
              <h3>Our Details</h3>
              <div className="contact-info-list">
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info-item contact-info-link"
                >
                  <div className="contact-info-icon">
                    <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>
                  </div>
                  <div>
                    <h4>Address</h4>
                    <p>Phnom Penh, Cambodia<br/>(Full street address coming soon)</p>
                  </div>
                </a>
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <p>Coming soon</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>info@ffcccambodia.com</p>
                  </div>
                </div>
              </div>

              <div className="service-hours" id="service-hours">
                <h4>Service Hours</h4>
                <div className="service-hours-list">
                  <div className="service-hours-item">
                    <span>Sunday Worship</span>
                    <span>9:00 AM — 11:00 AM</span>
                  </div>
                  <div className="service-hours-item">
                    <span>Education Ministry (Mon–Wed)</span>
                    <span>6:30 PM — 8:00 PM</span>
                  </div>
                  <div className="service-hours-item">
                    <span>Creative Class (Thursday)</span>
                    <span>6:30 PM — 8:00 PM</span>
                  </div>
                  <div className="service-hours-item">
                    <span>Soccer Ministry (Friday)</span>
                    <span>6:00 PM — 8:00 PM</span>
                  </div>
                  <div className="service-hours-item">
                    <span>Youth Service (Saturday)</span>
                    <span>6:00 PM — 8:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="contact-form-wrapper" id="contact-form-wrapper">
              <h3>Send a Message</h3>
              <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Smith"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone (optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="012 345 678"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="prayer">Prayer Request</option>
                    <option value="visit">Plan a Visit</option>
                    <option value="volunteer">Volunteer</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-lg form-submit" id="contact-submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="map-section" id="map-section">
        <div className="container">
          <div className="map-header">
            <span className="section-label">Find Us</span>
            <h2 className="section-title">Our Location</h2>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="map-directions-link"
            >
              Open in Google Maps
            </a>
          </div>
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d276.452937282777!2d104.84737846059855!3d11.618335463353546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095275da7527df%3A0xfec3a0cc6bed7197!2sFaithful%20Family%20of%20Christ%20Church%20(FFCC!5e1!3m2!1skm!2skh!4v1787627307025!5m2!1skm!2skh"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="FFCC Location Map"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
