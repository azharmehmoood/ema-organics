import { useState } from "react";

const ProductCard = ({ product }) => {
  const [showDesc, setShowDesc] = useState(false);

  return (
    <div className="product-card">
      {/* Image */}
      <img
        src={product.image}
        alt={product.name}
        onClick={() => setShowDesc(!showDesc)}
        className="product-img"
      />

      <h3>{product.name}</h3>
      <p className="price">Rs {product.price}</p>

      {/* Description (toggle) */}
      {showDesc && (
        <p className="desc">
          {product.description}
        </p>
      )}

      <a
        className="order-btn"
        href={`https://wa.me/923044312356?text=Hello, I want to order ${product.name}`}
        target="_blank"
      >
        Order on WhatsApp
      </a>
    </div>
  );
};

export default ProductCard;
