import React from "react";
import "../css/ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt="" width="100%" />
      <div className="content">
        <div className="name-cat">
          <h3>{product.name}</h3>
          <span className="cat">{product.category}</span>
        </div>
        <div className="price-slash">
          <h3>{product.price}</h3>
          <span className="slash">{product.actualPrice}</span>
        </div>
        <p>
          {product.description.slice(0, 100)}...<a href="#">view more</a>
        </p>
        <a className="buy-btn" href="">
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
