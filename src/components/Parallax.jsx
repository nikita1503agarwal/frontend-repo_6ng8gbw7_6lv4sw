import { motion, useScroll, useTransform } from "framer-motion";

export default function Parallax({ children, className = "", start = 0, end = 300, amount = 60 }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [start, end], [0, amount]);
  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
