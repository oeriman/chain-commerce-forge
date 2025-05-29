
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title?: string;
}

interface GalleryProps {
  items: GalleryItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

const Gallery = ({ items, columns = 3, className = "" }: GalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const goToPrevious = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null && selectedIndex < items.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const getGridCols = () => {
    switch (columns) {
      case 2: return 'grid-cols-1 sm:grid-cols-2';
      case 3: return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
      case 4: return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
      default: return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
    }
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className={`grid ${getGridCols()} gap-4 ${className}`}>
        {items.map((item, index) => (
          <Card 
            key={item.id} 
            className="group overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
            onClick={() => openLightbox(index)}
          >
            <div className="aspect-square relative overflow-hidden">
              <img
                src={`https://images.unsplash.com/${item.src}?w=400&h=400&fit=crop`}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
            {item.title && (
              <div className="p-3">
                <h3 className="font-medium text-sm truncate">{item.title}</h3>
              </div>
            )}
          </Card>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </Button>

          {/* Previous Button */}
          {selectedIndex > 0 && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
              onClick={goToPrevious}
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>
          )}

          {/* Next Button */}
          {selectedIndex < items.length - 1 && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
              onClick={goToNext}
            >
              <ChevronRight className="w-8 h-8" />
            </Button>
          )}

          {/* Main Image */}
          <div className="max-w-4xl max-h-full flex items-center justify-center">
            <img
              src={`https://images.unsplash.com/${items[selectedIndex].src}?w=1200&h=800&fit=crop`}
              alt={items[selectedIndex].alt}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Image Info */}
          <div className="absolute bottom-4 left-4 right-4 text-center">
            <p className="text-white text-lg font-medium">
              {items[selectedIndex].title || items[selectedIndex].alt}
            </p>
            <p className="text-white/70 text-sm mt-1">
              {selectedIndex + 1} of {items.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
