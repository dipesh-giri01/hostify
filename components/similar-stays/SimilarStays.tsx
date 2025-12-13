'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star } from '@/components/icons';
import FavoriteButton from '@/components/buttons/FavoriteButton';

interface SimilarStay {
  id?: number;
  image: string;
  name: string;
  place: string;
  rating: number;
  price: number;
  superhost: boolean;
}

interface SimilarStaysProps {
  stays: SimilarStay[];
}

export default function SimilarStays({ stays }: SimilarStaysProps) {
  // Don't show section if less than 3 stays
  if (!stays || stays.length === 0) {
    return null;
  }

  // Show only first 3 stays
  const visibleStays = stays.slice(0, 3);

  return (
    <section className="w-full header-content flex flex-col gap-5 mb-11">
      <div className="flex flex-row justify-between items-center w-full mb-1">
        <h3 className="text-2xl font-semibold leading-7 tracking-wider text-gray-900 font-archivo">Similar stays</h3>
        <Link href="/stays" className="text-base font-semibold leading-7 tracking-widest text-orange-500 font-archivo hover:text-orange-600 transition">View all</Link>
      </div>

      {/* Stays Grid - 3 items no carousel */}
      <div className="flex flex-row gap-similar w-full overflow-hidden">
        {visibleStays.map((stay, i) => (
          stay && (
          <Link
            key={i}
            href={stay.id ? `/stays/${stay.id}` : '#'}
            className="flex flex-row similar-stays-card-width similar-min-width similar-stays-card-height bg-white rounded-2xl overflow-hidden border border-light-e8 hover:shadow-lg transition-shadow flex-shrink-0"
          >
            <div className="flex flex-row items-start p-2.5 similar-image-container relative flex-shrink-0">
              <Image 
                src={stay.image} 
                alt={stay.name} 
                width={160} 
                height={110} 
                loading="lazy"
                className="object-cover rounded-lg w-full h-full" 
              />
              {/* Favorite Button - Top Right */}
              <div className="absolute top-2 right-2">
                <FavoriteButton propertyId={stay.id || 0} className="shadow-md" />
              </div>
              {/* Superhost Badge - Top Left */}
              {stay.superhost && (
                <div className="absolute top-2 left-2 flex flex-row items-center bg-white rounded-full px-2 py-1.5 gap-0.5">
                  <svg width="7" height="10" fill="#FF8D28" viewBox="0 0 7 10"><rect width="7" height="10" rx="3.5" fill="#FF8D28"/></svg>
                  <span className="text-xs font-medium leading-4 tracking-tighter text-orange-500 font-archivo">Superhost</span>
                </div>
              )}
            </div>
            <div className="flex flex-col justify-between p-4 similar-content-container border-l border-light-e8 rounded-r-2xl">
              <div className="flex flex-col gap-1">
                <span className="text-base font-semibold leading-5 tracking-wider text-gray-900 font-archivo">{stay.name}</span>
                <span className="text-sm font-normal leading-4 tracking-wider text-gray-600 font-archivo">{stay.place}</span>
              </div>
              <div className="flex flex-row items-center gap-1.5 mt-2">
                <span className="text-sm font-semibold leading-4 tracking-wider text-gray-900 font-archivo">{stay.rating}</span>
                <Star className="w-4 h-4" style={{ color: '#FAC50A' }} />
              </div>
              <div className="flex flex-row items-center gap-0.5 mt-2">
                <span className="text-base font-semibold leading-5 tracking-wider text-orange-500 font-archivo">${stay.price}</span>
                <span className="text-sm font-normal leading-4 tracking-wider text-gray-600 font-archivo">/night</span>
              </div>
            </div>
          </Link>
          )
        ))}
      </div>
    </section>
  );
}
