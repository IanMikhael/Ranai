import { useState, useEffect, useRef } from 'react';

export function useCountUp(target, duration = 2000, suffix = '') {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Parse target value (e.g., "60%" -> 60, "2x" -> 2, "5x" -> 5)
      const numericTarget = parseFloat(target);
      const animatedValue = Math.floor(numericTarget * progress);

      setCount(animatedValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(numericTarget);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return { count, elementRef, displayValue: count + suffix };
}
