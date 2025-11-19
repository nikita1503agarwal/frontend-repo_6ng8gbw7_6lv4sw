import { useRef } from "react";
import { motion } from "framer-motion";

export default function TiltCard({ children, className = "", intensity = 10 }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateX = ((y - midY) / midY) * -intensity;
    const rotateY = ((x - midX) / midX) * intensity;

    el.style.setProperty("--rx", `${rotateX}deg`);
    el.style.setProperty("--ry", `${rotateY}deg`);
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`[transform-style:preserve-3d] will-change-transform ${className}`}
      style={{ transform: "perspective(900px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))" }}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
