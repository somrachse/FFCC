import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Newsletter from '../../components/Newsletter/Newsletter';
import bibleImg from '../../assets/images/bible-study.jpg';
import pastorMale from '../../assets/images/pastor-male.jpg';
import pastorFemale from '../../assets/images/pastor-female.jpg';
import './About.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const [storyExpanded, setStoryExpanded] = useState(false);

  const values = [ 
    {
      icon: <svg viewBox="0 0 24 24"><path d="M13 2h-2v7H4v2h7v11h2V11h7V9h-7z"/></svg>,
      title: 'Christ at the Center',
      desc: 'Jesus Christ is the center of our faith and the reason for our ministry.',
    },
    {
      icon: <svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>,
      title: 'Family',
      desc: 'Spiritual growth happens in relationship — through belonging, encouragement, and genuine care for one another.',
    },
    {
      icon: <svg viewBox="0 0 24 24"><path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/></svg>,
      title: 'Discipleship',
      desc: 'We want people to grow in spiritual maturity, character, and the ability to strengthen others.',
    },
    {
      icon: <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>,
      title: 'Compassion',
      desc: 'We respond to spiritual and practical needs with dignity, wisdom, mercy, and care.',
    },
  ];

  const leaders = [
    { name: 'Om Theoun', role: 'Pastor', image: 'https://web-picture.sgp1.cdn.digitaloceanspaces.com/images/Ps.%20Om%20Thoeun.jpg', desc: 'Pastor of the church, providing spiritual leadership and guidance to the congregation.' },
    { name: 'Keo Sokcheat', role: 'Ministry Leader & Senior Administrator', image: 'https://web-picture.sgp1.cdn.digitaloceanspaces.com/images/Ps.%20Socheat.jpg', desc: 'Leads Special Love Children Center and coordinates ministry administration and major projects.' },
    { name: 'So Vuthy', role: 'Ministry Leader & Creative Class Coordinator', image: 'https://web-picture.sgp1.cdn.digitaloceanspaces.com/images/Ps.%20So%20Vuthy.jpg', desc: 'Coordinates Creative Class and the Children Sponsorship Program alongside worship ministry.' },
  ];

  const mentors = [
    { name: 'Chea Oudom', role: 'Education Ministry Leader', image: pastorFemale, desc: "Leads FFCC's Education Ministry and supports teachers across our learning programs." },
    { name: 'Vong Pitou', role: 'Education Ministry Leader', image: pastorFemale, desc: "Leads FFCC's Education Ministry and supports teachers across our learning programs." },
    { name: 'Na Pha', role: 'University Student & Technology Ministry', image: pastorFemale, desc: 'Walks alongside university students and serves in technology and web development.' },
    { name: 'Lean Chanreaksmey', role: 'Media Ministry Leader', image: pastorMale, desc: "Guides FFCC's media ministry — video production, editing, and creative training." },
    { name: 'Ester', role: 'Technology, Worship & Youth Ministry', image: pastorMale, desc: 'Serves through IT and web development, worship leadership, and soccer ministry.' },
    { name: 'Sun Ros', role: 'Photography & Videography', image: pastorMale, desc: 'Documents church life through photography and videography across ministry activities.' },
  ];


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

  // offsetLeft is relative to the nearest *positioned* ancestor, which here
  // is nothing closer than <body> — so it does not reliably measure distance
  // from this container's own scroll origin, and using it to compute a
  // "centered" scrollLeft can land on a value CSS scroll-snap disagrees
  // with (it snaps in viewport space). getBoundingClientRect is always
  // viewport-relative regardless of positioning context, so the delta
  // between rects is exact and matches what scroll-snap-align: center
  // would choose.
  const centeredScrollLeft = (container, target) => {
    const containerRect = container.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const delta = (targetRect.left + targetRect.width / 2) - (containerRect.left + containerRect.width / 2);
    return container.scrollLeft + delta;
  };

  // jump straight to the middle copy before the first paint so there's no
  // flash of the buffer copy at the very start of the strip. Set scrollLeft
  // directly (not scrollIntoView) so this can never drag the page's own
  // vertical scroll along with it when the strip starts off-screen.
  useLayoutEffect(() => {
    const container = mentorScrollRef.current;
    const target = getMentorSlides()[mentors.length];
    if (container && target) {
      container.scrollLeft = centeredScrollLeft(container, target);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // while a click-triggered scroll is animating, nothing below may touch
  // scrollLeft or re-render the highlighted slide — see scrollMentorTo for
  // why fighting it is actively dangerous, not just visually jerky.
  const isClickScrollingRef = useRef(false);

  // once scrolling settles inside a buffer copy, silently shift by exactly
  // one copy's width so we're back in the middle copy — same screen
  // position, different (identical-looking) DOM nodes, so it's invisible.
  // Must also move the highlighted index by the same one-copy offset,
  // otherwise the highlight is left pointing at the slide's old position,
  // which just scrolled out of the visible copy entirely, leaving nothing
  // on screen highlighted.
  const recenterIfNeeded = () => {
    const container = mentorScrollRef.current;
    if (!container) return;
    const slides = getMentorSlides();
    const first = slides[0];
    const middleStart = slides[mentors.length];
    if (!first || !middleStart) return;
    const setWidth = middleStart.getBoundingClientRect().left - first.getBoundingClientRect().left;
    const idx = findCenterIndex(container, slides);
    if (idx < mentors.length) {
      container.scrollLeft += setWidth;
      setMentorCenterIndex(idx + mentors.length);
    } else if (idx >= mentors.length * 2) {
      container.scrollLeft -= setWidth;
      setMentorCenterIndex(idx - mentors.length);
    }
  };

  useEffect(() => {
    const container = mentorScrollRef.current;
    if (!container) return;

    let raf;
    let idleTimer;
    const onScroll = () => {
      // a click-triggered scroll recenters itself exactly once, after it
      // settles (see scrollMentorTo) — this idle/per-frame path must stay
      // completely out of its way in the meantime. Directly mutating
      // scrollLeft here while container.scrollTo({behavior:'smooth'}) is
      // still animating cancels that animation outright (the two are
      // fighting over the same property), which is what made clicking a
      // slide feel randomly broken — it wasn't jerky, it was being aborted
      // mid-flight depending on exactly when this timer happened to fire.
      if (isClickScrollingRef.current) return;

      clearTimeout(idleTimer);
      idleTimer = setTimeout(recenterIfNeeded, 120);

      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setMentorCenterIndex(findCenterIndex(container, getMentorSlides()));
        // also recenter live, on every frame, not only once scrolling goes
        // idle. There's only one buffer copy on each side of the middle —
        // a fast fling covers more distance than the idle-only check can
        // react to, so it could run past the buffer and hit the real end
        // of the DOM before ever getting pulled back, which is where "last
        // slide doesn't connect to first" was coming from. Checking every
        // frame means it's always caught with a full copy to spare.
        recenterIfNeeded();
      });
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // CSS scroll-snap-type: mandatory fights a JS-driven smooth scrollTo — the
  // browser keeps pulling toward the nearest snap point mid-animation, which
  // reads as a jerky/instant jump instead of a smooth glide. Suspending snap
  // for the duration of the animation lets it glide freely, then restoring
  // it afterward is a no-op since we've already scrolled to a snap point.
  const resnapTimeoutRef = useRef(null);

  const scrollMentorTo = (i) => {
    const container = mentorScrollRef.current;
    const target = getMentorSlides()[i];
    if (!container || !target) return;

    clearTimeout(resnapTimeoutRef.current);
    // set the destination slide as "centered" immediately so its own
    // highlight transition starts right away instead of stepping through
    // every slide the animation passes on the way there.
    isClickScrollingRef.current = true;
    setMentorCenterIndex(i);
    container.style.scrollSnapType = 'none';
    container.scrollTo({
      left: centeredScrollLeft(container, target),
      behavior: 'smooth',
    });
    resnapTimeoutRef.current = setTimeout(() => {
      container.style.scrollSnapType = '';
      isClickScrollingRef.current = false;
      // now that the click-triggered scroll has genuinely settled, do the
      // one authoritative buffer-copy check against its real final position
      recenterIfNeeded();
    }, 500);
  };

  return (
    <main id="about-page">
      {/* Hero */}
      <section className="about-hero" id="about-hero">
        <div className="container">
          <span className="section-label">About FFCC</span>
          <h1>A Church Family Centered on Christ</h1>
          <p>
            Faithful Family of Christ Church Cambodia is a local Christian church in Phnom Penh committed to helping people know Jesus Christ, grow in faith, and learn to live as His disciples together.
          </p>
          <div className="about-hero-image">
            <img src={'https://web-picture.sgp1.cdn.digitaloceanspaces.com/images/Ministry/sunday/18-FFCC-MINISTRY-%20Sunday%20service.jpg'} alt="Community gathering" />
          </div>
        </div>
      </section>

      {/* Foundation */}
      <section className="foundation-section section" id="foundation-section">
        <div className="container">
          <div className="foundation-grid">
            <div className="foundation-text">
              <span className="section-label">Our Story</span>
              <h2>Faith Took Root in a New Community</h2>
              <p>
                Faithful Family of Christ Church began in 2003, during a difficult and
                deeply formative season for the community we now call home. Following a
                devastating fire and the relocation of roughly 5,000 families from the
                Tonle Bassac area of Phnom Penh, many families had to begin again in a
                newly developing area on the outskirts of the city with very little
                infrastructure — no reliable electricity, and schools, hospitals, clean
                water, and transportation all difficult to reach.
              </p>
              <div className={`story-more ${storyExpanded ? 'expanded' : ''}`}>
                <div className="story-more-inner">
                  <p>
                    For Christian families in the new community, travelling back into the
                    city for church was no longer practical, so a small group began
                    gathering locally. The first FFCC gathering took place underneath our
                    pastors' home, in a simple basement space about five by seven meters —
                    no stage, no comfortable facility, just people sitting together on the
                    floor in the Cambodian heat, worshiping with voices, clapping hands,
                    prayer, and Scripture. But there was a church. There was faith. There
                    was family.
                  </p>
                  <p>
                    What began in that small space slowly grew. Today, ministry takes place
                    not only through Sunday worship, but also through children's
                    discipleship, youth ministry, education, soccer, creative and media
                    ministry, student support, compassion, mission, house churches, and
                    community care. Yet the heart of FFCC remains the same as those early
                    days beneath our pastors' home: church is more than a building — it is
                    people discovering Christ, growing in faith, and learning to live
                    together as the family of God.
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="story-toggle-btn"
                onClick={() => setStoryExpanded(!storyExpanded)}
                id="story-toggle-btn"
              >
                {storyExpanded ? 'Show Less' : 'Show More'}
                <svg
                  viewBox="0 0 24 24"
                  className={storyExpanded ? 'rotated' : ''}
                >
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </button>
            </div>
            <div className="foundation-images">
              <div className="img-wrapper">
                <img src={'https://web-picture.sgp1.cdn.digitaloceanspaces.com/images/Ministry/sunday/70-FFCC-MINISTRY-%20Sunday%20service.jpg'} alt="Community event" />
              </div>
              <div className="img-wrapper">
                <img src={'https://web-picture.sgp1.cdn.digitaloceanspaces.com/images/Ministry/sunday/64-FFCC-MINISTRY-%20Sunday%20service.jpg'} alt="Worship service" />
              </div>
              <div className="img-wrapper">
                <img src={'https://web-picture.sgp1.cdn.digitaloceanspaces.com/images/Ministry/sunday/74-FFCC-MINISTRY-%20Sunday%20service%20(1).jpg'} alt="Youth activities" />
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
                To help people discover Christ, grow in faith, and live as family —
                forming disciples who worship God, live by His Word, serve others, and
                carry the Gospel into their communities.
              </p>
            ) : (
              <p>
                To see generations of Cambodian believers rooted in Christ, growing in
                spiritual maturity, strengthening families, serving faithfully, and
                carrying the hope of Jesus into communities across Cambodia.
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
                Our faith is centered on Jesus Christ and rooted in the Bible. These
                convictions shape our worship, teaching, discipleship, relationships,
                and mission.
              </p>
              <ul className="believe-list">
                <li>The Bible is the inspired and infallible Word of God</li>
                <li>There is one God, eternally existing in three persons: Father, Son, and Holy Spirit</li>
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
            <span className="section-label">Sunday Preacher</span>
            <h2 className="section-title">Our Pastors</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Leadership at FFCC is expressed through humility, faithfulness, integrity, and service.
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
            <span className="section-label">Saturday Preacher</span>
            <h2 className="section-title">Our Leader </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Staff and volunteers serving across education, media, children's ministry, technology, and more.
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
