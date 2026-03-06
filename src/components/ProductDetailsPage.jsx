import { Link, useParams } from 'react-router-dom';
import ShoppingCardData from '../mockCardData';
import './ProductDetailsPage.css';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const product = ShoppingCardData.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-details-container not-found">
        <h2>Product not found!</h2>
        <Link to="/">Back to products</Link>
      </div>
    );
  }

  return (
    <div className="product-details-container">
      <img src={product.imageUrl} alt={product.title} className="product-details-image" />
      <div className="product-details-info">
        <h1 className="product-details-title">{product.title}</h1>
        <p className="product-details-description">{product.description}</p>
        <p className="product-details-price">{product.price}</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
