"use client";
import { useState, useEffect } from "react";
import styles from "./ImageSlider.module.css";

const images = [
  "/slider3.jpg",
  "/slider2.jpg",
  "/slider1.jpg",
  "/slider4.jpg",
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Manual slide handler
  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className={styles.sliderContainer} >
      <div className={styles.slider}>
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className={styles.image}
        />
      </div>

      <div className={styles.dots} style={{padding: "20px"}}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${current === index ? styles.active : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
