import ShoppingCardData from '../mockCardData';
import ProductCard from '../ProductCard';
import './ProductsPage.css';

const ProductsPage = ({ searchQuery = '' }) => {
  const filteredProducts = ShoppingCardData.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="product-grid">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default ProductsPage;
