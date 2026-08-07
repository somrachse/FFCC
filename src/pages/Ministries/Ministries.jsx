import { Link } from 'react-router-dom';
import Newsletter from '../../components/Newsletter/Newsletter';
import communityImg from '../../assets/images/community-gathering.png';
import worshipImg from '../../assets/images/worship-event.png';
import bibleImg from '../../assets/images/bible-study.png';
import youthImg from '../../assets/images/youth-ministry.png';
import churchImg from '../../assets/images/church-hero.png';
import './Ministries.css';

const Ministries = () => {
  const ministries = [
    {
      image: worshipImg,
      badge: 'Worship',
      title: 'Worship Ministry',
      desc: 'Experience God through music, praise, and creative arts. Our worship team leads the congregation in heartfelt worship every Sunday and at special events.',
    },
    {
      image: youthImg,
      badge: 'Youth',
      title: 'Youth Ministry',
      desc: 'Empowering the next generation through dynamic programs, mentorship, and community activities for students in grades 6-12.',
    },
    {
      image: communityImg,
      badge: 'Outreach',
      title: 'Community Outreach',
      desc: 'Making a difference in our city through food drives, neighborhood clean-ups, disaster relief, and partnerships with local organizations.',
    },
    {
      image: bibleImg,
      badge: 'Discipleship',
      title: 'Small Groups & Bible Study',
      desc: 'Grow deeper in your faith through weekly small group gatherings, Bible studies, and discipleship programs for all ages.',
    },
    {
      image: churchImg,
      badge: 'Children',
      title: 'Children\'s Ministry',
      desc: 'A safe, fun, and nurturing environment where children learn about God\'s love through age-appropriate lessons, games, and activities.',
    },
    {
      image: communityImg,
      badge: 'Care',
      title: 'Care & Support Ministry',
      desc: 'Providing pastoral care, counseling, hospital visits, and prayer support to those in need within our church family and community.',
    },
  ];

  return (
    <main id="ministries-page">
      {/* Hero */}
      <section className="ministries-hero" id="ministries-hero">
        <div className="container">
          <span className="section-label">Get Involved</span>
          <h1>Our Ministries</h1>
          <p>
            Discover the many ways you can connect, grow, and serve through our church ministries.
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
              <h3>Support Our Ministries</h3>
              <p>
                Your generous giving helps us continue to serve our community 
                and expand our outreach programs.
              </p>
            </div>
            <Link to="/contact" className="btn btn-primary btn-lg" id="support-give-btn">
              Give Now
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </main>
  );
};

export default Ministries;
