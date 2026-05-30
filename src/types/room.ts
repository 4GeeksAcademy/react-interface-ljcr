import type { Property } from "@/types/home";

export interface RoomAmenity {
  id: string;
  label: string;
}

export interface RoomHost {
  name: string;
  subtitle: string;
  joined: string;
  responseRate: string;
  avatar: string;
}

export interface RoomDetail extends Property {
  description: string;
  guests: number;
  bedrooms: number;
  beds: number;
  baths: number;
  images: string[];
  amenities: RoomAmenity[];
  host: RoomHost;
  cleaningFee: number;
  serviceFee: number;
}
