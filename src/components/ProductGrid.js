import React, { useState } from 'react';
import './styles.css';
import productimg from '../images/productimg.png';

const ProductGrid = () => {
  const [visibleProduct, setVisibleProduct] = useState(null);

  const toggleVisibility = (productName) => {
    setVisibleProduct(visibleProduct === productName ? null : productName);
  };

  return (
    <section className="products">
      <h2>Our Products</h2>
      <div className="product-grid">
        <div
          className={`product-item ${
            visibleProduct === 'SE03 Lite' ? 'expanded' : ''
          }`}
        >
          <img src={productimg} alt="SE03 Lite" />
          <h3>SE03 Lite</h3>
          <button
            className="view-product-btn"
            onClick={() => toggleVisibility('SE03 Lite')}
          >
            {visibleProduct === 'SE03 Lite' ? 'Hide Details' : 'View SE03 Lite'}
          </button>
          {visibleProduct === 'SE03 Lite' && (
            <>
              <p>
                Indulge in the perfect harmony of power and range with this
                Rhyno. Offering an experience with its novel 1500W motor, it
                ensures a thrilling ride while still delivering a stable
                warranty on electronics.
              </p>
              <ul className="product-specs">
                <li>
                  <strong>Battery:</strong> 1.8Kwh
                </li>
                <li>
                  <strong>Max range (@30km/h):</strong> 100 km
                </li>
                <li>
                  <strong>Motor:</strong> 1500W
                </li>
                <li>
                  <strong>Charging time:</strong> 3 hours (12A)
                </li>
                <li>
                  <strong>Battery warranty:</strong> 3 Years
                </li>
                <li>
                  <strong>Max speed:</strong> 50 km/hr
                </li>
                <li>
                  <strong>Max range (@full speed):</strong> 60 km
                </li>
                <li>
                  <strong>Max range (@45km/h):</strong> 90 km
                </li>
                <li>
                  <strong>Other key benefits:</strong> Fire-safe battery, Range
                  prediction, Comfortable ride and safe
                </li>
                <li>
                  <strong>Battery features:</strong> LFP with 1500 cycles,
                  Active Balancing, Waterproof (IP67)
                </li>
              </ul>
              <button className="buy-now-btn">Buy Now</button>
            </>
          )}
        </div>

        <div
          className={`product-item ${
            visibleProduct === 'SE03' ? 'expanded' : ''
          }`}
        >
          <img src={productimg} alt="SE03" />
          <h3>SE03</h3>
          <button
            className="view-product-btn"
            onClick={() => toggleVisibility('SE03')}
          >
            {visibleProduct === 'SE03' ? 'Hide Details' : 'View SE03'}
          </button>
          {visibleProduct === 'SE03' && (
            <>
              <p>
                Indulge in the perfect harmony of power and range with this
                Rhyno. Offering an experience with its novel 1500W motor, it
                ensures a thrilling ride while still delivering a stable
                warranty on electronics.
              </p>
              <ul className="product-specs">
                <li>
                  <strong>Battery:</strong> 1.8Kwh
                </li>
                <li>
                  <strong>Max range (@30km/h):</strong> 100 km
                </li>
                <li>
                  <strong>Motor:</strong> 1500W
                </li>
                <li>
                  <strong>Charging time:</strong> 3 hours (12A)
                </li>
                <li>
                  <strong>Battery warranty:</strong> 3 Years
                </li>
                <li>
                  <strong>Max speed:</strong> 50 km/hr
                </li>
                <li>
                  <strong>Max range (@full speed):</strong> 60 km
                </li>
                <li>
                  <strong>Max range (@45km/h):</strong> 90 km
                </li>
                <li>
                  <strong>Other key benefits:</strong> Fire-safe battery, Range
                  prediction, Comfortable ride and safe
                </li>
                <li>
                  <strong>Battery features:</strong> LFP with 1500 cycles,
                  Active Balancing, Waterproof (IP67)
                </li>
              </ul>
              <button className="buy-now-btn">Buy Now</button>
            </>
          )}
        </div>

        <div
          className={`product-item ${
            visibleProduct === 'SE03 Max' ? 'expanded' : ''
          }`}
        >
          <img src={productimg} alt="SE03 Max" />
          <h3>SE03 Max</h3>
          <button
            className="view-product-btn"
            onClick={() => toggleVisibility('SE03 Max')}
          >
            {visibleProduct === 'SE03 Max' ? 'Hide Details' : 'View SE03 Max'}
          </button>
          {visibleProduct === 'SE03 Max' && (
            <>
              <p>
                Indulge in the perfect harmony of power and range with this
                Rhyno. Offering an experience with its novel 1500W motor, it
                ensures a thrilling ride while still delivering a stable
                warranty on electronics.
              </p>
              <ul className="product-specs">
                <li>
                  <strong>Battery:</strong> 1.8Kwh
                </li>
                <li>
                  <strong>Max range (@30km/h):</strong> 100 km
                </li>
                <li>
                  <strong>Motor:</strong> 1500W
                </li>
                <li>
                  <strong>Charging time:</strong> 3 hours (12A)
                </li>
                <li>
                  <strong>Battery warranty:</strong> 3 Years
                </li>
                <li>
                  <strong>Max speed:</strong> 50 km/hr
                </li>
                <li>
                  <strong>Max range (@full speed):</strong> 60 km
                </li>
                <li>
                  <strong>Max range (@45km/h):</strong> 90 km
                </li>
                <li>
                  <strong>Other key benefits:</strong> Fire-safe battery, Range
                  prediction, Comfortable ride and safe
                </li>
                <li>
                  <strong>Battery features:</strong> LFP with 1500 cycles,
                  Active Balancing, Waterproof (IP67)
                </li>
              </ul>
              <button className="buy-now-btn">Buy Now</button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
