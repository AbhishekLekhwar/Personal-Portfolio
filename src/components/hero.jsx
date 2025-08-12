import React, { useState, useEffect } from 'react';

const TypewriterName = ({ name }) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const typeInterval = setInterval(() => {
      if (currentIndex <= name.length) {
        setDisplayText(name.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        // Hide cursor after typing is complete
        setTimeout(() => setShowCursor(false), 1000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [name]);

  return (
    <h1 className="text-slate-300 text-3xl md:text-6xl font-bold leading-normal tracking-tighter">
      {"Hello I'm "}
      <span className="inline-block">
        <span className="text-white font-mono">
          {displayText}
        </span>
        <span className={`inline-block w-0.5 h-8 md:h-12 bg-sky-400 ml-1 transition-opacity duration-200 ${
          showCursor ? 'animate-pulse' : 'opacity-0'
        }`} />
      </span>
    </h1>
  );
};

const AnimatedDescription = ({ text }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Start animation after name animation completes
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <p className={`text-slate-300 mb-10 text-sm md:text-2xl tracking-tight transition-all duration-1000 ease-out transform ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}>
      {text}
    </p>
  );
};

const AnimatedButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a 
      href="#Footer" 
      className={`inline-block mt-20 md:mt-10 text-slate-300 py-2 px-3 
      text-sm md:text-lg md:py-3 md:px-6 font-semibold rounded-full 
      bg-gradient-to-r from-gray-600 to-gray-500 transition-all duration-500 
      ease-out transform hover:scale-105 hover:shadow-lg hover:shadow-sky-500/25
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      ${isHovered ? 'from-sky-600 to-sky-500' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transitionDelay: isVisible ? '2500ms' : '0ms'
      }}
    >
      Contact me
    </a>
  );
};

const hero = () => {
  return (
    <div className="w-full place-items-center md:p-20 p-5 min-h-screen flex items-center justify-center">
      <div className="md:w-2/4 md:pt-10 text-center">
        <TypewriterName name="Abhishek Lekhwar" />
        <AnimatedDescription text="I am fourth year student of B.Tech CSE. I am pursuing B.Tech from DIT University." />
        <AnimatedButton />
      </div>
    </div>
  );
};

export default hero;
