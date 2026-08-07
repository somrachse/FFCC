import { useState } from 'react';
import { Link } from 'react-router-dom';
import Newsletter from '../../components/Newsletter/Newsletter';
import './Contact.css';

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
          <h1>Get in Touch</h1>
          <p>
            We'd love to hear from you. Whether you have a question, prayer request, 
            or just want to say hello — reach out anytime.
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
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>
                  </div>
                  <div>
                    <h4>Address</h4>
                    <p>123 Faith Avenue<br/>Grace City, GC 12345</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <p>(555) 123-4567</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>info@ffcc-church.org</p>
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
                    <span>Sunday School</span>
                    <span>10:30 AM — 11:30 AM</span>
                  </div>
                  <div className="service-hours-item">
                    <span>Wednesday Bible Study</span>
                    <span>7:00 PM — 8:30 PM</span>
                  </div>
                  <div className="service-hours-item">
                    <span>Friday Youth Group</span>
                    <span>6:30 PM — 8:30 PM</span>
                  </div>
                  <div className="service-hours-item">
                    <span>Office Hours</span>
                    <span>Mon-Fri 9AM — 5PM</span>
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
                      placeholder="(555) 000-0000"
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
          </div>
          <div className="map-wrapper">
            <div className="map-placeholder">
              <div className="map-pin">
                <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>
                <p>Faith Family Community Church</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section className="visit-section" id="visit-section">
        <div className="container">
          <h3>Visit Us This Sunday</h3>
          <p>
            Experience our welcoming community firsthand. We can't wait to meet you!
          </p>
          <div className="visit-times">
            <div className="visit-time-item">
              <div className="day">Sunday</div>
              <div className="time">9:00 AM</div>
            </div>
            <div className="visit-time-item">
              <div className="day">Wednesday</div>
              <div className="time">7:00 PM</div>
            </div>
            <div className="visit-time-item">
              <div className="day">Friday</div>
              <div className="time">6:30 PM</div>
            </div>
          </div>
          <Link to="/about" className="btn btn-white btn-lg" id="plan-visit-btn">
            Plan Your Visit
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </main>
  );
};

export default Contact;
