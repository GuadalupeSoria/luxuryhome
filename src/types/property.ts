export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  description: string;
  features: string[];
  images: string[];
  type: 'apartment' | 'house' | 'villa' | 'penthouse';
  status: 'for-sale' | 'sold' | 'reserved';
}