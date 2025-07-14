import React, { useState } from 'react';
import './YouTubeSection.css';

const YouTubeSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const youtubeVideos = [
    {
      id: 1,
      title: "Data Analytics Tutorial",
      videoId: "4UzJzgd7R4U",
      thumbnail: `https://img.youtube.com/vi/4UzJzgd7R4U/maxresdefault.jpg`,
      description: "Comprehensive data analytics tutorial covering essential concepts and practical applications.",
      category: "tutorial",
      url: "https://www.youtube.com/watch?v=4UzJzgd7R4U"
    },
    {
      id: 2,
      title: "R Programming for Data Analysis",
      videoId: "yIsUdgmCTqQ",
      thumbnail: `https://img.youtube.com/vi/yIsUdgmCTqQ/maxresdefault.jpg`,
      description: "Learn R programming fundamentals for effective data analysis and visualization.",
      category: "r-programming",
      url: "https://www.youtube.com/watch?v=yIsUdgmCTqQ"
    },
    {
      id: 3,
      title: "Statistical Analysis Deep Dive",
      videoId: "9eNVDzfD9Ko",
      thumbnail: `https://img.youtube.com/vi/9eNVDzfD9Ko/maxresdefault.jpg`,
      description: "Advanced statistical analysis techniques for data-driven decision making.",
      category: "statistics",
      url: "https://www.youtube.com/watch?v=9eNVDzfD9Ko"
    },
    {
      id: 4,
      title: "Business Intelligence Dashboard",
      videoId: "BFGF1L-s9KE",
      thumbnail: `https://img.youtube.com/vi/BFGF1L-s9KE/maxresdefault.jpg`,
      description: "Creating powerful business intelligence dashboards for organizational insights.",
      category: "dashboard",
      url: "https://www.youtube.com/watch?v=BFGF1L-s9KE&t=651s"
    },
    {
      id: 5,
      title: "Machine Learning Applications",
      videoId: "FVCV1h0Qsko",
      thumbnail: `https://img.youtube.com/vi/FVCV1h0Qsko/maxresdefault.jpg`,
      description: "Practical machine learning applications in real-world data analysis scenarios.",
      category: "machine-learning",
      url: "https://www.youtube.com/watch?v=FVCV1h0Qsko&pp=0gcJCb4JAYcqIYzv"
    },
    {
      id: 6,
      title: "Data Visualization Techniques",
      videoId: "HxC33-YlVno",
      thumbnail: `https://img.youtube.com/vi/HxC33-YlVno/maxresdefault.jpg`,
      description: "Master data visualization techniques for compelling data storytelling.",
      category: "visualization",
      url: "https://www.youtube.com/watch?v=HxC33-YlVno"
    },
    {
      id: 7,
      title: "Python for Data Science",
      videoId: "4ngChlKekwE",
      thumbnail: `https://img.youtube.com/vi/4ngChlKekwE/maxresdefault.jpg`,
      description: "Complete Python tutorial for data science and analytics applications.",
      category: "python",
      url: "https://www.youtube.com/watch?v=4ngChlKekwE"
    },
    {
      id: 8,
      title: "Database Analytics",
      videoId: "aN3YlKMEA_o",
      thumbnail: `https://img.youtube.com/vi/aN3YlKMEA_o/maxresdefault.jpg`,
      description: "Advanced database analytics and SQL optimization techniques.",
      category: "database",
      url: "https://www.youtube.com/watch?v=aN3YlKMEA_o"
    },
    {
      id: 9,
      title: "Supply Chain Analytics",
      videoId: "72FgbNRtUvg",
      thumbnail: `https://img.youtube.com/vi/72FgbNRtUvg/maxresdefault.jpg`,
      description: "Supply chain optimization using advanced analytics and data-driven insights.",
      category: "supply-chain",
      url: "https://www.youtube.com/watch?v=72FgbNRtUvg"
    },
    {
      id: 10,
      title: "Predictive Analytics",
      videoId: "FZdk8EzvgHI",
      thumbnail: `https://img.youtube.com/vi/FZdk8EzvgHI/maxresdefault.jpg`,
      description: "Building predictive models for business forecasting and decision support.",
      category: "predictive",
      url: "https://www.youtube.com/watch?v=FZdk8EzvgHI"
    },
    {
      id: 11,
      title: "Excel Advanced Analytics",
      videoId: "6vOdC6LHNmI",
      thumbnail: `https://img.youtube.com/vi/6vOdC6LHNmI/maxresdefault.jpg`,
      description: "Advanced Excel techniques for professional data analysis and reporting.",
      category: "excel",
      url: "https://www.youtube.com/watch?v=6vOdC6LHNmI&pp=0gcJCb4JAYcqIYzv"
    },
    {
      id: 12,
      title: "Repair & Maintenance Analytics",
      videoId: "cXBrK8yosQI",
      thumbnail: `https://img.youtube.com/vi/cXBrK8yosQI/maxresdefault.jpg`,
      description: "Analytics solutions for repair and maintenance department optimization.",
      category: "maintenance",
      url: "https://www.youtube.com/watch?v=cXBrK8yosQI"
    },
    {
      id: 13,
      title: "Quality Control Analytics",
      videoId: "Ay5E2AQkJOs",
      thumbnail: `https://img.youtube.com/vi/Ay5E2AQkJOs/maxresdefault.jpg`,
      description: "Statistical process control and quality analytics for manufacturing excellence.",
      category: "quality",
      url: "https://www.youtube.com/watch?v=Ay5E2AQkJOs"
    },
    {
      id: 14,
      title: "Performance Metrics Dashboard",
      videoId: "qQAqCNrZLcE",
      thumbnail: `https://img.youtube.com/vi/qQAqCNrZLcE/maxresdefault.jpg`,
      description: "Creating comprehensive performance metrics dashboards for organizational KPIs.",
      category: "dashboard",
      url: "https://www.youtube.com/watch?v=qQAqCNrZLcE"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Videos', count: youtubeVideos.length },
    { id: 'tutorial', name: 'Tutorials', count: youtubeVideos.filter(v => v.category === 'tutorial').length },
    { id: 'r-programming', name: 'R Programming', count: youtubeVideos.filter(v => v.category === 'r-programming').length },
    { id: 'python', name: 'Python', count: youtubeVideos.filter(v => v.category === 'python').length },
    { id: 'dashboard', name: 'Dashboards', count: youtubeVideos.filter(v => v.category === 'dashboard').length },
    { id: 'machine-learning', name: 'Machine Learning', count: youtubeVideos.filter(v => v.category === 'machine-learning').length }
  ];

  const filteredVideos = activeCategory === 'all' 
    ? youtubeVideos 
    : youtubeVideos.filter(video => video.category === activeCategory);

  return (
    <section id="youtube" className="youtube-portfolio">
      <div className="container">
        {/* Channel Overview */}
        <div className="channel-overview">
          <div className="channel-header">
            <div className="channel-info">
              <div className="channel-avatar">
                <img src="/pictures/profile-photo.jpg" alt="Dwi Hery Purnomo" />
              </div>
              <div className="channel-details">
                <h3>
                  @dwihpjavas - Repair & Maintenance Expert
                  <i className="fas fa-check-circle" style={{color: '#ff0000', marginLeft: '8px'}}></i>
                </h3>
                <p className="channel-description">
                  Welcome to my YouTube channel! Here I share knowledge about Repair & Maintenance Management 
                  for Heavy Equipment. With over 25 years of experience, I help maintenance professionals 
                  improve their skills and share best practices in equipment management and predictive maintenance.
                </p>
                <div className="channel-stats">
                  <div className="stat">
                    <span className="stat-number">100+</span>
                    <span className="stat-label">Videos</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">3,200+</span>
                    <span className="stat-label">Subscribers</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">1M+</span>
                    <span className="stat-label">Views</span>
                  </div>
                </div>
                <div className="channel-buttons">
                  <a href="https://www.youtube.com/@dwihpjavas" className="subscribe-btn" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-youtube"></i>
                    Subscribe Now
                  </a>
                  <a href="https://www.youtube.com/@dwihpjavas/playlists" className="playlists-btn" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-list"></i>
                    View Playlists
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Categories */}
        <div className="content-categories">
          <h3>Video Categories</h3>
          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Video Grid */}
        <div className="video-grid">
          {filteredVideos.map(video => (
            <div key={video.id} className="video-card">
              <div className="video-thumbnail">
                <img src={video.thumbnail} alt={video.title} loading="lazy" />
                <div className="play-button">
                  <i className="fas fa-play"></i>
                </div>
              </div>
              <div className="video-info">
                <h4>{video.title}</h4>
                <p>{video.description}</p>
                <a href={video.url} className="external-link" target="_blank" rel="noopener noreferrer">
                  Watch on YouTube <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Upload Section */}
        <div className="upload-section">
          <div className="upload-card">
            <div className="upload-icon">
              <i className="fas fa-video"></i>
            </div>
            <h4>New Content Weekly</h4>
            <p>
              I regularly upload new tutorials and analytics insights. Subscribe to stay updated with the latest 
              data analytics techniques and industry best practices.
            </p>
            <a href="https://www.youtube.com/@dwiherypaurnomo" className="upload-btn" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-bell"></i>
              Subscribe for Updates
            </a>
          </div>
        </div>

        {/* Upcoming Content */}
        <div className="upcoming-content">
          <h3>Upcoming Content</h3>
          <div className="upcoming-list">
            <div className="upcoming-item">
              <div className="upcoming-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="upcoming-info">
                <h4>Advanced Time Series Analysis</h4>
                <p>Deep dive into time series forecasting techniques using R and Python for business applications.</p>
              </div>
            </div>
            <div className="upcoming-item">
              <div className="upcoming-icon">
                <i className="fas fa-robot"></i>
              </div>
              <div className="upcoming-info">
                <h4>AI in Manufacturing Analytics</h4>
                <p>Exploring artificial intelligence applications in manufacturing and industrial analytics.</p>
              </div>
            </div>
            <div className="upcoming-item">
              <div className="upcoming-icon">
                <i className="fas fa-database"></i>
              </div>
              <div className="upcoming-info">
                <h4>Big Data Analytics with Spark</h4>
                <p>Comprehensive tutorial on processing large datasets using Apache Spark and distributed computing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
