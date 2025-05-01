
import React, { useState, useEffect, useRef } from 'react';

interface StatItemProps {
  label: string;
  value: number;
  suffix: string;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ label, value, suffix, delay }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    setTimeout(() => {
      const timer = setInterval(() => {
        start += increment;
        setCount(Math.min(Math.floor(start), end));
        
        if (start >= end) {
          clearInterval(timer);
        }
      }, 16);
      
      return () => clearInterval(timer);
    }, delay);
  }, [isVisible, value, delay]);

  return (
    <div className="text-center" ref={countRef}>
      <div className="text-4xl md:text-5xl font-bold text-[#2E7D32]">
        {count}{suffix}
      </div>
      <div className="mt-2 text-gray-600 dark:text-gray-300 font-medium">
        {label}
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-16 bg-green-50 dark:bg-green-900/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Impact</span> In Numbers
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Transforming financial inclusion across Africa, one transaction at a time.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatItem label="Unbanked Served" value={350} suffix="M+" delay={0} />
          <StatItem label="Transactions Monthly" value={12} suffix="M+" delay={200} />
          <StatItem label="Countries Active" value={8} suffix="" delay={400} />
          <StatItem label="Money Transferred" value={500} suffix="M+" delay={600} />
        </div>
      </div>
    </section>
  );
};

export default Stats;
