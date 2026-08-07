import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Newsletter from '../../components/Newsletter/Newsletter';
import churchHero from '../../assets/images/church-hero.png';
import communityImg from '../../assets/images/P1.jpg';
import worshipImg from '../../assets/images/Worship.jpg';
import youthImg from '../../assets/images/Youth.jpg';
import bibleImg from '../../assets/images/bible-study.png';
import './Home.css';

const Home = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const postMessageCommand = (command) => {
      if (!iframeRef.current?.contentWindow) return;
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: command, args: [] }),
        '*'
      );
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        const visible = entry.isIntersecting && entry.intersectionRatio >= 0.5;
        if (visible) {
          postMessageCommand('playVideo');
        } else {
          postMessageCommand('pauseVideo');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: [0.5],
    });

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const quickLinks = [
    {
      icon: (
        <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" /></svg>
      ),
      title: 'Plan Your Visit',
      desc: 'Everything you need to know',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM10 8l6 4-6 4z" /></svg>
      ),
      title: 'Watch Online',
      desc: 'Stream our latest sermons',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
      ),
      title: 'Give',
      desc: 'Support our mission',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z" /></svg>
      ),
      title: 'Prayer Request',
      desc: 'We are here for you',
    },
  ];

  const events = [
    {
      image: worshipImg,
      date: 'Aug 15, 2026',
      title: 'Summer Worship Night',
      desc: 'Join us for an evening of praise, worship, and fellowship under the stars.',
      time: '6:30 PM',
      location: 'Main Sanctuary',
    },
    {
      image: communityImg,
      date: 'Aug 22, 2026',
      title: 'Community Outreach Day',
      desc: 'Serve our neighbors through various community service projects across the city.',
      time: '9:00 AM',
      location: 'Fellowship Hall',
    },
    {
      image: youthImg,
      date: 'Sep 5, 2026',
      title: 'Youth Fall Retreat',
      desc: 'A weekend of fun, faith, and friendship for students in grades 6-12.',
      time: '5:00 PM',
      location: 'Camp Grace',
    },
  ];

  return (
    <main id="home-page">
      {/* Hero */}
      <section className="home-hero" id="home-hero">
        <div className="home-hero-bg">
          <img src={churchHero} alt="Church interior with golden sunlight" />
        </div>
        <div className="container">
          <div className="home-hero-content">
            <h1>A PLACE TO BELONG, GROW IN FAITH, AND SERVE OUR CITY.</h1>
            <p>
              Welcome to Faith Family Community Church — where everyone is family,
              and every heart finds its home in God's love.
            </p>
            <div className="home-hero-actions">
              <Link to="/about" className="btn btn-white btn-lg" id="hero-join-btn">
                Join Us Sunday
              </Link>
              <Link to="/ministries" className="btn btn-secondary btn-lg" id="hero-learn-btn" style={{ borderColor: '#fff', color: '#fff' }}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="quick-links" id="quick-links">
        <div className="container">
          <div className="quick-links-grid">
            {quickLinks.map((link, i) => (
              <div className="quick-link-card" key={i} id={`quick-link-${i}`}>
                <div className="quick-link-icon">{link.icon}</div>
                <h4>{link.title}</h4>
                <p>{link.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooted in Tradition */}
      <section className="rooted-section section" id="rooted-section">
        <div className="container">
          <div className="rooted-grid">
            <div className="rooted-text">
              <span className="section-label">Our Story</span>
              <h2>ROOTED IN TRADITION, GROWING IN GRACE</h2>
              <p>
                For over two decades, Faith Family Community Church has been a beacon
                of hope and love in our city. From humble beginnings to a thriving
                community, our journey has been guided by God's unfailing grace and
                the dedication of our members.
              </p>
              <p>
                We believe in building authentic relationships, fostering spiritual
                growth, and making a lasting impact in our community through acts of
                service and compassion.
              </p>
              <Link to="/about" className="btn btn-primary" id="rooted-learn-more">
                Learn Our Story
              </Link>
            </div>
            <div className="rooted-media">
              <iframe
                ref={iframeRef}
                title="Faith Family Community Church video"
                src="https://www.youtube.com/embed/JgITOVkm7BA?enablejsapi=1&mute=1&rel=0&si=6RNw-xQt3zCxQ1vs&playsinline=1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="events-section section" id="events-section">
        <div className="container">
          <div className="events-header">
            <div>
              <span className="section-label">What's Happening</span>
              <h2 className="section-title">UPCOMING EVENTS</h2>
            </div>
            <Link to="/ministries" className="btn btn-secondary" id="view-all-events">
              View All Events
            </Link>
          </div>
          <div className="events-grid">
            {events.map((event, i) => (
              <div className="event-card" key={i} id={`event-card-${i}`}>
                <div className="event-card-image">
                  <img src={event.image} alt={event.title} />
                  <span className="event-card-date">{event.date}</span>
                </div>
                <div className="event-card-body">
                  <h3>{event.title}</h3>
                  <p>{event.desc}</p>
                  <div className="event-card-meta">
                    <span>
                      <svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" /></svg>
                      {event.time}
                    </span>
                    <span>
                      <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" /></svg>
                      {event.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </main>
  );
};

export default Home;
