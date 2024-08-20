import React, { useState, useEffect, useRef } from 'react';
  

import styles from './HooksPage.module.css';

 export function HooksPage()  {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef(null);
  const interval = 2000
  const images = ["/public/images/RenderCode.webp", "/public/images/Card_Component.webp", "/public/images/Footer.webp", "/public/images/Form.webp", "/public/images/RenderCode.webp", "/public/images/Table.webp"]

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, interval);

    return () => {
      resetTimeout();
    };
  }, [currentIndex, interval]);

  useEffect(() => {
    if (isTransitioning) {
      const transitionTimeout = setTimeout(() => {
        setIsTransitioning(false);
        if (currentIndex >= images.length) {
          setCurrentIndex(0);
        } else if (currentIndex < 0) {
          setCurrentIndex(images.length - 1);
        }
      }, 1700); // Duración de la transición

      return () => clearTimeout(transitionTimeout);
    }
  }, [currentIndex, images.length, isTransitioning]);

  const handleIndicatorClick = (index) => {
    resetTimeout();
    setCurrentIndex(index);
    setIsTransitioning(true);
  };

  const handleTransitionEnd = () => {
    if (currentIndex >= images.length) {
      setCurrentIndex(0);
    } else if (currentIndex < 0) {
      setCurrentIndex(images.length - 1);
    }
    setIsTransitioning(false);
  };

  return (
    <div className={styles.carousel}>
      <div
        className={`${styles.carousel_inner} ${styles.isTransitioning ? 'styles.transition' : ''}`}
        style={{ transform: `translateX(${-currentIndex * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {[images[images.length - 1], ...images, images[0]].map((image, index) => (
          <div className={styles.carousel_item} key={index}>
            <img className={styles.img} src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <div className={styles.carousel_indicators}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentIndex ? 'styles.active' : ''}`}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>
    </div>
  );
};