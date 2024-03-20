// Hero.jsx
import React from 'react';
import './Hero.css';
import arrow_btn from '../../assets/next.png'; 
import play_icon from '../../assets/play-button.png';
import pause_icon from '../../assets/pause.png';

export const Hero = ({ heroData, setHeroCount, heroCount, playStatus, setPlayStatus }) => {
  
  const togglePlayStatus = () => {
    setPlayStatus(!playStatus);
  };

  return (
    <div className="hero">
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the Features</p>
        <img src={arrow_btn} alt="a right facing arrow" />
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}></li>
        </ul>
        <div className="hero-play">
          <img onClick={togglePlayStatus} src={playStatus ? pause_icon : play_icon} alt="a play button" />
          <p>See the Video</p>
        </div>
      </div>
    </div>
  );
};