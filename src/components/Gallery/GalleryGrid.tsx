import React, { useState } from 'react';
import { useGalleryNavigation } from './useGalleryNavigation';
import { GalleryItem } from '../../types';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Classic French Macarons',
    description: 'Delicate almond meringue cookies with various fillings',
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=800&q=80',
    category: 'Cookies'
  },
  {
    id: '2',
    title: 'Wedding Cake Elegance',
    description: 'Three-tier white wedding cake with sugar flowers',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=800&q=80',
    category: 'Cakes'
  },
  {
    id: '3',
    title: 'Artisan Sourdough',
    description: 'Freshly baked artisan sourdough bread',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    category: 'Bread'
  },
  {
    id: '4',
    title: 'Chocolate Eclairs',
    description: 'Classic French pastry filled with cream and topped with chocolate',
    image: 'https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?auto=format&fit=crop&w=800&q=80',
    category: 'Pastries'
  },
  {
    id: '5',
    title: 'Berry Cheesecake',
    description: 'New York style cheesecake with fresh berry compote',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80',
    category: 'Cakes'
  },
  {
    id: '6',
    title: 'Croissant Breakfast',
    description: 'Buttery, flaky croissants fresh from the oven',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
    category: 'Pastries'
  }
];

const GalleryGrid: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const { currentIndex, handleKeyDown, handlePrevious, handleNext } = useGalleryNavigation(
    galleryItems,
    selectedImage,
    setSelectedImage
  );

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-serif text-gray-900 text-center mb-12">Our Creations</h2>
      
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]"
            onClick={() => setSelectedImage(item)}
          >
            <div className="aspect-w-4 aspect-h-3">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm opacity-90">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedImage(null);
          }}
        >
          <div className="relative max-w-7xl mx-auto px-4 w-full">
            <button
              className="absolute top-4 right-4 text-white hover:text-rose-400 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="relative">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[85vh] object-contain"
              />
              
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-rose-400 transition-colors"
                onClick={handlePrevious}
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-rose-400 transition-colors"
                onClick={handleNext}
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>

            <div className="text-center text-white mt-4">
              <h3 className="text-2xl font-serif">{selectedImage.title}</h3>
              <p className="text-lg opacity-90 mt-2">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;