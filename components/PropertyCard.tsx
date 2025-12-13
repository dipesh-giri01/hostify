'use client';

import Image from 'next/image';
import Link from 'next/link';
import SuperhostBadge from '@/components/icons/SuperhostBadge';
import { Star as StarIcon } from '@/components/icons';
import FavoriteButton from '@/components/buttons/FavoriteButton';

interface PropertyCardProps {
  id: number;
  name: string;
  location: string;
  rating: number;
  isSuperhost: boolean;
  price: number;
  image: string;
}

export default function PropertyCard({
  id,
  name,
  location,
  rating,
  isSuperhost,
  price,
  image,
}: PropertyCardProps) {
  return (
    <Link href={`/stays/${id}`}>
      <div className="group cursor-pointer bg-white border border-light-e8 rounded-lg-custom overflow-hidden hover:shadow-lg transition-shadow card-width">
        {/* Image Container - 315px x 300px */}
        <div className="relative overflow-hidden bg-gray-200 dark:bg-gray-700 card-width card-image-height">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />

          {/* Superhost Badge - Top Left */}
          {isSuperhost && (
            <div className="absolute top-2.5 left-2.5 z-10">
              <SuperhostBadge />
            </div>
          )}

          {/* Like Button - Top Right */}
          <div className="absolute top-2.5 right-2.5 z-20">
            <FavoriteButton propertyId={id} className="shadow-md" />
          </div>
        </div>

        {/* Property Info - 16px padding, 14px gap */}
        <div className="p-4" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {/* Title & Rating Row */}
          <div className="flex items-start gap-1">
            <div className="flex-1">
              <h3 className="font-semibold text-base text-gray-900 dark:text-white line-clamp-1">
                {name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-1">
                {location}
              </p>
            </div>
            
            {/* Rating */}
            <div className="flex items-center gap-1 flex-shrink-0 whitespace-nowrap">
              <StarIcon style={{ color: '#FAC50A' }} />
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                {rating}
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-1">
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              ${price}
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              /night
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
