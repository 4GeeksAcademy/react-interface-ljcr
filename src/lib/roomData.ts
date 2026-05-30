import { properties } from "@/lib/homeData";
import type { RoomAmenity, RoomDetail } from "@/types/room";

const defaultAmenities: RoomAmenity[] = [
  { id: "wifi", label: "Fast wifi" },
  { id: "kitchen", label: "Kitchen" },
  { id: "parking", label: "Free parking" },
  { id: "workspace", label: "Dedicated workspace" },
  { id: "pool", label: "Private pool" },
  { id: "ac", label: "Air conditioning" },
];

const galleryByRoomId: Record<string, string[]> = {
  "room-1": [
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1500&q=80",
  ],
  "room-2": [
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1500&q=80",
  ],
};

const fallbackGallery = [
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1500&q=80",
];

export const roomDetails: RoomDetail[] = properties.map((property, index) => {
  const guests = 2 + (index % 4);
  return {
    ...property,
    description:
      "A calm, design-forward stay with bright natural light, comfortable social spaces, and thoughtful details for short or extended trips.",
    guests,
    bedrooms: 1 + (index % 3),
    beds: 1 + (index % 4),
    baths: 1 + (index % 2),
    images: galleryByRoomId[property.id] ?? fallbackGallery,
    amenities: defaultAmenities,
    host: {
      name: index % 2 === 0 ? "Sofia" : "Daniel",
      subtitle: "Superhost",
      joined: "Hosting for 5 years",
      responseRate: "Responds within 1 hour",
      avatar:
        index % 2 === 0
          ? "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
          : "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    },
    cleaningFee: 65,
    serviceFee: 48,
  };
});

export const getRoomDetailById = (id: string) => {
  return roomDetails.find((room) => room.id === id);
};
