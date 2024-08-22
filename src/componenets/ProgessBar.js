// src/components/ProgressBar.js
import React, { useState, useEffect } from 'react';
import '../style/progressBar.css';

const ProgressBar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
  
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollPosition(scrolled);
  
      if (winScroll > 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return (
      <div className={`progress-bar-container ${isVisible ? 'visible' : 'hidden'}`}>
        <div className="progress-bar-circle">
          <div className="progress-bar-arrow"></div>
          <svg className="progress-bar-svg">
            <circle cx="40" cy="40" r="35" />
            <circle cx="40" cy="40" r="35" style={{ strokeDashoffset: 220 - (220 * scrollPosition) / 100 }} />
          </svg>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;