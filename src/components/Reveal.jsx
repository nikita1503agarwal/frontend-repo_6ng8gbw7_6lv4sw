import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const controls = useAnimation();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.98, filter: "blur(4px)" }}
      animate={controls}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
