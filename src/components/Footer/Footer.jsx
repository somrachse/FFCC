import { Link } from 'react-router-dom';
import './Footer.css';

const logoImage = 'https://web-picture.sgp1.cdn.digitaloceanspaces.com/images/FFCC_White.PNG';

const Footer = () => {
  return (
    <footer className="footer" id="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-brand-logo">
              <img src={logoImage} alt="FFCC logo" className="footer-logo-image" />
            </div>
            <p>
              A Christ-centered church family in Phnom Penh, Cambodia.
              Discover Christ. Grow in Faith. Live as Family.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24"><path d="M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zm-4 11a3 3 0 110-6 3 3 0 010 6zm4.5-7.5a1 1 0 110-2 1 1 0 010 2z"/></svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg viewBox="0 0 24 24"><path d="M23 7s-.2-1.7-1-2.4c-.9-1-1.9-1-2.4-1C16.6 3.3 12 3.3 12 3.3s-4.6 0-7.6.3c-.5 0-1.5 0-2.4 1-.7.7-1 2.4-1 2.4S.7 9 .7 11v1.8c0 2 .3 4 .3 4s.2 1.7 1 2.4c.9 1 2.1.9 2.6 1 1.9.2 8.4.2 8.4.2s4.6 0 7.6-.3c.5-.1 1.5-.1 2.4-1 .7-.7 1-2.4 1-2.4s.3-2 .3-4V11c0-2-.3-4-.3-4zM9.5 15.5v-7l6.5 3.5-6.5 3.5z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/ministries">Ministries</Link>
              <Link to="/blog">Sermons</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/contact">Prayer Request</Link>
            </div>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="footer-heading">Weekly Rhythm</h4>
            <div className="footer-links">
              <span>Church Service (Sun): 9:00 AM</span>
              <span>Youth Service (Sat): 6:00 PM</span>
              <span>Soccer Ministry (Fri): 6:00 PM</span>
              <span>Creative Class (Thu): 6:30 PM</span>
              <span>Education (Mon–Wed): 6:30 PM</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-heading">Contact Us</h4>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>
              <span>Phnom Penh, Cambodia</span>
            </div>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              <span>Coming soon</span>
            </div>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              <span>info@ffcccambodia.com</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Faithful Family of Christ Church Cambodia. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
