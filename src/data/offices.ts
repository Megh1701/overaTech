export interface OfficeLocation {
  id: string;
  region: "Americas" | "EMEA" | "APAC";
  city: string;
  country: string;
  title: string;
  address: string;
  phone: string;
  email: string;
  isHeadquarter?: boolean;
}

export const globalOffices: OfficeLocation[] = [
  {
    id: "sf-hq",
    region: "Americas",
    city: "San Francisco",
    country: "United States",
    title: "Global Headquarters & Innovation Campus",
    address: "500 Howard Street, Suite 2400, San Francisco, CA 94105",
    phone: "+1 (415) 880-9200",
    email: "sf.hq@overatech.com",
    isHeadquarter: true,
  },
  {
    id: "ny-office",
    region: "Americas",
    city: "New York",
    country: "United States",
    title: "Financial Services & East Coast Hub",
    address: "30 Rockefeller Plaza, 48th Floor, New York, NY 10112",
    phone: "+1 (212) 550-3100",
    email: "ny@overatech.com",
  },
  {
    id: "toronto-office",
    region: "Americas",
    city: "Toronto",
    country: "Canada",
    title: "Canada Digital Center of Excellence",
    address: "100 King Street West, Suite 5600, Toronto, ON M5X 1C9",
    phone: "+1 (416) 770-4300",
    email: "toronto@overatech.com",
  },
  {
    id: "london-office",
    region: "EMEA",
    city: "London",
    country: "United Kingdom",
    title: "EMEA Headquarters",
    address: "1 Canada Square, 35th Floor, Canary Wharf, London E14 5AA",
    phone: "+44 (0) 20 7946 0199",
    email: "london.hq@overatech.com",
  },
  {
    id: "frankfurt-office",
    region: "EMEA",
    city: "Frankfurt",
    country: "Germany",
    title: "Central Europe Industrial 4.0 Hub",
    address: "Mainzer Landstraße 180, 60327 Frankfurt am Main",
    phone: "+49 (69) 975 440",
    email: "frankfurt@overatech.com",
  },
  {
    id: "zurich-office",
    region: "EMEA",
    city: "Zurich",
    country: "Switzerland",
    title: "Private Banking & Wealth Technology Center",
    address: "Bahnhofstrasse 45, 8001 Zurich",
    phone: "+41 (44) 220 8900",
    email: "zurich@overatech.com",
  },
  {
    id: "singapore-office",
    region: "APAC",
    city: "Singapore",
    country: "Singapore",
    title: "Asia-Pacific Headquarters",
    address: "1 Marina Boulevard, #28-01 One Marina Boulevard, Singapore 018989",
    phone: "+65 6832 9000",
    email: "singapore.hq@overatech.com",
  },
  {
    id: "tokyo-office",
    region: "APAC",
    city: "Tokyo",
    country: "Japan",
    title: "Japan Digital Engineering Center",
    address: "Roppongi Hills Mori Tower, 6-10-1 Roppongi, Minato-ku, Tokyo 106-6108",
    phone: "+81 (3) 5410 8800",
    email: "tokyo@overatech.com",
  },
  {
    id: "bengaluru-office",
    region: "APAC",
    city: "Bengaluru",
    country: "India",
    title: "Global Technology & AI Innovation Campus",
    address: "Electronic City, Phase 1, Hosur Road, Bengaluru 560100",
    phone: "+91 80 2852 0261",
    email: "bengaluru@overatech.com",
  },
  {
    id: "sydney-office",
    region: "APAC",
    city: "Sydney",
    country: "Australia",
    title: "ANZ Digital Hub",
    address: "100 Barangaroo Avenue, Tower One, Sydney NSW 2000",
    phone: "+61 2 8249 7000",
    email: "sydney@overatech.com",
  },
];

