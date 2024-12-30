import React from 'react';
import { Heart, Bed, Bath, Square } from 'lucide-react';
import { Property } from '../types/property';
import { formatPrice } from '../utils/format';
import { Link } from 'react-router-dom';
import { useFavorites } from '../hooks/useFavorites';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const isLiked = isFavorite(property.id);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-64 object-cover"
        />
        <button 
          onClick={(e) => {
            e.preventDefault();
            toggleFavorite(property.id);
          }}
          className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
        >
          <Heart 
            className={`w-5 h-5 ${isLiked ? 'fill-rose-500 text-rose-500' : 'text-gray-600'}`} 
          />
        </button>
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 bg-emerald-500 text-white text-sm font-medium rounded-full">
            {property.status === 'for-sale' ? 'For Sale' : property.status}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{property.title}</h3>
        <p className="text-gray-600 mb-4">{property.location}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4 text-gray-700">
            <div className="flex items-center gap-1">
              <Bed className="w-4 h-4" />
              <span>{property.bedrooms}</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath className="w-4 h-4" />
              <span>{property.bathrooms}</span>
            </div>
            <div className="flex items-center gap-1">
              <Square className="w-4 h-4" />
              <span>{property.area}m²</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">
            {formatPrice(property.price)}
          </span>
          <Link
            to={`/properties/${property.id}`}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}