'use client';

import { useEffect, useState } from 'react';
import { useAuthStore } from '@/store/authStore';
import Heart from '@/components/icons/Heart';

interface FavoriteButtonProps {
  propertyId: number;
  className?: string;
}

export default function FavoriteButton({ propertyId, className = '' }: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { currentUserEmail } = useAuthStore();

  // Load from localStorage on mount - only for logged-in users
  useEffect(() => {
    setMounted(true);
    if (currentUserEmail) {
      const favorites = JSON.parse(localStorage.getItem('favorites') || '{}');
      setIsFavorite(favorites[propertyId] || false);
    } else {
      setIsFavorite(false);
    }
  }, [propertyId, currentUserEmail]);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Only allow favorites for logged-in users
    if (!currentUserEmail) {
      window.alert('Please sign in to save your favorites');
      return;
    }

    const favorites = JSON.parse(localStorage.getItem('favorites') || '{}');
    favorites[propertyId] = !isFavorite;
    localStorage.setItem('favorites', JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleFavorite}
      className={`relative w-8 h-8 bg-white rounded-full flex items-center justify-center hover:shadow-md transition ${className}`}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      disabled={!currentUserEmail}
    >
      <div className="w-5 h-5 flex items-center justify-center">
        <svg
          width="19"
          height="17"
          viewBox="0 0 19 17"
          fill={isFavorite ? '#171E1D' : 'none'}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.01093 2.51144C7.35817 0.58534 4.60209 0.0672237 2.53129 1.83096C0.460501 3.59469 0.168963 6.54357 1.79517 8.62954C3.14725 10.3639 7.23911 14.0218 8.58021 15.2057C8.73025 15.3381 8.80526 15.4044 8.89277 15.4304C8.96915 15.4531 9.05272 15.4531 9.12909 15.4304C9.2166 15.4044 9.29162 15.3381 9.44166 15.2057C10.7827 14.0218 14.8746 10.3639 16.2267 8.62954C17.8529 6.54357 17.597 3.57614 15.4906 1.83096C13.3842 0.0857764 10.6637 0.58534 9.01093 2.51144Z"
            stroke="#171E1D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </button>
  );
}
