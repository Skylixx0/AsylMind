import React, { act, useState } from 'react'
import { useWindowWidth } from './useWindowWidth';

export const GlassCard = ({ index, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCard = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index)); // Toggle
  };

  return (
  <div       
      onClick={() => {
        // toggle for mobile
        toggleCard(index);
      }}
      onMouseEnter={() => {
        setIsDesktop(true);
        setIsOpen(true); // open on hover
      }}
      onMouseLeave={() => {
        setIsDesktop(false);
        setIsOpen(false); // close on unhover
      }}
    className=" sm:w-[100%] max-w-lg relative group bg-white/50 border border-white/90 rounded-xl  overflow-hidden backdrop-blur-md shadow-md hover:shadow-2xl transition-all mx-auto duration-500 w-full h-45 md:h-55 lg:h-60">
    {/* Front: Question */}
    <div className={`${activeIndex === index ? "opacity-0" : "opacity-100"} absolute inset-0 flex items-center justify-center px-4 text-center text-2xl font-semibold text-black z-10 transition-all duration-500 group-hover:opacity-0`}>
      {question}
    </div>

    {/* Back: Answer (slides up) */}
    <div className={`absolute inset-0 flex items-center justify-center px-4 text-sm md:text-md lg:text-lg leading-relaxed text-black text-center font-bold bg-white transition-all duration-350
        ${activeIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'} 
        group-hover:opacity-100 group-hover:translate-y-0`}>
      {answer}
    </div>
  </div>
  )
}
