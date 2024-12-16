import React from 'react';
import './styles.css';

const ComparisonTable = () => {
  return (
    <section className="comparison-container">
      <h1><u>Compare All Models</u></h1>
      <h2></h2>
      <div className="table-container">
        <div className="table">
          {/* Header Row */}
          <div className="table-row">
            <div className="table-cell table-cell-header">Specification</div>
            <div className="table-cell table-cell-header">Rhyno SE03 Lite</div>
            <div className="table-cell table-cell-header">Rhyno SE03</div>
            <div className="table-cell table-cell-header">Rhyno SE03 Max</div>
          </div>

          {/* Battery Row */}
          <div className="table-row">
            <div className="table-cell" data-label="Specification">Battery</div>
            <div className="table-cell" data-label="Rhyno SE03 Lite">1.8Kwh</div>
            <div className="table-cell" data-label="Rhyno SE03">2.7Kwh</div>
            <div className="table-cell" data-label="Rhyno SE03 Max">2.7Kwh</div>
          </div>

          {/* Battery Features */}
          <div className="table-row">
            <div className="table-cell" data-label="Specification">Battery Features</div>
            <div className="table-cell" data-label="Rhyno SE03 Lite">
              LFP with 1500 cycles<br />
              Active Balancing<br />
              Waterproof (IP67)
            </div>
            <div className="table-cell" data-label="Rhyno SE03">
              LFP with 1500 cycles<br />
              Active Balancing<br />
              Waterproof (IP67)
            </div>
            <div className="table-cell" data-label="Rhyno SE03 Max">
              LFP with 1500 cycles<br />
              Active Balancing<br />
              Waterproof (IP67)
            </div>
          </div>

          {/* Battery Warranty */}
          <div className="table-row">
            <div className="table-cell" data-label="Specification">Battery Warranty</div>
            <div className="table-cell" data-label="Rhyno SE03 Lite">3 Years</div>
            <div className="table-cell" data-label="Rhyno SE03">3 Years</div>
            <div className="table-cell" data-label="Rhyno SE03 Max">3 Years</div>
          </div>

          {/* Charging Time */}
          <div className="table-row">
            <div className="table-cell" data-label="Specification">Charging Time</div>
            <div className="table-cell" data-label="Rhyno SE03 Lite">3 hours (12A)</div>
            <div className="table-cell" data-label="Rhyno SE03">4 hours (12A)</div>
            <div className="table-cell" data-label="Rhyno SE03 Max">4 hours (12A)</div>
          </div>

          {/* Motor */}
          <div className="table-row">
            <div className="table-cell" data-label="Specification">Motor</div>
            <div className="table-cell" data-label="Rhyno SE03 Lite">1500W</div>
            <div className="table-cell" data-label="Rhyno SE03">1500W</div>
            <div className="table-cell" data-label="Rhyno SE03 Max">2000W</div>
          </div>

          {/* Max Speed */}
          <div className="table-row">
            <div className="table-cell" data-label="Specification">Max Speed</div>
            <div className="table-cell" data-label="Rhyno SE03 Lite">55 km/h</div>
            <div className="table-cell" data-label="Rhyno SE03">55 km/h</div>
            <div className="table-cell" data-label="Rhyno SE03 Max">65 km/h</div>
          </div>

          {/* Warranty on Electronics */}
          <div className="table-row">
            <div className="table-cell" data-label="Specification">Warranty on Electronics</div>
            <div className="table-cell" data-label="Rhyno SE03 Lite">1 Year</div>
            <div className="table-cell" data-label="Rhyno SE03">1 Year</div>
            <div className="table-cell" data-label="Rhyno SE03 Max">1 Year</div>
          </div>

          {/* Max Range @30km/h */}
          <div className="table-row">
            <div className="table-cell" data-label="Specification">Max Range (@30km/h)</div>
            <div className="table-cell" data-label="Rhyno SE03 Lite">100 km</div>
            <div className="table-cell" data-label="Rhyno SE03">150 km</div>
            <div className="table-cell" data-label="Rhyno SE03 Max">120 km</div>
          </div>

          {/* Max Range @45km/h */}
          <div className="table-row">
            <div className="table-cell" data-label="Specification">Max Range (@45km/h)</div>
            <div className="table-cell" data-label="Rhyno SE03 Lite">90 km</div>
            <div className="table-cell" data-label="Rhyno SE03">110 km</div>
            <div className="table-cell" data-label="Rhyno SE03 Max">100 km</div>
          </div>

          {/* Max Range @Full Speed */}
          <div className="table-row">
            <div className="table-cell" data-label="Specification">Max Range (@Full Speed)</div>
            <div className="table-cell" data-label="Rhyno SE03 Lite">60 km</div>
            <div className="table-cell" data-label="Rhyno SE03">90 km</div>
            <div className="table-cell" data-label="Rhyno SE03 Max">80 km</div>
          </div>

          {/* Other Key Benefits */}
          <div className="table-row">
            <div className="table-cell" data-label="Specification">Other Key Benefits</div>
            <div className="table-cell" data-label="Rhyno SE03 Lite">
              Fire-safe Battery<br />
              Range Prediction<br />
              Comfortable Ride<br />
              Stable and Safe
            </div>
            <div className="table-cell" data-label="Rhyno SE03">
              Fire-safe Battery<br />
              Range Prediction<br />
              Comfortable Ride<br />
              Stable and Safe
            </div>
            <div className="table-cell" data-label="Rhyno SE03 Max">
              Fire-safe Battery<br />
              Range Prediction<br />
              Comfortable Ride<br />
              Stable and Safe
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
