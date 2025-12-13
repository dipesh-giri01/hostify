import Image from 'next/image';
import Link from 'next/link';
import { Star, CalendarIcon, SuperhostBadge } from '@/components/icons';
import FavoriteButton from '@/components/buttons/FavoriteButton';
import Button from '../button/Button';

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
    <div className="flex flex-col items-center justify-center bg-white rounded-[7px] border border-gray-d9 info-card-container">
      {/* Main content */}
      <div className="flex flex-col items-start w-full info-card-content">
        
        {/* Title section */}
        <div className="flex flex-col items-start w-full info-card-title-section">
          
          {/* Name, location, heart */}
          <div className="flex flex-col items-start w-full info-card-name-section">
            {/* Name/location with heart */}
            <div className="flex flex-row items-center justify-between w-full gap-1.5">
              <div className="flex flex-col items-start flex-grow info-card-name-row">
                <h1 className="font-archivo info-card-title">
                  {property.name}
                </h1>
                <span className="font-archivo info-card-location">
                  {property.location}
                </span>
              </div>
              <div className="heart-icon-size flex items-center justify-center flex-shrink-0">
                <FavoriteButton propertyId={property.id} />
              </div>
            </div>

            {/* Rating and reviews */}
            <div className="flex flex-row items-center gap-1.5 w-full">
              <div className="flex flex-row items-center gap-1">
                <span className="font-archivo info-card-rating">
                  {property.rating}
                </span>
                <Star className="w-4 h-4" style={{ color: '#FAC50A' }} />
              </div>
              <div className="border-l border-gray-d9 px-2">
                <Link href="#reviews" className="font-archivo info-card-reviews-link underline hover:opacity-80">
                  200 Reviews
                </Link>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="w-full tracking-wider font-archivo info-card-description">
            Welcome to our cozy cabin retreat nestled in the heart of {property.location}! Surrounded by lush landscapes and tranquil trails, this charming getaway offers the perfect blend of rustic elegance and modern comfort.
          </p>
        </div>

        {/* Price section and Button */}
        <div className="flex flex-col items-start w-full info-card-price-section">
          {/* Price and Best time */}
          <div className="flex flex-row items-center justify-between w-full info-card-price-row">
            <div className="flex flex-row items-end gap-1">
              <span className="font-archivo info-card-price">
                ${property.price}
              </span>
              <span className="font-archivo info-card-price-unit">
                /night
              </span>
            </div>
            <div className="flex flex-row items-center gap-1.5 flex-shrink-0">
              <CalendarIcon className="w-6 h-6 text-orange-500" />
              <span className="font-archivo info-card-best-time">
                Best time to Book
              </span>
            </div>
          </div>
          
          {/* Book button */}
          <Button className="info-card-book-button hover:bg-orange-600">
            <span className="info-card-book-button-text">
              Book this home
            </span>
          </Button>
        </div>
      </div>

      {/* Frame 93 - Host info */}
      <div className="flex flex-col items-start w-full info-card-host-section">
        <span className="font-archivo info-card-hosted-by">
          Hosted by:
        </span>
        <div className="flex flex-row items-center w-full info-card-host-row">
          <div className="host-avatar-size rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
            <Image 
              src="/assets/images/host.jpg" 
              alt="Host" 
              width={50} 
              height={50} 
              className="object-cover w-full h-full" 
            />
          </div>
          <div className="flex flex-col flex-grow info-card-host-info">
            <span className="font-archivo info-card-host-name">
              Michelle Ward
            </span>
            <span className="font-archivo info-card-host-joined">
              Joined in May 2021
            </span>
          </div>
          <div className="info-card-superhost-badge">
            <SuperhostBadge />
          </div>
        </div>
      </div>
    </div>
  );
}
