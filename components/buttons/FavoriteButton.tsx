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
      className={`relative flex items-center justify-center hover:shadow-md transition ${className}`}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      <Heart filled={isFavorite} />
    </button>
  );
}
