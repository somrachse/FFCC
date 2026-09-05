import { useEffect, useRef, useState } from 'react';
import './Blog.css';

const featuredVideoUrl = 'https://www.facebook.com/reel/1599163541581668/';
const reuniteLocationUrl = 'https://maps.app.goo.gl/4K2JWyaPYuCFzvf77?g_st=ac';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [descExpanded, setDescExpanded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const POSTS_PER_PAGE = 6;

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

  const categories = ['All', 'Education', 'Creative Class', 'Soccer Ministry', 'Youth Service', 'Sunday Service', 'Events', 'Others'];

  const blogPosts = [
    {
      category: 'Creative Class',
      title: 'Get Your Game Face On 🏆',
      caption: "Get your game face on!\nAre you ready for an even more amazing and exciting week? We've got fun games, intense team competitions for points, and awesome grand prizes waiting for the winning team! 🏆\nMark your calendars for Week 4 (May 25, 2024)! We are hosting a special \"Graphic Design\" session where you'll learn the basics of creating cool posters for FREE from an experienced guest speaker! 💻🎨\nDon't forget to comment below to score extra points for your team! 🚀\nBecause the competition is officially heating up! 🔥",
      facebookPostUrl: 'https://www.facebook.com/reel/1670022607385284/',
      useVideoPlugin: true,
    },
    {
      category: 'Youth Service',
      title: "NEW CAN'T FIX YOU 🛠️🚫",
      caption: "Real transformation doesn't come from a checklist or a gimmick. It comes from the inside out. 🔄\nIt comes from renewing our minds and stepping into true freedom. 🕊️\nJoin us this Saturday evening at 6:00 PM for Youth Service. 🙌\nCome find the change you actually need. 🌟",
      facebookPostUrl: 'https://www.facebook.com/reel/2529349774167877/',
    },
    {
      category: 'Soccer Ministry',
      title: 'More Than a Game ⚽️',
      caption: "Just like football players aim to score a goal, our goal is to spread the Good News. ⚽️📖\nWelcome to the FFCC Soccer Church Program! We're taking our youth Bible study to the pitch to share faith, community, and God's love with everyone around us.\n🗓 When: Every Friday\n⏰ Time: 6:00 PM – 8:00 PM\n🏃‍♂️ Activities: Warm-up, Training, Bible Study, and Matching!",
      facebookPostUrl: 'https://www.facebook.com/reel/1316837470434087/',
    },
    {
      category: 'Saturday Service',
      title: "The Life You Didn't Expect",
      caption: "Don't let pain stop your journey, but allow Him to transform it into glory.\nAre you ready to become a shining gem?",
      facebookPostUrl: 'https://www.facebook.com/reel/36442778698642458/',
      useVideoPlugin: true,
    },
    {
      category: 'Education',
      title: 'The Joy of Teaching 👨‍🏫✨',
      caption: "\"Seeing students grow day by day is what inspires me to keep teaching.\"\nIn this interview, Teacher Nick shares his passion for teaching, the challenges he faces, and the joy of investing in the next generation. Thank you for your faithful service and dedication to every student 📚❤️",
      facebookPostUrl: 'https://www.facebook.com/reel/789596277453650/',
      useVideoPlugin: true,
    },
    {
      category: 'Education',
      title: 'Field Trip Faith: Keat Farm 2025 🚌⛰️',
      caption: "Unforgettable memories made at Keat Farm! 🚌⛰️ The FFCC Student Field Trip 2025 was packed with joy, teamwork, and beautiful moments in nature. But the highlight of our journey was gathering together to dig into the Word, share the Gospel, and ignite a passion to live for Jesus every single day. Watch our journey! 🕊️🌱",
      facebookPostUrl: 'https://www.facebook.com/reel/953628703929308/',
      useVideoPlugin: true,
    },
    {
      category: 'Education',
      title: 'Learning as an Adventure 🌟',
      caption: "Learning is an adventure at FFCC Education! 🌟 Whether we're navigating the digital world in computer class or expressing our joy through music and drawing, every moment is a step forward.\nLove seeing our youth challenge themselves and our kids embrace the joy of learning. We aren't just a school; we're a family. ❤️\n\"Train up a child in the way he should go; even when he is old he will not depart from it.\" — Proverbs 22:6",
      facebookPostUrl: 'https://www.facebook.com/reel/1635060521044654/',
      useVideoPlugin: true,
    },
    {
      category: 'Events',
      title: 'He is risen! ✝️',
      caption: "Matthew 28:6\n'He is not here; for He is risen, as He said...'",
      facebookPostUrl: 'https://www.facebook.com/reel/1480892666770718/',
      useVideoPlugin: true,
    },
    {
      category: 'Others',
      title: 'FFCC School Pack Project 2025',
      caption: "Our mission transcends the simple provision of educational materials; it is about sowing seeds of faith 🌱 through His Church. We firmly believe that every child is a heritage from the Lord (Psalm 127:3). Therefore, we are honored to walk alongside them in their journey of spiritual growth ✨ and academic excellence 📚.\nIn 2025, by the grace of the Lord 🙏, we partnered with 27 churches 🏫 across Phnom Penh and various provinces, reaching 1,543 children and youths, delivering not only school packs 📚✏️🖍️ but also smiles and hope.\nWe extend our deepest gratitude 💐 to every leader, pastor, teacher, and youth volunteer 🤝 who labored in prayer 🙏 and sacrificially gave of their strength and heart 💛 to this mission.\nTo God be the glory!",
      facebookPostUrl: 'https://www.facebook.com/reel/2013374609245267/',
      useVideoPlugin: true,
    },
    {
      category: 'Others',
      title: 'Light in the Streets — Jesus, a Savior for all',
      caption: "\"The light shines in the darkness, and the darkness has not overcome it.\"\nWe walked the streets of Phnom Penh, bringing small love gifts to the homeless, the cold, and the hungry sleeping in the dark alleys and hidden corners of the city.\nA simple reminder that they are not forgotten — they are seen, they are loved, and there is hope in Jesus.",
      facebookPostUrl: 'https://www.facebook.com/reel/922595650468933/',
      useVideoPlugin: true,
    },
    {
      category: 'Others',
      title: 'Shelter From the Storm: Dump Hill Tarp Project',
      caption: "Each rainy season is a difficult time for the Dump Hill community 🌧️, and we count it a blessing to stand with them again this year. By covering homes with strong new tarps ⛺, we hope to give families warmth, shelter, and a reminder that God sees and cares for them. 🙏✨\nThank you to all our friends, supporters and volunteers whose generosity and willingness to serve make this ministry possible. 🤝💖 Your hands and hearts are the reason these families stay protected through the storms.",
      facebookPostUrl: 'https://www.facebook.com/reel/1374847984294797/',
      useVideoPlugin: true,
    },
  ];

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
    document.getElementById('blog-categories')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
                onClick={() => handleCategoryClick(cat)}
                id={`category-${cat.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="blog-grid">
            {paginatedPosts.map((post, i) => (
              <article className="blog-card" key={i} id={`blog-card-${i}`}>
                {post.facebookPostUrl ? (
                  <>
                    <div className="blog-card-fb-embed">
                      <iframe
                        src={post.useVideoPlugin
                          ? `https://www.facebook.com/plugins/video.php?height=192&href=${encodeURIComponent(post.facebookPostUrl)}&show_text=false&width=340&t=0`
                          : `https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(post.facebookPostUrl)}&show_text=false&width=340`}
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
          {totalPages > 1 && (
            <div className="pagination" id="blog-pagination">
              <button
                className="pagination-btn"
                aria-label="Previous page"
                disabled={currentPage === 1}
                onClick={() => goToPage(Math.max(1, currentPage - 1))}
              >
                <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
              </button>
              {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((page) => (
                <button
                  key={page}
                  className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
                  onClick={() => goToPage(page)}
                >
                  {page}
                </button>
              ))}
              <button
                className="pagination-btn"
                aria-label="Next page"
                disabled={currentPage === totalPages}
                onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
              >
                <svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Blog;
