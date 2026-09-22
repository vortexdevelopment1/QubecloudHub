import React from 'react';
import { stats } from '../../data/stats';
import useScrollReveal from '../../hooks/useScrollReveal';

const Stats = () => {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <div id="metrics" className="max-w-[1480px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-8 md:py-10 w-full">
      <div
        ref={sectionRef}
        className={`reveal-section ${isVisible ? 'is-revealed' : ''} py-5 sm:py-8 px-4 sm:px-6 rounded-2xl bg-[#110e1c]/50 border border-purple-500/15`}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-purple-500/20 text-center">
          {stats.map((item) => (
            <div
              key={item.id}
              className={`${
                item.isWideOnMobile ? 'col-span-2 md:col-span-1 ' : ''
              }flex flex-col items-center py-2.5 sm:py-3 md:py-0 transition-transform duration-300 hover:scale-105`}
            >
              <span className="text-2xl sm:text-3xl md:text-4xl font-black text-purple-400">{item.value}</span>
              <span className="text-[10px] sm:text-xs text-gray-400 font-medium mt-0.5 sm:mt-1">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
