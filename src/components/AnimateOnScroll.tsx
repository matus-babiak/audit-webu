import { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const AnimateOnScroll = ({ children, className = "", delay = 0 }: AnimateOnScrollProps) => {
  const { ref, isInView } = useInView({ threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`animate-in-view ${isInView ? "in-view" : ""} ${className}`}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
