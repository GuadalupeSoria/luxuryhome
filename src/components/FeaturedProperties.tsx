import { properties } from '../data/properties';
import { PropertyGrid } from './PropertyGrid';

export function FeaturedProperties() {
  const featuredProperties = properties.slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Featured Properties</h2>
        <a 
          href="/properties" 
          className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
        >
          View All Properties
          <span aria-hidden="true">→</span>
        </a>
      </div>
      <PropertyGrid properties={featuredProperties} />
    </div>
  );
}