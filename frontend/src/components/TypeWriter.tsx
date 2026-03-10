"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
  words: string[];      
  staticText?: string;  
  typingSpeed?: number; 
  deletingSpeed?: number; 
  pauseTime?: number;   
}

export const Typewriter = ({ 
  words, 
  staticText = "", 
  typingSpeed = 100, 
  deletingSpeed = 100,
  pauseTime = 1000 
}: TypewriterProps) => {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    
    const typeSpeed = isDeleting ? deletingSpeed : typingSpeed;

    const tick = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText((prev) => currentWord.substring(0, prev.length + 1));

        if (displayText === currentWord) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setDisplayText((prev) => currentWord.substring(0, prev.length - 1));

        if (displayText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => prev + 1); 
        }
      }
    }, isDeleting && displayText === currentWord ? pauseTime : typeSpeed); 

    return () => clearTimeout(tick);
  }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <div className="flex flex-col md:flex-row md:items-center text-black font-sans tracking-tight">
      
      {staticText && (
        <span className="font-pixel text-5xl sm:text-6xl md:text-7xl lg:text-[80px] md:mr-4 mb-2 md:mb-0">
          {staticText}
        </span>
      )}
      

      <span className="relative inline-flex items-center leading-[1.1] min-h-[1.1em]">
        <span className="inline-block pr-3 text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-600 font-pixel text-4xl sm:text-5xl md:text-7xl lg:text-[80px]">
            {displayText || "\u00A0"}
        </span>
        

        <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            className="md:absolute right-0 top-1/2 -translate-y-1/2 h-[70%] w-[3px] md:w-[5px] bg-neutral-700"
        />
      </span>
      
    </div>
  );
};

export default Typewriter;