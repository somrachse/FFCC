import { Link } from 'react-router-dom';
import './ComingSoon.css';

const ComingSoon = () => {
  return (
    <main id="coming-soon-page">
      <section className="coming-soon-hero">
        <div className="container">
          <span className="section-label">Give Now</span>
          <h1>This Page Is Not Available Yet</h1>
          <p>We're still setting up online giving. See you soon!</p>
          <Link to="/" className="btn btn-primary btn-lg" id="coming-soon-home-btn">
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ComingSoon;
