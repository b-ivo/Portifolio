// hooks/useScrollAnimation.jsx
import {
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect } from "react";

export const useScrollAnimation = () => {
  const { scrollY, scrollYProgress } = useScroll();

  // Smooth spring-based values
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Parallax effects
  const heroY = useTransform(scrollY, [0, 500], [0, -150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Scale effects for sections
  const scaleValues = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);

  // Blur effects
  const blurValue = useTransform(scrollY, [0, 500], [0, 8]);

  // Rotation effects
  const rotateValue = useTransform(scrollY, [0, 1000], [0, 5]);

  return {
    scrollY,
    scrollYProgress,
    smoothProgress,
    heroY,
    heroOpacity,
    scaleValues,
    blurValue,
    rotateValue,
  };
};