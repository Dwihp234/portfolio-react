import React, { useState } from 'react';
import './SCMGallery.css';

// Data gambar dan placeholder (3x3 grid)
const initialImages = [
  { src: '/gallery/streamlit/st1.png', title: 'SCM Dashboard - st1', caption: 'The function of integrated data in a single SCM Dashboard is highly beneficial.' },
  { src: '/gallery/streamlit/st2.png', title: 'SCM Dashboard - st2', caption: 'Purchases are controlled over time based on criteria and company growth.' },
  { src: '/gallery/streamlit/st3.png', title: 'SCM Dashboard - st3', caption: 'Productivity performance of each purchasing staff is monitored over time, for example by quarter.' },
  { src: '/gallery/streamlit/st4.png', title: 'SCM Dashboard - st4', caption: 'Personal performance percentages can be managed year over year.' },
  { src: '/gallery/streamlit/st5.png', title: 'SCM Dashboard - st5', caption: 'Purchases of goods and each type can be well controlled if above average.' },
  { src: '/gallery/streamlit/st6.png', title: 'SCM Dashboard - st6', caption: 'Fuel and non-fuel usage can be monitored periodically.' },
  { src: '/gallery/streamlit/st7.png', title: 'SCM Dashboard - st7', caption: 'The relationship between purchases and usage can be controlled, whether in one period there is overstock or shortage, using regression analysis.' },
  { src: '/gallery/streamlit/st8.png', title: 'SCM Dashboard - st8', caption: 'Categories and groups of equipment and heavy equipment can be monitored and controlled regularly.' },
  { src: '/gallery/streamlit/st9.png', title: 'SCM Dashboard - st9', caption: 'Consumable items usage can be managed and monitored over time.' },
];


const SCMGallery = () => {
  const [images] = useState(initialImages);
  const [zoomImg, setZoomImg] = useState(null);

  const handleZoom = (img) => {
    if (img.src) setZoomImg(img);
  };
  const closeZoom = () => setZoomImg(null);

  return (
    <section className="scm-gallery-section">
      <div className="container">
        <h2 className="section-title">Integrated SCM Department Dashboard</h2>
        <p className="section-subtitle">
          Knowing your current position is crucial for determining future direction and strategy. Integrated, accessible, and up-to-date data is the key to continuous improvement and even shifting to new opportunities. This is the importance of visualization, integration, and data analytics. One example is the web design we created to integrate all types of cross-departmental data, both current and historical, to support better and more targeted decision making.
        </p>
        <div className="scm-puzzle-anim-container">
          {/* Animasi puzzle orbit */}
          <img src="/gallery/scm/piece1.png" className="scm-puzzle-anim piece1" alt="Puzzle 1" />
          <img src="/gallery/scm/piece2.png" className="scm-puzzle-anim piece2" alt="Puzzle 2" />
          <img src="/gallery/scm/piece3.png" className="scm-puzzle-anim piece3" alt="Puzzle 3" />
          <img src="/gallery/scm/piece4.png" className="scm-puzzle-anim piece4" alt="Puzzle 4" />
          {/* <img src="/gallery/scm/piece5.png" className="scm-puzzle-anim piece5" alt="Puzzle 5" /> */}
          <img src="/gallery/scm/puzzle.png" className="scm-puzzle-main" alt="Puzzle Main" />
        </div>
        <div style={{textAlign: 'center', margin: '32px 0'}}>
          <img src="/gallery/scm/puzzle.png" alt="Puzzle Data" style={{maxWidth: '220px', marginBottom: '16px'}} />
          <div style={{fontSize: '1.1em', color: '#9d4285ff', fontWeight: 500}}>
            Don't let the data on every computer remain like a conventional typewriter.<br/>
            It's time to connect all data in real time and simulate for better control.
            </div>
            
        </div>

        {/* /* tambahkan piece10 disini */}
        



        <div className="scm-gallery-grid-3x3">
          {images.map((img, idx) => (
            <div key={idx} className={`scm-gallery-card${img.src ? '' : ' scm-gallery-card-empty'}`}
              onClick={() => handleZoom(img)}
              style={{cursor: img.src ? 'zoom-in' : 'default'}}
            >
              {img.src ? (
                <img src={img.src} alt={img.title} className="scm-gallery-img" />
              ) : (
                <div className="scm-gallery-img-placeholder">Frame Kosong</div>
              )}
              <div className="scm-gallery-title">{img.title || 'Judul Gambar'}</div>
              <div className="scm-gallery-caption">
                {img.caption || <span className="scm-gallery-caption-placeholder">(Keterangan gambar di sini)</span>}
              </div>
            </div>
          ))}
        </div>

        {/* Modal Zoom */}
        {zoomImg && (
          <div className="scm-gallery-modal" onClick={closeZoom}>
            <div className="scm-gallery-modal-content" onClick={e => e.stopPropagation()}>
              <img src={zoomImg.src} alt={zoomImg.title} className="scm-gallery-modal-img" />
              <div className="scm-gallery-modal-title">{zoomImg.title}</div>
              <div className="scm-gallery-modal-caption">{zoomImg.caption}</div>
              <button className="scm-gallery-modal-close" onClick={closeZoom}>Close</button>
            </div>
          </div>
        )}
        {/* Paragraf YouTube CTA */}
        <div className="scm-gallery-youtube-cta" style={{marginTop: '36px', textAlign: 'center'}}>
          <p style={{fontSize: '1.08em', color: '#374151', marginBottom: '18px'}}>
            For further explanation and demo video, please visit the following YouTube link:
          </p>
          <a href="https://youtu.be/u8ovKr04wVg" target="_blank" rel="noopener noreferrer" style={{display: 'inline-block'}}>
            <img
              src="https://img.youtube.com/vi/u8ovKr04wVg/hqdefault.jpg"
              alt="SCM Dashboard YouTube Video Thumbnail"
              style={{width: '360px', maxWidth: '100%', borderRadius: '12px', boxShadow: '0 2px 12px rgba(30,60,114,0.10)', marginBottom: '8px', cursor: 'pointer'}}
            />
            <div style={{color: '#2563eb', fontWeight: 600, fontSize: '1.05em', textDecoration: 'underline', marginTop: '6px'}}>
              Watch SCM Dashboard Video
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SCMGallery;
