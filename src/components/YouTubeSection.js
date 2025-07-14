import React, { useState } from 'react';
import './YouTubeSection.css';

const YouTubeSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Function to get YouTube thumbnail with better quality fallback
  const getYouTubeThumbnail = (videoId, customThumbnail) => {
    if (customThumbnail) {
      return customThumbnail;
    }
    
    // Extended list of problematic videos - use higher quality fallback
    const problematicVideos = [
      'FVCV1h0Qsko', 
      'aN3YlKMEA_o', 
      '72FgbNRtUvg',
      'qQAqCNrZLcE',  // Maintenance Planning Excellence
      '9eNVDzfD9Ko',  // Equipment Maintenance Best Practices
      'FZdk8EzvgHI',  // Advanced Maintenance Techniques
      'Q--EpKVU9Fw'   // Import Handling
    ];
    
    const startWithMQ = problematicVideos.includes(videoId);
    
    if (startWithMQ) {
      return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; // 480x360 - better quality
    }
    
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  // Enhanced error handling function with better quality fallbacks
  const handleThumbnailError = (e) => {
    const videoId = e.target.getAttribute('data-video-id');
    const currentSrc = e.target.src;
    
    // Define fallback sequence with better quality options
    const fallbackUrls = [
      `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,    // 1280x720
      `https://img.youtube.com/vi/${videoId}/sddefault.jpg`,        // 640x480
      `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,        // 480x360
      `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,        // 320x180
      `https://img.youtube.com/vi/${videoId}/0.jpg`,                // Full size thumbnail
      `https://img.youtube.com/vi/${videoId}/1.jpg`,                // Frame at 25% 
      `https://img.youtube.com/vi/${videoId}/2.jpg`,                // Frame at 50%
      `https://img.youtube.com/vi/${videoId}/3.jpg`,                // Frame at 75%
      `https://img.youtube.com/vi/${videoId}/default.jpg`,          // 120x90 (last resort)
      'https://via.placeholder.com/320x180/f1f5f9/64748b?text=Video+Thumbnail'
    ];
    
    // Find current URL in fallback sequence
    let currentIndex = -1;
    fallbackUrls.forEach((url, index) => {
      const fileName = url.split('/').pop();
      if (currentSrc.includes(fileName)) {
        currentIndex = index;
      }
    });
    
    // Try next fallback
    if (currentIndex < fallbackUrls.length - 1) {
      const nextUrl = fallbackUrls[currentIndex + 1];
      console.log(`Trying fallback for ${videoId}: ${nextUrl}`);
      e.target.src = nextUrl;
    } else {
      // Last resort - create a custom thumbnail with video ID
      e.target.src = `https://via.placeholder.com/320x180/e2e8f0/64748b?text=${encodeURIComponent('Video: ' + videoId)}`;
    }
  };

  // Video categories
  const videoCategories = [
    { id: 'all', name: 'All Videos', count: 0 },
    { id: 'maintenance', name: 'Maintenance Management', count: 0 },
    { id: 'data-transform', name: 'Data Transform & Analytics', count: 0 },
    { id: 'supply-chain', name: 'Supply Chain Management', count: 0 },
    { id: 'inventory', name: 'Inventory Control', count: 0 },
    { id: 'r-programming', name: 'R Programming Analytics', count: 0 },
    { id: 'python-analytics', name: 'Python Data Analytics', count: 0 },
    { id: 'project-movement', name: 'Project Movement', count: 0 },
    { id: 'import-handling', name: 'Import Handling', count: 0 }
  ];

  // Video data
  const videos = [
    // Maintenance Management
    {
      id: 'maintenance-1',
      title: 'Heavy Equipment Maintenance Planning',
      description: 'Comprehensive guide to maintenance planning for mining equipment',
      category: 'maintenance',
      videoId: '4UzJzgd7R4U',
      duration: '12:45'
    },
    {
      id: 'maintenance-2',
      title: 'Predictive Maintenance Strategies',
      description: 'Advanced predictive maintenance techniques for mining operations',
      category: 'maintenance',
      videoId: 'yIsUdgmCTqQ',
      duration: '15:30'
    },
    {
      id: 'maintenance-3',
      title: 'Equipment Maintenance Best Practices',
      description: 'Best practices for maintaining mining equipment',
      category: 'maintenance',
      videoId: '9eNVDzfD9Ko',
      duration: '18:20'
    },
    {
      id: 'maintenance-4',
      title: 'Maintenance Management Systems',
      description: 'Modern maintenance management systems for mining operations',
      category: 'maintenance',
      videoId: 'BFGF1L-s9KE',
      duration: '22:15'
    },
    {
      id: 'maintenance-5',
      title: 'Preventive Maintenance Strategies',
      description: 'Preventive maintenance approaches for mining equipment',
      category: 'maintenance',
      videoId: 'FVCV1h0Qsko',
      duration: '16:45',
      customThumbnail: 'https://img.youtube.com/vi/FVCV1h0Qsko/hqdefault.jpg'
    },
    {
      id: 'maintenance-6',
      title: 'Maintenance Scheduling & Planning',
      description: 'Effective maintenance scheduling and planning techniques',
      category: 'maintenance',
      videoId: 'HxC33-YlVno',
      duration: '19:30'
    },
    {
      id: 'maintenance-7',
      title: 'Equipment Reliability Management',
      description: 'Managing equipment reliability in mining operations',
      category: 'maintenance',
      videoId: '4ngChlKekwE',
      duration: '14:20'
    },
    {
      id: 'maintenance-8',
      title: 'Maintenance Cost Optimization',
      description: 'Optimizing maintenance costs in mining operations',
      category: 'maintenance',
      videoId: 'aN3YlKMEA_o',
      duration: '25:10',
      customThumbnail: 'https://img.youtube.com/vi/aN3YlKMEA_o/hqdefault.jpg'
    },
    {
      id: 'maintenance-9',
      title: 'Maintenance Performance Metrics',
      description: 'Key performance indicators for maintenance operations',
      category: 'maintenance',
      videoId: '72FgbNRtUvg',
      duration: '20:45',
      customThumbnail: 'https://img.youtube.com/vi/72FgbNRtUvg/hqdefault.jpg'
    },
    {
      id: 'maintenance-10',
      title: 'Advanced Maintenance Techniques',
      description: 'Advanced techniques for equipment maintenance',
      category: 'maintenance',
      videoId: 'FZdk8EzvgHI',
      duration: '17:30'
    },
    {
      id: 'maintenance-11',
      title: 'Maintenance Data Analytics',
      description: 'Using data analytics for maintenance optimization',
      category: 'maintenance',
      videoId: '6vOdC6LHNmI',
      duration: '13:15'
    },
    {
      id: 'maintenance-12',
      title: 'Maintenance Process Improvement',
      description: 'Improving maintenance processes and workflows',
      category: 'maintenance',
      videoId: 'cXBrK8yosQI',
      duration: '21:30'
    },
    {
      id: 'maintenance-13',
      title: 'Equipment Lifecycle Management',
      description: 'Managing equipment lifecycle in mining operations',
      category: 'maintenance',
      videoId: 'Ay5E2AQkJOs',
      duration: '18:45'
    },
    {
      id: 'maintenance-14',
      title: 'Maintenance Planning Excellence',
      description: 'Excellence in maintenance planning and execution',
      category: 'maintenance',
      videoId: 'qQAqCNrZLcE',
      duration: '24:20'
    },

    // Data Transform & Analytics
    {
      id: 'data-1',
      title: 'Mining Data Analytics Overview',
      description: 'Introduction to data analytics in mining operations',
      category: 'data-transform',
      videoId: 'FZdk8EzvgHI',
      duration: '17:30'
    },
    {
      id: 'data-2',
      title: 'Transform Raw Mining Data',
      description: 'Techniques for transforming raw mining data into insights',
      category: 'data-transform',
      videoId: 'cXBrK8yosQI',
      duration: '21:30'
    },
    {
      id: 'data-3',
      title: 'Data Analytics for Mining Operations',
      description: 'Advanced data analytics techniques for mining',
      category: 'data-transform',
      videoId: '6vOdC6LHNmI',
      duration: '13:15'
    },
    {
      id: 'data-4',
      title: 'Mining Data Visualization',
      description: 'Data visualization techniques for mining operations',
      category: 'data-transform',
      videoId: 'xiNOGLBYYD4',
      duration: '19:45'
    },

    // Supply Chain Management
    {
      id: 'supply-1',
      title: 'Mining Supply Chain Optimization',
      description: 'Best practices for supply chain management in mining',
      category: 'supply-chain',
      videoId: 'qQAqCNrZLcE',
      duration: '24:20'
    },
    {
      id: 'supply-2',
      title: 'Supply Chain Analytics',
      description: 'Advanced analytics for supply chain optimization',
      category: 'supply-chain',
      videoId: 'MMD0_3om5gA',
      duration: '16:30'
    },
    {
      id: 'supply-3',
      title: 'Procurement Strategy for Mining',
      description: 'Strategic procurement approaches for mining operations',
      category: 'supply-chain',
      videoId: 'Ay5E2AQkJOs',
      duration: '18:45'
    },

    // Inventory Control
    {
      id: 'inventory-1',
      title: 'Inventory Management Systems',
      description: 'Modern inventory control systems for mining operations',
      category: 'inventory',
      videoId: 'YPt2nBIZuKw',
      duration: '14:20'
    },
    {
      id: 'inventory-2',
      title: 'Inventory Optimization Techniques',
      description: 'Advanced inventory optimization for mining operations',
      category: 'inventory',
      videoId: '4UzJzgd7R4U',
      duration: '12:45'
    },

    // Import Handling
    {
      id: 'import-1',
      title: 'Import Handling for Mining Equipment',
      description: 'Best practices for handling mining equipment imports',
      category: 'import-handling',
      videoId: 'Q--EpKVU9Fw',
      duration: '13:15'
    }
  ];

  // Update category counts
  const updatedCategories = videoCategories.map(category => {
    if (category.id === 'all') {
      return { ...category, count: videos.length };
    }
    const count = videos.filter(video => video.category === category.id).length;
    return { ...category, count };
  });

  const filteredVideos = activeCategory === 'all' 
    ? videos 
    : videos.filter(video => video.category === activeCategory);

  const handleVideoClick = (videoId) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <section id="youtube" className="youtube-section">
      <div className="container">
        <h2 className="section-title">YouTube Channel</h2>
        <p className="youtube-description">
          Educational content focused on mining industry operations, data analytics, 
          and supply chain management based on 25+ years of professional experience.
        </p>

        {/* Video Categories */}
        <div className="video-categories">
          <h3>Video Categories</h3>
          <div className="category-filters">
            {updatedCategories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Channel Stats */}
        <div className="channel-stats">
          <div className="stat-item">
            <div className="stat-icon">
              <i className="fas fa-play-circle"></i>
            </div>
            <div className="stat-info">
              <h4>44</h4>
              <p>Total Videos</p>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <i className="fas fa-users"></i>
            </div>
            <div className="stat-info">
              <h4>4.56K</h4>
              <p>Subscribers</p>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <i className="fas fa-eye"></i>
            </div>
            <div className="stat-info">
              <h4>327K+</h4>
              <p>Total Views</p>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <i className="fas fa-thumbs-up"></i>
            </div>
            <div className="stat-info">
              <h4>99%</h4>
              <p>Positive Feedback</p>
            </div>
          </div>
        </div>

        {/* Video Grid */}
        <div className="videos-grid">
          {filteredVideos.map(video => (
            <div key={video.id} className="video-card" onClick={() => handleVideoClick(video.videoId)}>
              <div className="video-thumbnail">
                <img 
                  src={getYouTubeThumbnail(video.videoId, video.customThumbnail)} 
                  alt={video.title}
                  data-video-id={video.videoId}
                  onError={handleThumbnailError}
                  loading="lazy"
                />
                <div className="video-overlay">
                  <div className="play-button">
                    <i className="fas fa-play"></i>
                  </div>
                  <div className="video-duration">{video.duration}</div>
                </div>
              </div>
              <div className="video-info">
                <h4>{video.title}</h4>
                <p>{video.description}</p>
                <div className="video-meta">
                  <span className="video-category">
                    {updatedCategories.find(cat => cat.id === video.category)?.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
