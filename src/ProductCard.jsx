import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ id, imageUrl, title, description, price }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={title} className="product-image" />
      <div className="product-info">
        <h2 className="product-title">{title}</h2>
        <p className="product-description">{description}</p>
        <div className="product-footer">
          <p className="product-price">{price}</p>
          <Link to={`/product/${id}`} className="details-link">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
