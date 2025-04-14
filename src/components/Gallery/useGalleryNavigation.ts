import { useEffect, useCallback } from 'react';
import { GalleryItem } from '../../types';

export const useGalleryNavigation = (
  items: GalleryItem[],
  selectedImage: GalleryItem | null,
  setSelectedImage: (image: GalleryItem | null) => void
) => {
  const currentIndex = selectedImage ? items.findIndex(item => item.id === selectedImage.id) : -1;

  const handlePrevious = useCallback(() => {
    if (currentIndex > 0) {
      setSelectedImage(items[currentIndex - 1]);
    } else {
      setSelectedImage(items[items.length - 1]);
    }
  }, [currentIndex, items, setSelectedImage]);

  const handleNext = useCallback(() => {
    if (currentIndex < items.length - 1) {
      setSelectedImage(items[currentIndex + 1]);
    } else {
      setSelectedImage(items[0]);
    }
  }, [currentIndex, items, setSelectedImage]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!selectedImage) return;

      switch (event.key) {
        case 'ArrowLeft':
          handlePrevious();
          break;
        case 'ArrowRight':
          handleNext();
          break;
        case 'Escape':
          setSelectedImage(null);
          break;
      }
    },
    [selectedImage, handlePrevious, handleNext, setSelectedImage]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return {
    currentIndex,
    handleKeyDown,
    handlePrevious,
    handleNext
  };
};