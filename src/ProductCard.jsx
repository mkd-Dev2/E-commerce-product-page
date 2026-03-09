import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ id, imageUrl, title, description, price, category, rating, reviewCount, inStock }) => {
  // Render stars based on rating
  const renderStars = (rate) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rate ? 'star' : 'star-empty'}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={imageUrl} alt={title} className="product-image" />
        <div className="product-image-overlay"></div>
        {category && <span className="product-category">{category}</span>}
      </div>
      <div className="product-info">
        <h2 className="product-title">{title}</h2>

        {/* Rating Stars */}
        <div className="product-rating">
          {renderStars(rating || 4)}
          <span className="rating-count">({reviewCount || 0} reviews)</span>
        </div>

        <p className="product-description">{description}</p>

        {/* Meta info */}
        <div className="product-meta">
          <span className="meta-item">
            {inStock !== false ? '✓ In Stock' : '✕ Out of Stock'}
          </span>
        </div>

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
