import { useState } from 'react';
import Newsletter from '../../components/Newsletter/Newsletter';
import churchImg from '../../assets/images/church-hero.png';
import communityImg from '../../assets/images/community-gathering.png';
import worshipImg from '../../assets/images/worship-event.png';
import bibleImg from '../../assets/images/bible-study.png';
import youthImg from '../../assets/images/youth-ministry.png';
import pastorMale from '../../assets/images/pastor-male.png';
import './Blog.css';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Sermons', 'Devotionals', 'Testimony', 'Community', 'Youth'];

  const blogPosts = [
    {
      image: churchImg,
      category: 'Sermons',
      title: 'Finding Peace in the Storm',
      excerpt: 'Discover how to find God\'s peace in the midst of life\'s greatest challenges and uncertainties.',
      author: 'Pastor John Smith',
      date: 'Jul 18, 2026',
      readTime: '5 min read',
    },
    {
      image: communityImg,
      category: 'Community',
      title: 'The Power of Serving Together',
      excerpt: 'When we serve together as a church family, we experience the joy of community in its fullest form.',
      author: 'Sarah Johnson',
      date: 'Jul 15, 2026',
      readTime: '4 min read',
    },
    {
      image: worshipImg,
      category: 'Devotionals',
      title: 'Morning Reflections: Psalm 23',
      excerpt: 'A deep dive into the beloved Psalm 23 and what it means for our daily walk with God.',
      author: 'Michael Chen',
      date: 'Jul 12, 2026',
      readTime: '6 min read',
    },
    {
      image: youthImg,
      category: 'Youth',
      title: 'Faith in the Next Generation',
      excerpt: 'How our youth ministry is equipping young people to be leaders in their schools and communities.',
      author: 'Emily Davis',
      date: 'Jul 8, 2026',
      readTime: '4 min read',
    },
    {
      image: bibleImg,
      category: 'Testimony',
      title: 'From Brokenness to Wholeness',
      excerpt: 'A powerful testimony of transformation and redemption through the grace of God.',
      author: 'Grace Rodriguez',
      date: 'Jul 5, 2026',
      readTime: '7 min read',
    },
    {
      image: churchImg,
      category: 'Sermons',
      title: 'The Heart of Worship',
      excerpt: 'Understanding what it truly means to worship God in spirit and in truth every day.',
      author: 'Pastor John Smith',
      date: 'Jul 1, 2026',
      readTime: '5 min read',
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
          <span className="section-label">Our Blog</span>
          <h1>Stories of Faith & Grace</h1>
          <p>
            Sermons, devotionals, testimonies, and reflections from our church community.
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
              <span className="featured-card-category">Featured Sermon</span>
              <h2>Walking in Grace: The Path of Forgiveness</h2>
              <p>
                Explore the transformative power of forgiveness and how God's grace 
                enables us to walk in freedom, releasing the burdens of the past 
                and embracing a future filled with hope.
              </p>
              <div className="featured-card-meta">
                <div className="author">
                  <div className="author-avatar">
                    <img src={pastorMale} alt="Pastor" />
                  </div>
                  <span>Pastor John Smith</span>
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
                id={`category-${cat.toLowerCase()}`}
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
                    <span className="read-time">
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                      {post.readTime}
                    </span>
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

      {/* Newsletter */}
      <Newsletter />
    </main>
  );
};

export default Blog;
