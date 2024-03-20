// App.jsx
import React, { useState } from 'react';
import { Background } from './Components/Background/Background';
import { Navbar } from './Components/Navbar/Navbar';
import { Hero } from './Components/Hero/Hero';
import { useEffect } from 'react';

const App = () => {
  let heroData = [
    { text1: "Dive Into", text2: "what you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give In To", text2: "your desires" },
  ];

  const [heroCount, setHeroCount] = useState(1);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    setInterval (() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count+1 
      })
    }, 3000)
  }, []) 

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroCount={heroCount}
        heroData={heroData[heroCount]}
        setHeroCount={setHeroCount}
        playStatus={playStatus} // Pass the playStatus prop
      />
    </div>
  );
};

export default App;