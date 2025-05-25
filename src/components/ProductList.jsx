import React, { useState } from "react";
import ProductCard from "./ProductCard";
import "../css/ProductList.css";

const ProductList = ({ products }) => {
  //   if (products.length <= 0) {
  //     return (
  //       <div className="product-container">
  //         <h1>You have no products to show</h1>
  //       </div>
  //     );
  //   }
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  return (
    <div className="product-container">
      {products.length <= 0 ? (
        <h1>You have no products to show</h1>
      ) : (
        <>
          {isLoading ? (
            <h1>Loading...</h1>
          ) : (
            <>
              <h1>All Products</h1>
              <div className="product-grid">
                {products.map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ProductList;
