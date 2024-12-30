import { Bed, Bath, Square } from 'lucide-react';
import { Property } from '../types/property';
import { formatPrice } from '../utils/format';

interface PropertyInfoProps {
  property: Property;
}

export function PropertyInfo({ property }: PropertyInfoProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
          <p className="text-xl text-gray-600">{property.location}</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-blue-600">
            {formatPrice(property.price)}
          </div>
          <span className="inline-block px-3 py-1 bg-emerald-500 text-white text-sm font-medium rounded-full mt-2">
            {property.status === 'for-sale' ? 'For Sale' : property.status}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="flex items-center gap-2">
          <Bed className="w-5 h-5 text-gray-600" />
          <span className="text-gray-900">{property.bedrooms} Bedrooms</span>
        </div>
        <div className="flex items-center gap-2">
          <Bath className="w-5 h-5 text-gray-600" />
          <span className="text-gray-900">{property.bathrooms} Bathrooms</span>
        </div>
        <div className="flex items-center gap-2">
          <Square className="w-5 h-5 text-gray-600" />
          <span className="text-gray-900">{property.area}m²</span>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-3">Description</h2>
        <p className="text-gray-600 leading-relaxed">{property.description}</p>
      </div>
    </div>
  );
}