import { useState } from 'react';
import { SearchFilters } from '../components/SearchFilters';
import { PropertyGrid } from '../components/PropertyGrid';
import { properties } from '../data/properties';
import { Property } from '../types/property';

export function PropertiesPage() {
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Properties for Sale</h1>
        <SearchFilters onFilter={setFilteredProperties} />
        <PropertyGrid properties={filteredProperties} />
      </div>
    </div>
  );
}