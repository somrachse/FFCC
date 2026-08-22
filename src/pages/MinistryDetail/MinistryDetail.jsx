import { Link, Navigate, useParams } from 'react-router-dom';
import { getMinistryBySlug, ministries } from '../../ministries';
import './MinistryDetail.css';

const MinistryDetail = () => {
  const { slug } = useParams();
  const ministry = getMinistryBySlug(slug);

  if (!ministry) {
    return <Navigate to="/ministries" replace />;
  }

  const otherMinistries = ministries.filter((m) => m.slug !== ministry.slug);

  return (
    <main id="ministry-detail-page">
      <section className="ministry-detail-hero">
        <img src={ministry.image} alt={ministry.title} className="ministry-detail-hero-image" />
        <div className="ministry-detail-hero-overlay" />
        <div className="container ministry-detail-hero-content">
          <Link to="/ministries" className="ministry-detail-back">← All Ministries</Link>
          <span className="ministry-detail-badge">{ministry.badge}</span>
          <h1>{ministry.title}</h1>
        </div>
      </section>

      <section className="section">
        <div className="container ministry-detail-body">
          <p className="ministry-detail-intro">{ministry.desc}</p>

          <div className="ministry-detail-programs">
            {ministry.programs.map((program) => (
              <div className="ministry-program-card" key={program.name}>
                <h3>{program.name}</h3>
                <p>{program.schedule}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section ministry-detail-others">
        <div className="container">
          <span className="section-label">Explore More</span>
          <h2 className="section-title">Other Ministries</h2>
          <div className="ministry-detail-others-grid">
            {otherMinistries.map((m) => (
              <Link to={`/ministries/${m.slug}`} className="ministry-detail-other-card" key={m.slug}>
                <img src={m.image} alt={m.title} />
                <span>{m.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default MinistryDetail;
