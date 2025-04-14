import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[90vh] flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6">
          Sweet Memories Bakery
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Crafting delightful moments through the art of baking since 2010
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/gallery"
            className="px-8 py-3 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition-colors duration-200"
          >
            View Our Gallery
          </a>
          <a
            href="/contact"
            className="px-8 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 backdrop-blur-sm transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;