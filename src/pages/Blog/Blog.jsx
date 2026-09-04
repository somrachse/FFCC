import { useEffect, useRef, useState } from 'react';
import communityImg from '../../assets/images/community-gathering.jpg';
import worshipImg from '../../assets/images/worship-event.jpg';
import youthImg from '../../assets/images/youth-ministry.jpg';
import bibleImg from '../../assets/images/bible-study.jpg';
import './Blog.css';

const featuredVideoUrl = 'https://www.facebook.com/reel/1599163541581668/';
const reuniteLocationUrl = 'https://maps.app.goo.gl/4K2JWyaPYuCFzvf77?g_st=ac';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [descExpanded, setDescExpanded] = useState(false);

  // Facebook's plain iframe embed can't be play/paused from our JS at all
  // (it's cross-origin), so scroll-triggered autoplay needs the SDK's
  // Embedded Video Player API instead: load the SDK, subscribe to the
  // player instance once it's ready, and drive play()/pause() off an
  // IntersectionObserver on the video's container.
  const featuredVideoWrapRef = useRef(null);
  const featuredPlayerRef = useRef(null);
  const shouldPlayRef = useRef(false);

  useEffect(() => {
    const setVisible = (visible) => {
      shouldPlayRef.current = visible;
      const player = featuredPlayerRef.current;
      if (!player) return;
      if (visible) player.play();
      else player.pause();
    };

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (featuredVideoWrapRef.current) observer.observe(featuredVideoWrapRef.current);

    const onXfbmlReady = (msg) => {
      if (msg.type !== 'video') return;
      featuredPlayerRef.current = msg.instance;
      msg.instance.mute();
      if (shouldPlayRef.current) msg.instance.play();
    };

    const initFB = () => {
      window.FB.Event.subscribe('xfbml.ready', onXfbmlReady);
      window.FB.XFBML.parse();
    };

    if (window.FB) {
      initFB();
    } else {
      window.fbAsyncInit = () => {
        window.FB.init({ xfbml: true, version: 'v21.0' });
        initFB();
      };
      if (!document.getElementById('facebook-jssdk')) {
        const script = document.createElement('script');
        script.id = 'facebook-jssdk';
        script.src = 'https://connect.facebook.net/en_US/sdk.js';
        script.async = true;
        script.defer = true;
        script.crossOrigin = 'anonymous';
        document.body.appendChild(script);
      }
    }

    return () => {
      observer.disconnect();
      if (window.FB) window.FB.Event.unsubscribe('xfbml.ready', onXfbmlReady);
    };
  }, []);

  const categories = ['All', 'Faith & Testimony', 'Church Life', 'Children & Youth', 'Education & Students', 'Community Care'];

  const blogPosts = [
    {
      category: 'Church Life',
      title: 'Every place holds a legacy. 🏛️',
      caption: "Here's a quick look at our Sombo Prei Kuk Student Field Trip—where history meets the next generation.\nThis is only the beginning. 🎥\nThe full video is coming soon. Don't miss it!",
      facebookPostUrl: 'https://www.facebook.com/FaithfulFamilyofChristChurch/posts/pfbid02w5FZhEiHSPCQYE6neJazVwGwCDKvRkNKcLVTyeb1eem5GodzKUSjueAsoqMHtMhZl',
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
            <div className="featured-card-image" ref={featuredVideoWrapRef}>
              <div id="fb-root"></div>
              <div
                className="fb-video"
                data-href={featuredVideoUrl}
                data-width="560"
                data-show-text="false"
                data-allowfullscreen="true"
              ></div>
            </div>
            <div className="featured-card-body">
              <span className="featured-card-category">Featured Story</span>
              <h2>REUNITE</h2>
              <div className="featured-desc">
                <p>
                  Greetings to all friends, brothers, and sisters in the love of Jesus Christ.<br />
                  Today, our church has an exciting new.<br />
                  This week, we will be hosting a special event for our Saturday Service called &ldquo;REUNITE&rdquo;.
                </p>
              </div>
              <div className={`featured-desc-more${descExpanded ? ' expanded' : ''}`}>
                <div className="featured-desc-more-inner">
                  <p>
                    Therefore, we would like to encourage all youth who are part of the FFCC
                    family—especially those who have been away from the church for
                    years—to come and join us.
                  </p>
                  <p>
                    Our event will take place this Saturday, the 29th. We look forward to
                    welcoming everyone starting at 5:40 PM.
                  </p>
                  <p>
                    Faithful Family of Christ Church Location:<br />
                    <a href={reuniteLocationUrl} target="_blank" rel="noopener noreferrer">
                      {reuniteLocationUrl}
                    </a>
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="featured-desc-toggle"
                onClick={() => setDescExpanded(!descExpanded)}
                id="featured-desc-toggle"
              >
                {descExpanded ? 'Read Less' : 'Read More'}
                <svg viewBox="0 0 24 24" className={descExpanded ? 'rotated' : ''}>
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </button>
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
                {post.facebookPostUrl ? (
                  <>
                    <div className="blog-card-fb-embed">
                      <iframe
                        src={`https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(post.facebookPostUrl)}&show_text=false&width=500`}
                        title={post.title}
                        style={{ border: 'none', overflow: 'hidden' }}
                        scrolling="no"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="blog-card-body">
                      <h3>{post.title}</h3>
                      {post.caption && (
                        <p>
                          {post.caption.split('\n').map((line, li) => (
                            <span key={li}>
                              {line}
                              {li < post.caption.split('\n').length - 1 && <br />}
                            </span>
                          ))}
                        </p>
                      )}
                    </div>
                  </>
                ) : (
                  <>
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
                  </>
                )}
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
