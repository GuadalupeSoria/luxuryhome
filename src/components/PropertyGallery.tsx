import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PropertyGalleryProps {
  images: string[];
}

export function PropertyGallery({ images }: PropertyGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
        <img
          src={images[currentImage]}
          alt="Property"
          className="w-full h-[600px] object-cover"
        />
      </div>
      
      <button
        onClick={previousImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full hover:bg-white"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full hover:bg-white"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="flex gap-2 mt-4">
        {images.map((image, index) => (
          <button
            key={image}
            onClick={() => setCurrentImage(index)}
            className={`w-20 h-20 rounded-lg overflow-hidden ${
              index === currentImage ? 'ring-2 ring-blue-600' : ''
            }`}
          >
            <img
              src={image}
              alt={`Property view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}