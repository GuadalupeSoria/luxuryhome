import { useParams } from 'react-router-dom';
import { properties } from '../data/properties';
import { PropertyGallery } from '../components/PropertyGallery';
import { PropertyInfo } from '../components/PropertyInfo';
import { PropertyFeatures } from '../components/PropertyFeatures';
import { ContactForm } from '../components/ContactForm';

export function PropertyDetailsPage() {
  const { id } = useParams();
  const property = properties.find(p => p.id === id);

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PropertyGallery images={property.images} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <PropertyInfo property={property} />
            <PropertyFeatures features={property.features} />
          </div>
          <div>
            <ContactForm propertyId={property.id} />
          </div>
        </div>
      </div>
    </div>
  );
}