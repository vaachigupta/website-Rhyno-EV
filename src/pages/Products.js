import React from 'react';
import ProductGrid from '../components/ProductGrid'; // Import the ProductGrid component
import ComparisonTable from '../components/Comparison'; // Import the ComparisonTable component

function Products() {
  return (
    <>
      <div className="dd-container"> 
        <ProductGrid /> {/* Render the product grid here */}
      </div>

      <div className="comparison-container">
        <ComparisonTable /> {/* Render the comparison table here */}
      </div>
    </>
  );
};

export default Products;
