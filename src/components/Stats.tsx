import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface StatItem {
  target: number;
  suffix: string;
  label: string;
  subtext: string;
  isTextOnly?: boolean;
  prefix?: string;
}

export const Stats: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats: StatItem[] = [
    {
      target: 10,
      suffix: '+',
      label: 'PROJECTS',
      subtext: 'Built with meticulous craft',
    },
    {
      target: 100,
      suffix: '%',
      label: 'RESPONSIVE',
      subtext: 'Flawless phone, tablet & desktop',
    },
    {
      target: 24,
      suffix: '/7',
      label: 'ONLINE PRESENCE',
      subtext: 'High-availability brand presence',
    },
    {
      target: 1,
      suffix: ' GOAL',
      label: 'BUSINESS GROWTH',
      subtext: 'Turning visitors into customers',
      isTextOnly: false,
    },
  ];

  return (
    <section
      id="stats-section"
      ref={ref}
      className="relative py-14 bg-[#0a0a0f] border-y border-white/[0.08] overflow-hidden"
    >
      {/* Background Red Glow Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-24 bg-red-600/[0.04] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => (
            <CounterBlock
              key={stat.label}
              item={stat}
              isInView={isInView}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface CounterBlockProps {
  item: StatItem;
  isInView: boolean;
  delay: number;
}

const CounterBlock: React.FC<CounterBlockProps> = ({ item, isInView, delay }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = item.target;
    const duration = 1200; // ms
    const incrementTime = 30;
    const totalSteps = duration / incrementTime;
    const stepValue = end / totalSteps;

    const timer = setInterval(() => {
      start += stepValue;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, item.target]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="group p-5 sm:p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.06] hover:border-red-500/30 transition-all duration-300 relative overflow-hidden"
    >
      {/* Top accent red line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-red-500 group-hover:to-transparent transition-all duration-500" />

      <div className="flex flex-col">
        {/* Value + Suffix */}
        <div className="flex items-baseline gap-0.5">
          <span className="font-['Space_Grotesk',sans-serif] text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white group-hover:text-red-400 transition-colors">
            {count}
          </span>
          <span className="font-['Space_Grotesk',sans-serif] text-2xl sm:text-3xl font-extrabold text-red-500">
            {item.suffix}
          </span>
        </div>

        {/* Label */}
        <div className="mt-2 text-xs sm:text-sm font-bold tracking-wider text-neutral-200 uppercase">
          {item.label}
        </div>

        {/* Subtext */}
        <div className="mt-1 text-[11px] sm:text-xs text-neutral-400 font-normal">
          {item.subtext}
        </div>
      </div>
    </motion.div>
  );
};
