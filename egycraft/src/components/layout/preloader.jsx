import React, { useState, useEffect } from 'react';
import './preloader.css';
// import preload from './../../assets/fillerIllus01.svg'
import FatimaHand from '../common/fatimahand';
import '../../../src/animations.css'
const Preloader = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="preloader">
          <div className="scaleIn5 image-container">
            <FatimaHand />
          </div>
          <p>
            loading...
          </p>
        </div>
      )}
    </>
  );
};

export default Preloader;