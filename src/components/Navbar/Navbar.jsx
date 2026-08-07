import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoWhite from '../../assets/images/FFCC_White.PNG';
import logoBlack from '../../assets/images/FFCC_Black.PNG';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navClass = `navbar ${isHome && !scrolled && !mobileOpen ? 'transparent' : 'scrolled'}`;

  const ministries = [
    'Adult',
    'Youth Outreach',
    'Children ministries',
    'Comunication Development and Outreach',
    'Education Ministry',
    'Business for Mision',
    'Next Gen care',
    'Next Gen Care & Sponsorship & Scholarship',
    'Serving Team'
  ];

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/ministries', label: 'Ministries' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={navClass} id="main-navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo" id="navbar-logo">
          <img
            src={isHome ? (scrolled ? logoBlack : logoWhite) : logoBlack}
            alt="FFCC logo"
            className="navbar-logo-image"
          />
        </Link>

        <div className="navbar-links">
          {links.map((link) => (
            link.label === 'Ministries' ? (
              <div
                key={link.to}
                className={`navbar-link dropdown ${location.pathname === link.to ? 'active' : ''}`}
                id={`nav-link-${link.label.toLowerCase()}`}
              >
                <Link to={link.to} className="navbar-link-toggle">
                  {link.label}
                </Link>
                <div className="dropdown-menu">
                  {ministries.map((item) => (
                    <div key={item} className="dropdown-item">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className={`navbar-link ${location.pathname === link.to ? 'active' : ''}`}
                id={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            )
          ))}
        </div>

        <div className="navbar-cta">
          <Link to="/contact" className="btn-give" id="nav-give-btn">Give Now</Link>
        </div>

        <button
          className={`navbar-hamburger ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          id="navbar-hamburger"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`navbar-mobile ${mobileOpen ? 'open' : ''}`} id="mobile-menu">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`navbar-link ${location.pathname === link.to ? 'active' : ''}`}
          >
            {link.label}
          </Link>
        ))}
        <Link to="/contact" className="btn-give">Give Now</Link>
      </div>
    </nav>
  );
};

export default Navbar;
