export interface InspirationItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

export interface Property {
  id: string;
  categoryId: string;
  title: string;
  location: string;
  dateRange: string;
  pricePerNight: number;
  rating: number;
  distance?: string;
  image: string;
  badge?: string;
  lat: number;
  lng: number;
}

export interface Category {
  id: string;
  label: string;
}
