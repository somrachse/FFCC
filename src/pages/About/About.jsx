import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Newsletter from '../../components/Newsletter/Newsletter';
import communityImg from '../../assets/images/community-gathering.png';
import churchHero from '../../assets/images/church-hero.png';
import worshipImg from '../../assets/images/worship-event.png';
import bibleImg from '../../assets/images/bible-study.png';
import youthImg from '../../assets/images/youth-ministry.png';
import pastorMale from '../../assets/images/pastor-male.png';
import pastorFemale from '../../assets/images/pastor-female.png';
import './About.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const values = [
    {
      icon: <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
      title: 'Authority',
      desc: 'Grounded in the truth of Scripture as our ultimate guide.',
    },
    {
      icon: <svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>,
      title: 'Community',
      desc: 'Building authentic relationships that last a lifetime.',
    },
    {
      icon: <svg viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>,
      title: 'Hospitality',
      desc: 'Welcoming everyone with open arms and open hearts.',
    },
    {
      icon: <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>,
      title: 'Love',
      desc: "Showing God's love through our words and actions.",
    },
  ];

  const leaders = [
    { name: 'Pastor John Smith', role: 'Senior Pastor', image: pastorMale, desc: 'Leading with wisdom and compassion for over 15 years.' },
    { name: 'Sarah Johnson', role: 'Associate Pastor', image: pastorFemale, desc: 'Passionate about community outreach and discipleship.' },
    { name: 'Michael Chen', role: 'Worship Director', image: pastorMale, desc: 'Creating spaces for authentic worship experiences.' },
  ];

  const mentors = [
    { name: 'Dr. Robert Miller', role: 'Council Elder', image: pastorMale, desc: 'Providing spiritual guidance and counsel.' },
    { name: 'Patricia Williams', role: 'Women\'s Ministry', image: pastorFemale, desc: 'Empowering women through faith and fellowship.' },
    { name: 'James Taylor', role: 'Men\'s Ministry', image: pastorMale, desc: 'Building strong men of faith and integrity.' },
    { name: 'Nana', role: 'Care Ministry', image: pastorFemale, desc: 'Supporting our church family in times of need.' },
    { name: 'Franco', role: 'Care Ministry', image: pastorFemale, desc: 'Supporting our church family in times of need.' },
    { name: 'Alice', role: 'Care Ministry', image: pastorFemale, desc: 'Supporting our church family in times of need.' },
    { name: 'Dragon', role: 'Care Ministry', image: pastorFemale, desc: 'Supporting our church family in times of need.' },

  ];

  // three copies act as scroll buffer on either side, so there's always
  // more strip to scroll into before silently snapping back to the middle
  // copy — the loop never visibly runs out
  const loopMentors = [...mentors, ...mentors, ...mentors];
  const mentorScrollRef = useRef(null);
  const [mentorCenterIndex, setMentorCenterIndex] = useState(mentors.length);

  const getMentorSlides = () => mentorScrollRef.current?.querySelectorAll('.mentor-slide') ?? [];

  const findCenterIndex = (container, slides) => {
    const containerCenter = container.getBoundingClientRect().left + container.clientWidth / 2;
    let closestIndex = 0;
    let closestDist = Infinity;
    slides.forEach((slide, i) => {
      const rect = slide.getBoundingClientRect();
      const dist = Math.abs(rect.left + rect.width / 2 - containerCenter);
      if (dist < closestDist) {
        closestDist = dist;
        closestIndex = i;
      }
    });
    return closestIndex;
  };

  // jump straight to the middle copy before the first paint so there's no
  // flash of the buffer copy at the very start of the strip
  useLayoutEffect(() => {
    getMentorSlides()[mentors.length]?.scrollIntoView({ behavior: 'auto', inline: 'center', block: 'nearest' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // purely cosmetic: figures out which slide is nearest the scroll
  // container's center so we can style it as focused. Native scroll-snap
  // (in the CSS) is what actually does the centering/scrolling, so this
  // can never fall out of sync with what the user sees on screen.
  useEffect(() => {
    const container = mentorScrollRef.current;
    if (!container) return;

    // once scrolling settles inside a buffer copy, silently shift by exactly
    // one copy's width so we're back in the middle copy — same screen
    // position, different (identical-looking) DOM nodes, so it's invisible
    const recenterIfNeeded = () => {
      const slides = getMentorSlides();
      const first = slides[0];
      const middleStart = slides[mentors.length];
      if (!first || !middleStart) return;
      const setWidth = middleStart.getBoundingClientRect().left - first.getBoundingClientRect().left;
      const idx = findCenterIndex(container, slides);
      if (idx < mentors.length) {
        container.scrollLeft += setWidth;
      } else if (idx >= mentors.length * 2) {
        container.scrollLeft -= setWidth;
      }
    };

    let raf;
    let idleTimer;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setMentorCenterIndex(findCenterIndex(container, getMentorSlides())));
      clearTimeout(idleTimer);
      idleTimer = setTimeout(recenterIfNeeded, 120);
    };

    setMentorCenterIndex(findCenterIndex(container, getMentorSlides()));
    container.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(idleTimer);
      container.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const scrollMentorTo = (i) => {
    getMentorSlides()[i]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  };

  return (
    <main id="about-page">
      {/* Hero */}
      <section className="about-hero" id="about-hero">
        <div className="container">
          <span className="section-label">About Us</span>
          <h1>Rooted in Faith, Growing in Love</h1>
          <p>
            Discover our story, our mission, and the hearts behind our church community.
          </p>
          <div className="about-hero-image">
            <img src={communityImg} alt="Community gathering" />
          </div>
        </div>
      </section>

      {/* Foundation */}
      <section className="foundation-section section" id="foundation-section">
        <div className="container">
          <div className="foundation-grid">
            <div className="foundation-text">
              <span className="section-label">Our Heritage</span>
              <h2>Built on a Foundation of Community</h2>
              <p>
                Faith Family Community Church was founded in 2003 with a simple vision: 
                to create a welcoming space where people from all walks of life could 
                come together to worship, grow, and serve.
              </p>
              <p>
                What started as a small group meeting in a living room has blossomed into 
                a vibrant community of believers committed to making a difference in our 
                city and beyond. Through seasons of growth and challenges, our foundation 
                has remained unchanged — faith in God, love for one another, and service 
                to our community.
              </p>
            </div>
            <div className="foundation-images">
              <div className="img-wrapper">
                <img src={communityImg} alt="Community event" />
              </div>
              <div className="img-wrapper">
                <img src={worshipImg} alt="Worship service" />
              </div>
              <div className="img-wrapper">
                <img src={youthImg} alt="Youth activities" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Identity */}
      <section className="identity-section section" id="identity-section">
        <div className="container">
          <div className="identity-header">
            <span className="section-label">Who We Are</span>
            <h2 className="section-title">Our Core Identity</h2>
          </div>

          <div className="identity-tabs">
            <button
              className={`identity-tab ${activeTab === 'mission' ? 'active' : ''}`}
              onClick={() => setActiveTab('mission')}
              id="tab-mission"
            >
              Our Mission
            </button>
            <button
              className={`identity-tab ${activeTab === 'vision' ? 'active' : ''}`}
              onClick={() => setActiveTab('vision')}
              id="tab-vision"
            >
              Our Vision
            </button>
          </div>

          <div className="identity-content">
            {activeTab === 'mission' ? (
              <p>
                To glorify God by making disciples who know Christ, grow in Christ, 
                and go for Christ. We are committed to building a community of believers 
                who are rooted in God's Word and passionate about sharing His love 
                with the world.
              </p>
            ) : (
              <p>
                To see every person in our city transformed by the love of Jesus Christ, 
                becoming active members of a faith community that impacts our neighborhoods, 
                our nation, and the nations. We envision a church without walls — reaching 
                beyond Sunday and into everyday life.
              </p>
            )}
          </div>

          <div className="identity-values">
            {values.map((value, i) => (
              <div className="value-card" key={i} id={`value-card-${i}`}>
                <div className="value-card-icon">{value.icon}</div>
                <h4>{value.title}</h4>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="believe-section section" id="believe-section">
        <div className="container">
          <div className="believe-grid">
            <div className="believe-text">
              <span className="section-label">Our Faith</span>
              <h2>What We Believe</h2>
              <p>
                Our beliefs are rooted in the historic Christian faith, grounded in 
                Scripture, and expressed through love and service.
              </p>
              <ul className="believe-list">
                <li>The Bible is the inspired, infallible Word of God</li>
                <li>There is one God, eternally existing in three persons</li>
                <li>Jesus Christ is Lord and Savior of the world</li>
                <li>Salvation is by grace through faith in Jesus Christ</li>
                <li>The Holy Spirit empowers believers for godly living</li>
                <li>The Church is the body of Christ on earth</li>
              </ul>
              <a href="#" className="btn btn-primary" id="statement-of-faith-btn">
                Full Statement of Faith
              </a>
            </div>
            <div className="believe-image">
              <img src={bibleImg} alt="Open Bible" />
            </div>
          </div>
        </div>
      </section>

      {/* Pastors */}
      <section className="team-section section" id="leadership-section">
        <div className="container">
          <div className="team-header">
            <span className="section-label">Meet Our Team</span>
            <h2 className="section-title">Our Pastors</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Dedicated servants leading our church with integrity, passion, and a heart for God.
            </p>
          </div>
          <div className="team-grid">
            {leaders.map((leader, i) => (
              <div className="team-card" key={i} id={`leader-card-${i}`}>
                <div className="team-card-image">
                  <img src={leader.image} alt={leader.name} />
                </div>
                <h4>{leader.name}</h4>
                <span className="team-role">{leader.role}</span>
                <p>{leader.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors */}
      <section className="mentors-section section" id="mentors-section">
        <div className="container">
          <div className="mentors-header">
            <span className="section-label">Guiding Hearts</span>
            <h2 className="section-title">Our Mentors</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Experienced leaders who guide, support, and inspire our congregation.
            </p>
          </div>
          <div className="mentor-scroll" ref={mentorScrollRef}>
            {loopMentors.map((mentor, i) => (
              <div
                className={`team-card mentor-slide${i === mentorCenterIndex ? ' mentor-slide-center' : ''}`}
                key={i}
                id={`mentor-card-${i}`}
                onClick={() => scrollMentorTo(i)}
              >
                <div className="team-card-image">
                  <img src={mentor.image} alt={mentor.name} />
                </div>
                <h4>{mentor.name}</h4>
                <span className="team-role">{mentor.role}</span>
                <p>{mentor.desc}</p>
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

export default About;
