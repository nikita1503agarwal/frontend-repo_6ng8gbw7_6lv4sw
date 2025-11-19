import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(Math.min(100, Math.max(0, scrolled)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60]">
      <div
        className="h-[3px] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-400 shadow-[0_0_18px_2px_rgba(168,85,247,0.5)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
