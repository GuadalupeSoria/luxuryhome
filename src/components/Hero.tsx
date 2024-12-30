import { SearchFilters } from './SearchFilters';

export function Hero() {
  return (
    <div className="relative bg-blue-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Dream Home in Barcelona
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Discover exclusive properties in the most sought-after locations
          </p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative -bottom-8">
        <SearchFilters />
      </div>
    </div>
  );
}