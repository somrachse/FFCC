import { useState } from 'react';
import churchImg from '../../assets/images/church-hero.jpg';
import communityImg from '../../assets/images/community-gathering.jpg';
import worshipImg from '../../assets/images/worship-event.jpg';
import bibleImg from '../../assets/images/bible-study.jpg';
import youthImg from '../../assets/images/youth-ministry.jpg';
import pastorMale from '../../assets/images/pastor-male.jpg';
import './Blog.css';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Faith & Testimony', 'Church Life', 'Children & Youth', 'Education & Students', 'Community Care'];

  const blogPosts = [
    {
      image: churchImg,
      category: 'Church Life',
      title: 'Finding Peace in the Storm',
      excerpt: 'Discover how to find God\'s peace in the midst of life\'s greatest challenges and uncertainties.',
      author: 'Phillip',
      date: 'Jul 18, 2026',
    },
    {
      image: communityImg,
      category: 'Community Care',
      title: 'The Power of Serving Together',
      excerpt: 'When we serve together as a church family, we experience the joy of community in its fullest form.',
      author: 'Lean Chanreaksmey ("Smile")',
      date: 'Jul 15, 2026',
    },
    {
      image: worshipImg,
      category: 'Faith & Testimony',
      title: 'Morning Reflections: Psalm 23',
      excerpt: 'A deep dive into the beloved Psalm 23 and what it means for our daily walk with God.',
      author: 'Phillip',
      date: 'July 10, 2026'
    },
    {
      image: youthImg,
      category: 'Children & Youth',
      title: 'Faith in the Next Generation',
      excerpt: 'How our youth ministry is equipping young people to be leaders in their schools and communities.',
      author: 'Ol Sotheavin ("Vin")',
      date: 'Jul 8, 2026',
    },
    {
      image: bibleImg,
      category: 'Faith & Testimony',
      title: 'From Brokenness to Wholeness',
      excerpt: 'A story of transformation and redemption through the grace of God, shared by a member of the FFCC family.',
      author: 'FFCC Church Family',
      date: 'Jul 5, 2026',
    },
    {
      image: bibleImg,
      category: 'Education & Students',
      title: 'Learning That Opens Doors',
      excerpt: 'How FFCC\'s Education Ministry helps students grow in confidence, responsibility, and future opportunity.',
      author: 'Ouch Sreyroth ("Elsie")',
      date: 'Jul 1, 2026',
    },
  ];

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(p => p.category === activeCategory);

  return (
    <main id="blog-page">
      {/* Hero */}
      <section className="blog-hero" id="blog-hero">
        <div className="container">
          <span className="section-label">Stories From FFCC</span>
          <h1>God at Work in Everyday Lives</h1>
          <p>
            Some of the most meaningful parts of ministry cannot be measured only by
            numbers. They are found in people — glimpses of what God is doing through
            the everyday life of FFCC.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="featured-post" id="featured-post">
        <div className="container">
          <div className="featured-card">
            <div className="featured-card-image">
              <img src={bibleImg} alt="Featured post" />
            </div>
            <div className="featured-card-body">
              <span className="featured-card-category">Featured Story</span>
              <h2>Walking in Grace: The Path of Forgiveness</h2>
              <p>
                Explore the transformative power of forgiveness and how God's grace
                enables us to walk in freedom, releasing the burdens of the past
                and embracing a future filled with hope.
              </p>
              <div className="featured-card-meta">
                <div className="author">
                  <div className="author-avatar">
                    <img src={pastorMale} alt="Phillip" />
                  </div>
                  <span>Phillip</span>
                </div>
                <span>Jul 20, 2026</span>
                <span>8 min read</span>
              </div>
              <a href="#" className="btn btn-primary" id="featured-read-btn">Read Full Article</a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="blog-grid-section" id="blog-grid-section">
        <div className="container">
          {/* Category Tabs */}
          <div className="blog-categories" id="blog-categories">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
                id={`category-${cat.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="blog-grid">
            {filteredPosts.map((post, i) => (
              <article className="blog-card" key={i} id={`blog-card-${i}`}>
                <div className="blog-card-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-category">{post.category}</div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="blog-card-footer">
                    <span>{post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="pagination" id="blog-pagination">
            <button className="pagination-btn" aria-label="Previous page">
              <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
            </button>
            <button className="pagination-btn active">1</button>
            <button className="pagination-btn">2</button>
            <button className="pagination-btn">3</button>
            <button className="pagination-btn" aria-label="Next page">
              <svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
