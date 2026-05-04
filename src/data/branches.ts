export interface Branch {
  id: string;
  city: string;
  state: string;
  address: string;
  phone: string;
  email: string;
  mapUrl: string;
  externalMapUrl: string;
  heroImage: string;
  icon: string;
  nearbyAreas: string[];
}

export const branches: Branch[] = [
  {
    id: "jhansi",
    city: "Jhansi",
    state: "Uttar Pradesh",
    address: "Shop No. S 54/4, Ground Floor, ITI Colony, Nearby ITI College, Underground Railway Bridge, Siddeshwar Nagar, Beside National Poly Clinic, Jhansi, Uttar Pradesh - 284003",
    phone: "+91 7706855855",
    email: "info@rkpackersjhansi.com",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.2234!2d78.5525036!3d25.4712704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397771385add40f9%3A0xa902b7500ae0ee83!2sRK+Packers+And+Movers+Jhansi!5e0!3m2!1sen!2sin!4v1710400000002!5m2!1sen!2sin",
    externalMapUrl: "https://www.google.com/maps/place/RK+Packers+And+Movers+Jhansi/@25.4712704,78.5525036,17z/",
    heroImage: "https://wallpapercave.com/wp/wp7023856.jpg",
    icon: "🏰",
    nearbyAreas: ["Civil Lines", "Sipri Bazaar", "Elite Crossing", "Gwalior Road", "Datia", "Orchha", "Babina", "ITI Colony", "Siddeshwar Nagar"]
  },
];
