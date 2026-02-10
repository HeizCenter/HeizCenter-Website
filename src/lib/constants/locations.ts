import { Location } from "@/types";
import { CONTACT } from "@/lib/config/contact";

export const LOCATIONS: Location[] = [
  {
    id: "bobingen",
    name: "Bobingen",
    city: "Bobingen",
    address: "Lechallee 28, 86399 Bobingen",
    phone: CONTACT.PHONE_DISPLAY,
    email: CONTACT.EMAIL,
    coordinates: {
      lat: 48.2764,
      lng: 10.8336,
    },
  },
  {
    id: "gutenzell-huerbel",
    name: "Gutenzell-Hürbel",
    city: "Gutenzell-Hürbel",
    address: "Schlüsselbergstraße 5, 88484 Gutenzell-Hürbel",
    phone: CONTACT.PHONE_DISPLAY,
    email: CONTACT.EMAIL,
    coordinates: {
      lat: 48.0667,
      lng: 9.9667,
    },
  },
  {
    id: "klosterlechfeld",
    name: "Klosterlechfeld",
    city: "Klosterlechfeld",
    address: "Schulstraße 40, 86836 Klosterlechfeld",
    phone: CONTACT.PHONE_DISPLAY,
    email: CONTACT.EMAIL,
    coordinates: {
      lat: 48.1547,
      lng: 10.8308,
    },
  },
];
