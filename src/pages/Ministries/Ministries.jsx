import { Link } from 'react-router-dom';
import communityImg from '../../assets/images/community-gathering.jpg';
import worshipImg from '../../assets/images/worship-event.jpg';
import bibleImg from '../../assets/images/bible-study.jpg';
import youthImg from '../../assets/images/youth-ministry.jpg';
import churchImg from '../../assets/images/church-hero.jpg';
import './Ministries.css';

const Ministries = () => {
  const ministries = [
    {
      image: worshipImg,
      badge: 'Worship',
      title: 'Worship & Discipleship',
      desc: 'Sunday worship, youth service, Bible teaching, prayer, Connect Groups, worship ministry, men\'s and women\'s fellowship, and spiritual formation.',
    },
    {
      image: youthImg,
      badge: 'Children & Youth',
      title: 'Children & Youth',
      desc: 'Sunday School, Thursday Bible class, children\'s discipleship, youth ministry, camps, soccer, Special Love, and other next-generation ministries.',
    },
    {
      image: bibleImg,
      badge: 'Education',
      title: 'Education & Student Development',
      desc: 'English, computer learning, Creative Class, university student ministry, scholarship and sponsorship support, student tracking, and School Pack ministry.',
    },
    {
      image: communityImg,
      badge: 'Creative & Media',
      title: 'Creative & Media',
      desc: 'Photography, videography, editing, content creation, media training, website and technology development, and creative communication.',
    },
    {
      image: churchImg,
      badge: 'Compassion',
      title: 'Compassion & Community Care',
      desc: 'Medical ministry, health education, feeding and welfare, vulnerable-family care, clean water and sanitation, emergency support, and practical acts of compassion.',
    },
    {
      image: worshipImg,
      badge: 'Mission',
      title: 'Mission & Leadership',
      desc: 'House churches, provincial mission, Bible distribution, outreach, baptisms, local church encouragement, staff devotion, volunteer formation, and leadership development.',
    },
  ];

  return (
    <main id="ministries-page">
      {/* Hero */}
      <section className="ministries-hero" id="ministries-hero">
        <div className="container">
          <span className="section-label">Life at FFCC</span>
          <h1>Our Ministries</h1>
          <p>
            Ministry at FFCC is not built around activity for activity's sake. Each
            ministry is an opportunity to help people know Christ, develop
            spiritually, build healthy relationships, discover their gifts, carry
            responsibility, and learn to serve others.
          </p>
          <div className="ministries-hero-grid">
            <div className="img-cell">
              <img src={worshipImg} alt="Worship ministry" />
            </div>
            <div className="img-cell">
              <img src={communityImg} alt="Community" />
            </div>
            <div className="img-cell">
              <img src={youthImg} alt="Youth" />
            </div>
            <div className="img-cell">
              <img src={bibleImg} alt="Bible study" />
            </div>
          </div>
        </div>
      </section>

      {/* Ministry Cards */}
      <section className="ministries-list section" id="ministries-list">
        <div className="container">
          <div className="ministries-grid">
            {ministries.map((ministry, i) => (
              <div className="ministry-card" key={i} id={`ministry-card-${i}`}>
                <div className="ministry-card-image">
                  <img src={ministry.image} alt={ministry.title} />
                  <span className="ministry-card-badge">{ministry.badge}</span>
                </div>
                <div className="ministry-card-body">
                  <h3>{ministry.title}</h3>
                  <p>{ministry.desc}</p>
                  <a href="#" className="ministry-card-link">
                    Learn More
                    <svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="support-section" id="support-section">
        <div className="container">
          <div className="support-inner">
            <div>
              <span className="section-label">Make a Difference</span>
              <h3>Everyone Has Something to Give</h3>
              <p>
                Church becomes stronger when people move from simply attending to
                participating. You do not need to be a professional or have everything
                figured out before you begin serving.
              </p>
            </div>
            <Link to="/contact" className="btn btn-primary btn-lg" id="support-give-btn">
              I Want to Serve
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Ministries;
