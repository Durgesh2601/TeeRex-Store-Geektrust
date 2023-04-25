import "./index.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h4>{product?.name}</h4>
      <div className="product-img-container">
        <img
          src={product?.imageURL}
          alt="product-img"
          height={100}
          width={100}
        />
      </div>
      <div className="product-details">
        <h4 className="price-tag">Rs. {product?.price}</h4>
        <button className="add-cart-btn">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
