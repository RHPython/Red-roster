export interface MenuItem {
  name: string;
  price: string;
  category: 'Lunch' | 'Dinner' | 'Brunch' | 'Drinks';
  description?: string;
  aiDescription?: string;
}

export const MENU_ITEMS: MenuItem[] = [
  { name: "Fried Yardbird", price: "$28", category: "Dinner", description: "Dark meat, mace gravy, hot honey, collards" },
  { name: "Cornbread", price: "$9", category: "Dinner", description: "Honey butter, tomato jam" },
  { name: "Helga's Meatballs", price: "$26", category: "Dinner", description: "Lingonberries, pickled cucumber, mashed potatoes" },
  { name: "Catfish & Grits", price: "$24", category: "Brunch", description: "Crispy catfish, creamy grits, creole sauce" },
  { name: "Harlem Mule", price: "$16", category: "Drinks", description: "Vodka, ginger beer, hibiscus, lime" },
  { name: "Rooster Burger", price: "$22", category: "Lunch", description: "Short rib blend, cheddar, secret sauce" },
];

export const RESTAURANT_INFO = {
  name: "Red Rooster Harlem",
  address: "310 Lenox Avenue, Harlem, NY 10027",
  phone: "+1 212-792-9001",
  email: "info@redroosterharlem.com",
  eventsEmail: "dina@redroosterharlem.com",
  hours: {
    dining: "Mon–Thu 12PM–9:30PM · Fri 12PM–10:30PM · Sat 11AM–10:30PM · Sun 10AM–9:30PM",
    bar: "Mon–Thu 12PM–11PM · Fri 12PM–Midnight · Sat 11AM–Midnight · Sun 10AM–11PM"
  },
  socials: {
    instagram: "https://instagram.com/redrooster",
    twitter: "https://twitter.com/redrooster",
    facebook: "https://facebook.com/redrooster"
  }
};
