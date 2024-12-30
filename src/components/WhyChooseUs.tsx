import { Building2, Shield, Users, Clock } from 'lucide-react';

export function WhyChooseUs() {
  const features = [
    {
      icon: Building2,
      title: 'Premium Properties',
      description: 'Access to exclusive luxury properties in Barcelona\'s most desirable locations'
    },
    {
      icon: Shield,
      title: 'Trusted Agency',
      description: 'Over 20 years of experience in Barcelona\'s real estate market'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Professional multilingual agents providing personalized service'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for all your real estate needs'
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            Your trusted partner in finding the perfect property in Barcelona
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.title} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}