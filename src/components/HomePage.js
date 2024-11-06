import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="logo">Channel-<span className="highlight">IQ</span></div>
        <div className="nav-links">
          <a href="#">Clipper</a>
          <a href="#">SEO</a>
          <a href="#">Thumbnail</a>
          <a href="#">Pricing</a>
          <button className="sign-in-btn">Sign In</button>
          <button className="sign-up-btn">Sign Up</button>
        </div>
      </nav>
      <main className="main-content">
        <h1>Clip your long video in <span className="highlight">one</span> click.</h1>
        <p>✨ Meet Clipper, multi-modal AI that can clip any type of video.</p>
        <div className="video-preview">
          <img src="video-thumbnail-left.png" alt="Video preview 1" />
          <div className="features">
            <ul>
              <li>Auto Captions</li>
              <li>Sound Improvement</li>
              <li>Auto Clipping</li>
              <li>AI SEO</li>
              <li>Quality Enhancer</li>
            </ul>
          </div>
          <img src="video-thumbnail-right.png" alt="Video preview 2" />
        </div>
        <div className="input-section">
          <input type="url" placeholder="https://www.youtube.com" />
          <button className="get-clips-btn">Get Clips</button>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
