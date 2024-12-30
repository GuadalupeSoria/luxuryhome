import { Hero } from '../components/Hero';
import { FeaturedProperties } from '../components/FeaturedProperties';
import { WhyChooseUs } from '../components/WhyChooseUs';

export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <FeaturedProperties />
      <WhyChooseUs />
    </div>
  );
}