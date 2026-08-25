import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const iframeRef = useRef(null);
  const eventsRef = useRef(null);
  const trackRef = useRef(null);
  const autoSlideRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const isHoveredRef = useRef(false);
  // pixels per second for auto-scroll; increase to speed up, decrease to slow down
  // bumped up for a faster slide — change this value to tune speed
  const AUTO_SLIDE_SPEED = 80;

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

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let rafId = null;
    let lastTime = null;
    let offset = 0;
    let singleWidth = 0; // width of one set of cards

    const trackWidth = () => track.scrollWidth;

    const waitForImages = () => {
      const imgs = Array.from(track.querySelectorAll('img'));
      if (!imgs.length) return Promise.resolve();
      return Promise.race([
        Promise.all(
          imgs.map((img) =>
            img.complete
              ? Promise.resolve()
              : new Promise((res) => {
                  img.addEventListener('load', res, { once: true });
                  img.addEventListener('error', res, { once: true });
                })
          )
        ),
        // fallback in case loads hang
        new Promise((res) => setTimeout(res, 1000)),
      ]);
    };

    const step = (time) => {
      if (lastTime == null) lastTime = time;
      const delta = time - lastTime;
      lastTime = time;

      if (!isHoveredRef.current) {
        const deltaPx = (AUTO_SLIDE_SPEED * delta) / 1000;
        singleWidth = singleWidth || (trackWidth() / 2 || 1);
        offset = (offset + deltaPx) % singleWidth;
        // round to reduce subpixel jitter
        const rounded = Math.round(offset * 100) / 100;
        track.style.transform = `translate3d(${-rounded}px, 0, 0)`;
      }

      rafId = requestAnimationFrame(step);
    };

    waitForImages().then(() => {
      // compute singleWidth precisely from DOM if possible
      const cards = track.querySelectorAll('.event-card');
      if (cards.length >= 2) {
        const halfIndex = Math.floor(cards.length / 2);
        if (cards[halfIndex]) {
          singleWidth = cards[halfIndex].offsetLeft - cards[0].offsetLeft;
        }
      }
      if (!singleWidth) singleWidth = trackWidth() / 2 || 1;
      // ensure initial transform set
      track.style.transform = 'translate3d(0,0,0)';
      rafId = requestAnimationFrame(step);
    });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
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
        <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
      ),
      title: 'Serve With Us',
      desc: 'Discover ways to get involved',
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
      image: 'https://web-picture.sgp1.cdn.digitaloceanspaces.com/images/Ministry/evening-class/evening-class.jpg',
      date: 'Monday - Wednesday',
      title: 'Evening Class',
      desc: 'Helping children and young people grow through English, computer learning, practical education, and mentoring.',
      time: '6:30 PM - 8:00 PM',
      location: 'FFCC Church',
    },
    {
      image: 'https://web-picture.sgp1.cdn.digitaloceanspaces.com/images/Ministry/creative-class/creative-class.jpg',
      date: 'Thursday',
      title: 'Creative Class',
      desc: 'A creative learning and discipleship space where young people build practical skills, confidence, and teamwork.',
      time: '6:30 PM - 8:00 PM',
      location: 'Hall-FFCC Church',
    },
    {
      image: 'https://web-picture.sgp1.cdn.digitaloceanspaces.com/images/Ministry/soccer/soccer-training.jpg',
      date: 'Friday',
      title: 'Soccer Training',
      desc: 'Using football as a doorway for relationship, healthy community, teamwork, discipline, and discipleship.',
      time: '6:00 PM - 8:00 PM',
      location: 'Condo Sensok',
    },
    {
      image: 'https://web-picture.sgp1.cdn.digitaloceanspaces.com/images/Ministry/saturday/saturday-service.jpg',
      date: 'Saturday',
      title: 'Youth Service',
      desc: 'A space for teenagers and young adults to worship, learn Scripture, build healthy friendships, and grow in faith.',
      time: '6:00 PM - 8:00 PM',
      location: 'Hall-FFCC Church',
    },
    {
      image: 'https://web-picture.sgp1.cdn.digitaloceanspaces.com/images/Ministry/Adult%20Community/sunday/sunday-service.jpg',
      date: 'Sunday',
      title: 'Church Service',
      desc: 'Gather with the FFCC church family for worship, prayer, biblical preaching, and fellowship centered on Jesus Christ.',
      time: '9:00 AM - 11:00 AM',
      location: 'Hall-FFCC Church',

    },
  ];

  // duplicate events for seamless infinite loop (enables circular scrolling)
  const loopEvents = [...events, ...events];

  return (
    <main id="home-page">
      {/* Hero */}
      <section className="home-hero" id="home-hero">
        <div className="home-hero-bg">
          <img src={'https://web-picture.sgp1.cdn.digitaloceanspaces.com/images/Worship.jpg'} alt="Church interior with golden sunlight" />
        </div>
        <div className="container">
          <div className="home-hero-content">
            <h1>Discover Christ.
              <br></br>Grow in Faith.
              <br></br>Live as Family.</h1>
            <p>
              FFCC is a Christ-centered Cambodian church family in Phnom Penh helping people know Jesus,
               grow as disciples, live in spiritual community, and serve others with faith and compassion
            </p>
            <div className="home-hero-actions">
              <Link to="/contact" className="btn btn-white btn-lg" id="hero-join-btn">
                Plan Your Visit
              </Link>
              <Link to="/ministries" className="btn btn-secondary btn-lg" id="hero-learn-btn" style={{ borderColor: '#fff', color: '#fff' }}>
                Explore Our Ministries
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
              <Link
                to="/contact#contact-form-wrapper"
                className="quick-link-card"
                key={i}
                id={`quick-link-${i}`}
              >
                <div className="quick-link-icon">{link.icon}</div>
                <h4>{link.title}</h4>
                <p>{link.desc}</p>
              </Link>
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
              <h2>FROM A SMALL BASEMENT TO A GROWING CHURCH FAMILY</h2>
              <p>
                FFCC began in 2003 after thousands of families were relocated from the
                Tonle Bassac area of Phnom Penh to a newly developing community on the
                outskirts of the city.
              </p>
              <p>
                With few basic services nearby and attending church elsewhere becoming
                difficult, a small group began worshiping underneath our pastors' home
                in a simple 5-by-7-meter basement — just people sitting together on the
                floor, worshiping, praying, learning God's Word, and sharing life.
              </p>
              <Link to="/about#foundation-section" className="btn btn-primary" id="rooted-learn-more">
                Discover Our Story
              </Link>
            </div>
            <div className="rooted-media">
              <iframe
                ref={iframeRef}
                title="Faithful Family of Christ Church video"
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
              <h2 className="section-title">Weekly Rhythm</h2>
            </div>
            <Link to="/ministries" className="btn btn-secondary" id="view-all-events">
              View All Events
            </Link>
          </div>
          <div className="events-carousel-wrapper">
            <div
              className="events-carousel"
              ref={eventsRef}
              onMouseEnter={() => { setIsHovered(true); isHoveredRef.current = true; }}
              onMouseLeave={() => { setIsHovered(false); isHoveredRef.current = false; }}
            >
              <div className="events-track" ref={trackRef}>
                {loopEvents.map((event, i) => (
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
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
