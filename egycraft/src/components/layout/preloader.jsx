import React, { useState, useEffect } from 'react';
import './preloader.css';
import preload from './../../assets/logo2.svg'
import FatimaHand from '../common/fatimahand';

const Preloader = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="preloader">
          <div className="image-container">
            <FatimaHand />
            {/* <img
              src={preload}
              alt="Loading Collage"
            /> */}
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