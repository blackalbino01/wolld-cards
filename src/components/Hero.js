'use client'
import { useEffect, useState } from "react";
import FloatingCards from './FloatingCards';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 overflow-hidden">
      <FloatingCards />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />

      {/* Content */}
      <div className={`relative z-10 text-center px-4 max-w-5xl mx-auto transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Give the perfect
          <span className="block">gift card</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Get reliable gift cards through Gift Cards.
          <span className="block">Use online or in stores.</span>
        </p>

        <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-gray-900 bg-white rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
          <span className="relative z-10">Shop Now</span>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
        </button>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/10 to-transparent" />
    </section>
  );
}
