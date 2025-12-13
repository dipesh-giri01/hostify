import Image from 'next/image';
import Link from 'next/link';
import { Star, CalendarIcon, SuperhostBadge } from '@/components/icons';
import FavoriteButton from '@/components/buttons/FavoriteButton';

interface InfoCardProps {
  property: {
    id: number;
    name: string;
    location: string;
    rating: number;
    price: number;
    image: string;
  };
}

export default function InfoCard({ property }: InfoCardProps) {
  return (
    <div className="flex flex-col justify-center info-card-width info-card-height bg-white rounded-lg p-9 gap-7 border border-gray-200">
      {/* Title, location, heart */}
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-3 w-full">
          <div className="flex flex-row items-start justify-between gap-4 w-full">
            <div className="flex flex-col gap-2">
              <h1 className="title-size font-semibold tracking-wider text-gray-900 font-archivo">{property.name}</h1>
              <span className="location-size font-normal tracking-wider text-gray-900 font-archivo">{property.location}</span>
            </div>
            <div className="heart-icon-size flex items-center justify-center flex-shrink-0">
              <FavoriteButton propertyId={property.id} />
            </div>
          </div>
          {/* Rating and reviews */}
          <div className="flex flex-row items-center gap-2 w-full mt-1">
            <div className="flex flex-row items-center gap-1">
              <span className="text-base font-semibold leading-5 tracking-wider text-gray-900 font-archivo">{property.rating}</span>
              <Star className="w-4 h-4" style={{ color: '#FAC50A' }} />
            </div>
            <div className="border-l border-gray-200 px-2 ml-1">
              <Link href="#reviews" className="text-base leading-5 underline tracking-wider text-orange-500 font-archivo text-sm hover:text-orange-600">
                200 Reviews
              </Link>
            </div>
          </div>
        </div>
        {/* Description */}
        <p className="text-base leading-relaxed tracking-wider text-gray-900 font-archivo mt-3">
          Welcome to our cozy cabin retreat nestled in the heart of {property.location}! Surrounded by lush landscapes and tranquil trails, this charming getaway offers the perfect blend of rustic elegance and modern comfort.
        </p>
      </div>

      {/* Price, best time, button */}
      <div className="flex flex-col gap-5 w-full">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-row items-end gap-1">
            <span className="price-large font-bold tracking-wider text-gray-900 font-archivo">${property.price}</span>
            <span className="price-per-night font-normal tracking-wider text-gray-900 font-archivo pb-1">/night</span>
          </div>
          <div className="flex flex-row items-center gap-2">
            <CalendarIcon className="w-6 h-6 text-orange-500" />
            <span className="text-base leading-5 tracking-wider text-orange-500 font-archivo text-sm">Best time to Book</span>
          </div>
        </div>
        <button className="w-full h-14 bg-orange-500 rounded-lg flex items-center justify-center hover:bg-orange-600 transition duration-200 shadow-sm">
          <span className="text-white text-base font-semibold leading-7 tracking-widest font-archivo">Book this home</span>
        </button>
      </div>

      {/* Host info */}
      <div className="flex flex-col gap-3 w-full">
        <span className="text-base leading-5 text-gray-600 font-archivo">Hosted by:</span>
        <div className="flex flex-row items-center gap-3 border-t border-gray-200 pt-3 w-full">
          <div className="host-avatar-size rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
            <Image 
              src="/assets/images/host.jpg" 
              alt="Host" 
              width={50} 
              height={50} 
              className="object-cover w-full h-full" 
            />
          </div>
          <div className="flex flex-col gap-0.5 flex-grow">
            <span className="text-base font-semibold leading-6 tracking-wider text-gray-900 font-archivo">
              Michelle Ward
            </span>
            <span className="text-sm font-normal leading-4 tracking-wider text-gray-500 font-archivo">
              Joined in May 2021
            </span>
          </div>
          <div className="flex flex-row items-center gap-1 bg-orange-100 rounded-full px-3 py-2 flex-shrink-0">
            <SuperhostBadge />
          </div>
        </div>
      </div>
    </div>
  );
}
