import React from 'react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center h-screen text-center px-4 bg-[#0a0a0a]"
    >
      {/* Small intro text */}
      <p className="text-cyan-400 mb-2 uppercase tracking-widest text-sm">
        Hello, I&apos;m
      </p>

      {/* Name */}
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
        Satyam
      </h1>

      {/* Tagline */}
      <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-8">
        I build modern web applications with React, Next.js, and Tailwind CSS.
        I love turning ideas into beautiful, responsive user experiences.
      </p>

      {/* Call to action */}
      <a
        href="#contact"
        className="inline-block px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
      >
        Get In Touch
      </a>

      {/* Optional: subtle bottom scroll indicator */}
      <div className="absolute bottom-8 animate-bounce">
        <a href="#about" className="text-gray-400">
          ↓
        </a>
      </div>
    </section>
  );
}
