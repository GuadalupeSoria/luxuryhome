export const properties = [
  {
    id: '1',
    title: 'Luxury Penthouse with Sea Views',
    price: 1250000,
    location: 'Diagonal Mar, Barcelona',
    bedrooms: 4,
    bathrooms: 3,
    area: 200,
    description: 'Stunning penthouse with panoramic views of the Mediterranean Sea. Features include a private terrace, high-end finishes, and smart home technology.',
    features: ['Sea View', 'Terrace', 'Pool', 'Parking', 'Smart Home'],
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    ],
    type: 'penthouse',
    status: 'for-sale'
  },
  {
    id: '2',
    title: 'Modern Apartment in Eixample',
    price: 850000,
    location: 'Eixample Right, Barcelona',
    bedrooms: 3,
    bathrooms: 2,
    area: 150,
    description: 'Beautifully renovated apartment in a modernist building. Original features combined with contemporary design.',
    features: ['Modernist Building', 'High Ceilings', 'Balcony', 'Elevator'],
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    ],
    type: 'apartment',
    status: 'for-sale'
  },
  {
    id: '3',
    title: 'Villa in Pedralbes',
    price: 2500000,
    location: 'Pedralbes, Barcelona',
    bedrooms: 5,
    bathrooms: 4,
    area: 400,
    description: 'Exclusive villa with private garden and pool in the prestigious Pedralbes area.',
    features: ['Private Pool', 'Garden', 'Security System', 'Guest House'],
    images: [
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    ],
    type: 'villa',
    status: 'for-sale'
  }
] as const;