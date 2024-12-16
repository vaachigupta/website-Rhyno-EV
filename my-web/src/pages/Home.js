import React, { useState, useEffect } from 'react';
import ProductGrid from '../components/ProductGrid'; // Ensure this path is correct
import './Home.css';

const Home = () => {
  const [uspIndex, setUspIndex] = useState(0);
  const uspItems = [
    {
      title: "LFP Battery",
      description: "Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries, renowned for their safety features—eliminating the risk of fire associated with other Lithium batteries. These batteries boast a broader temperature range, ideal for the diverse Indian climate. Our technology enhances Rhyno's longevity, complemented by an Active Balancing Smart Battery Management System (BMS) for extended life and reduced maintenance. Each battery undergoes rigorous waterproofing tests according to IP76 standards."
    },
    {
      title: "Wider Tyres",
      description: "Now, say goodbye to skidding and embrace the leaning turns! Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous beast that ensures stability on different terrains such as wet roads, mud, and sand."
    },
    {
      title: "Range Prediction",
      description: "Many budget-friendly electric scooters overlook this crucial feature, causing riders to experience range anxiety. With Rhyno, you can ride with peace of mind, thanks to the scooter providing precise information about the remaining battery."
    },
    {
      title: "Extraordinary Experience",
      description: "Rhyno is more than just a mode of transportation. It is an experience of sheer comfort and style! A seamless fusion of minimalism, sophistication, and a touch of masculinity!"
    },
    {
      title: "Rugged and Simple Design",
      description: "We’ve had enough of the EVs looking and feeling like fragile plastic toys. Often fading out and shamelessly breaking in minor accidents, ending up spending weeks and months at service stations for complex repairs. We took a bold step of making something raw, rugged, and practical. We kept it so simple that even your trusted local mechanic can understand and repair most of it."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setUspIndex((prevIndex) => (prevIndex + 1) % uspItems.length);
    }, 5000); // Change USP every 5 seconds

    return () => clearInterval(interval);
  }, [uspItems.length]);

  return (
      <div className="home-container">
      {/* Front Line */}
      <div className="front-line">
        <h1>Ride into the Future with Rhyno EV</h1>
      </div>

      {/* Vehicle Photos */}
      <div className="vehicle-photos">
        <ProductGrid />
      </div>

      {/* Our USP - Rotating Carousel */}
      <div className="usp-carousel">
        <h2>Why Choose Us?</h2>
        <div className="usp-item">
          <h3>{uspItems[uspIndex].title}</h3>
          <p>{uspItems[uspIndex].description}</p>
        </div>
      </div>

      {/* Pre-book Now Button - Floating */}
      <a href="/pre-book" className="pre-book-floating-btn">
        Pre-book Now
      </a>
    </div>
  );
};

export default Home;

