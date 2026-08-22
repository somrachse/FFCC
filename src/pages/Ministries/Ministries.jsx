import { Link } from 'react-router-dom';
import { ministries } from '../../data/ministries';
import './Ministries.css';

const Ministries = () => {
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
              <img src={'https://web-picture.sgp1.cdn.digitaloceanspaces.com/images/Ministry/General/47-Sunday%20Service%2021-06-2026.jpg'} alt="Worship ministry" />
            </div>
            <div className="img-cell">
              <img src={'https://web-picture.sgp1.cdn.digitaloceanspaces.com/images/Ministry/General/48-Sunday%20Service%2021-06-2026.jpg'} alt="Community" />
            </div>
            <div className="img-cell">
              <img src={'https://web-picture.sgp1.cdn.digitaloceanspaces.com/images/Ministry/General/27-Sunday%20Service%2021-06-2026.jpg'} alt="Youth" />
            </div>
            <div className="img-cell">
              <img src={'https://web-picture.sgp1.cdn.digitaloceanspaces.com/images/Ministry/General/8-Sunday%20Service%2015-03-2026.jpg'} alt="Bible study" />
            </div>
            <div className="img-cell">
              <img src={'https://web-picture.sgp1.cdn.digitaloceanspaces.com/images/Ministry/General/5-Sunday%20Service%2008-03-2026%20(3).jpg'} alt="Bible study" />
            </div>
          </div>
        </div>
      </section>

      {/* Ministry Cards */}
      <section className="ministries-list section" id="ministries-list">
        <div className="container">
          <div className="ministries-grid">
            {ministries.map((ministry, i) => (
              <div className="ministry-card" key={ministry.slug} id={`ministry-card-${i}`}>
                <div className="ministry-card-image">
                  <img src={ministry.image} alt={ministry.title} />
                  <span className="ministry-card-badge">{ministry.badge}</span>
                </div>
                <div className="ministry-card-body">
                  <h3>{ministry.title}</h3>
                  <p>{ministry.desc}</p>
                  <Link to={`/ministries/${ministry.slug}`} className="ministry-card-link">
                    Learn More
                    <svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                  </Link>
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
