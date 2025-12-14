'use client';

import { useState } from 'react';
import Image from 'next/image';

interface PropertyGalleryProps {
  images: string[];
}

export default function PropertyGallery({ images }: PropertyGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  // showing 4 images for gallery (Figma spec: 160px × 86px each with 10px gap)
  const displayImages = images.slice(0, 4);

  return (
    <div className="flex flex-col gallery-container">
      {/* Main Image */}
      <div className="w-full gallery-height rounded-lg overflow-hidden relative">
        <Image 
          src={displayImages[selectedImageIndex]} 
          alt={`Property image ${selectedImageIndex + 1}`} 
          fill 
          className="object-cover" 
          priority 
        />
      </div>

      {/* Thumbnails - 5 images with 10px gap */}
      <div className="flex flex-row w-full gallery-thumbs-height">
        {displayImages.map((img, i) => (
          <div 
            key={i} 
            onClick={() => setSelectedImageIndex(i)}
            className={`thumb-width thumb-height overflow-hidden flex-shrink-0 transition-all cursor-pointer rounded-lg ${i === selectedImageIndex ? 'border-3 border-orange-500' : 'hover:opacity-80'}`}
          >
            <Image 
              src={img} 
              alt={`Gallery thumbnail ${i + 1}`} 
              width={160} 
              height={86} 
              loading="lazy"
              className="object-cover w-full h-full" 
            />
          </div>
        ))}
      </div>
    </div>
  );
}
