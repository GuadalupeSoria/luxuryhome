import { Users, Award, Clock, Building } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About LuxuryHomes</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are Barcelona's premier real estate agency, dedicated to helping you find
            your perfect home in this beautiful city.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {[
            { icon: Building, label: 'Properties', value: '500+' },
            { icon: Users, label: 'Happy Clients', value: '1000+' },
            { icon: Award, label: 'Awards', value: '15+' },
            { icon: Clock, label: 'Years Experience', value: '20+' },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="text-center">
              <Icon className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">{value}</div>
              <div className="text-gray-600">{label}</div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To provide exceptional real estate services that exceed our clients'
              expectations, helping them find their dream properties while making the
              process smooth and enjoyable.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be Barcelona's most trusted and innovative real estate agency,
              known for our integrity, expertise, and commitment to client satisfaction.
            </p>
          </div>
        </div>

        {/* Team */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Maria Garcia',
                role: 'CEO & Founder',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
              },
              {
                name: 'Carlos Rodriguez',
                role: 'Head of Sales',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
              },
              {
                name: 'Ana Martinez',
                role: 'Property Consultant',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
              },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}