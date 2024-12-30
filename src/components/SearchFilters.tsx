import { Search, SlidersHorizontal } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Property } from '../types/property';
import { properties } from '../data/properties';

interface SearchFiltersProps {
  onFilter?: (filteredProperties: Property[]) => void;
}

export function SearchFilters({ onFilter }: SearchFiltersProps) {
  const [filters, setFilters] = useState({
    location: '',
    priceRange: 'any',
    propertyType: 'all',
    bedrooms: 'any',
    area: 'any'
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    if (!onFilter) return;

    let filtered = properties;

    // Location filter
    if (filters.location) {
      filtered = filtered.filter(property => 
        property.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Price range filter
    if (filters.priceRange !== 'any') {
      const [min, max] = filters.priceRange.split('-').map(Number);
      filtered = filtered.filter(property => {
        if (max) {
          return property.price >= min && property.price <= max;
        }
        return property.price >= min;
      });
    }

    // Property type filter
    if (filters.propertyType !== 'all') {
      filtered = filtered.filter(property => 
        property.type === filters.propertyType
      );
    }

    // Bedrooms filter
    if (filters.bedrooms !== 'any') {
      const minBedrooms = parseInt(filters.bedrooms);
      filtered = filtered.filter(property => 
        property.bedrooms >= minBedrooms
      );
    }

    // Area filter
    if (filters.area !== 'any') {
      const minArea = parseInt(filters.area);
      filtered = filtered.filter(property => 
        property.area >= minArea
      );
    }

    onFilter(filtered);
  }, [filters, onFilter]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by location..."
              value={filters.location}
              onChange={(e) => handleFilterChange('location', e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price Range
            </label>
            <select 
              value={filters.priceRange}
              onChange={(e) => handleFilterChange('priceRange', e.target.value)}
              className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
            >
              <option value="any">Any Price</option>
              <option value="0-500000">Up to €500k</option>
              <option value="500000-1000000">€500k - €1M</option>
              <option value="1000000-2000000">€1M - €2M</option>
              <option value="2000000-999999999">€2M+</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Property Type
            </label>
            <select 
              value={filters.propertyType}
              onChange={(e) => handleFilterChange('propertyType', e.target.value)}
              className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
            >
              <option value="all">All Types</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="villa">Villa</option>
              <option value="penthouse">Penthouse</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bedrooms
            </label>
            <select 
              value={filters.bedrooms}
              onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
              className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
            >
              <option value="any">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Area (m²)
            </label>
            <select 
              value={filters.area}
              onChange={(e) => handleFilterChange('area', e.target.value)}
              className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
            >
              <option value="any">Any</option>
              <option value="50">50+ m²</option>
              <option value="100">100+ m²</option>
              <option value="200">200+ m²</option>
              <option value="500">500+ m²</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}