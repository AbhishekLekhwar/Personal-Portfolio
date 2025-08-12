import React, { useEffect } from 'react';

const AnimatedBackground = () => {
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * window.innerWidth + 'px';
      particle.style.animationDelay = Math.random() * 15 + 's';
      particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
      document.body.appendChild(particle);

      setTimeout(() => {
        if (particle.parentNode) {
          particle.remove();
        }
      }, 25000);
    };

    // Create initial particles
    const createInitialParticles = () => {
      for (let i = 0; i < 8; i++) {
        setTimeout(() => createParticle(), i * 1000);
      }
    };

    // Start creating particles
    createInitialParticles();
    
    // Continue creating particles periodically
    const interval = setInterval(createParticle, 2000);

    // Handle window resize
    const handleResize = () => {
      // Remove existing particles on resize
      const particles = document.querySelectorAll('.particle');
      particles.forEach(particle => particle.remove());
      
      // Create new particles for new window size
      setTimeout(createInitialParticles, 100);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
      const particles = document.querySelectorAll('.particle');
      particles.forEach(particle => {
        if (particle.parentNode) {
          particle.remove();
        }
      });
    };
  }, []);

  return null;
};

export default AnimatedBackground;
