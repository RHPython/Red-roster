/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import NewsletterPopup from './components/NewsletterPopup';
import Home from './pages/Home';
import Reservations from './pages/Reservations';
import Menus from './pages/Menus';
import PrivateEvents from './pages/PrivateEvents';
import MusicSchedule from './pages/MusicSchedule';
import About from './pages/About';
import Artwork from './pages/Artwork';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// SEO Meta Handler (Simulated for SPA)
function SEOHandler() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    const meta: Record<string, { title: string, description: string }> = {
      '/': { 
        title: 'Red Rooster Harlem | Best Soul Food Harlem NYC | Marcus Samuelsson', 
        description: 'Experience the heart of Harlem at Red Rooster. Award-winning soul food by Chef Marcus Samuelsson, live music, and vibrant culture.' 
      },
      '/reservations': { 
        title: 'Reservations | Red Rooster Harlem', 
        description: 'Book your table at Red Rooster Harlem. Join us for lunch, dinner, or our legendary Gospel Brunch.' 
      },
      '/menus': { 
        title: 'Menus | Red Rooster Harlem | Soul Food Classics', 
        description: 'Explore our menus featuring Fried Yardbird, Helga\'s Meatballs, and modern soul food favorites.' 
      },
      '/private-events': { 
        title: 'Private Events & Dining | Harlem New York', 
        description: 'Host your next celebration at Red Rooster. Private dining spaces for weddings, corporate events, and birthdays.' 
      },
      '/music-schedule': { 
        title: 'Live Music Schedule | Rooster Sundays | Harlem', 
        description: 'Nightly live music and our famous Gospel Brunch. See who\'s performing at Red Rooster Harlem.' 
      },
      '/about': { 
        title: 'About Us | Chef Marcus Samuelsson | Red Rooster Harlem', 
        description: 'Learn about the story of Red Rooster, Chef Marcus Samuelsson, and our deep roots in the Harlem community.' 
      },
      '/artwork': { 
        title: 'Art Series | Harlem Culture Gallery', 
        description: 'Discover the rotating art collection at Red Rooster, featuring talented local Harlem artists.' 
      }
    };

    const pageMeta = meta[pathname] || meta['/'];
    document.title = pageMeta.title;
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', pageMeta.description);
  }, [pathname]);

  return null;
}

// Structured Data (JSON-LD)
function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Red Rooster Harlem",
    "image": "https://picsum.photos/seed/harlem/1200/800",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "310 Lenox Avenue",
      "addressLocality": "Harlem",
      "addressRegion": "NY",
      "postalCode": "10027",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.8083,
      "longitude": -73.9442
    },
    "url": "https://redroosterharlem.com",
    "telephone": "+12127929001",
    "servesCuisine": "Soul Food, American",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "12:00",
        "closes": "21:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "12:00",
        "closes": "22:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "11:00",
        "closes": "22:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "21:30"
      }
    ]
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <SEOHandler />
      <StructuredData />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/menus" element={<Menus />} />
            <Route path="/private-events" element={<PrivateEvents />} />
            <Route path="/music-schedule" element={<MusicSchedule />} />
            <Route path="/about" element={<About />} />
            <Route path="/artwork" element={<Artwork />} />
            {/* Fallback */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <ChatWidget />
        <NewsletterPopup />
      </div>
    </Router>
  );
}
