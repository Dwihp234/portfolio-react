import './ProductSection.css';

const products = [
  {
    id: 1,
    name: 'Mining Analytics Dashboard',
    description: 'A dashboard for mining operations, cost optimization, and predictive maintenance.',
    image: '/gallery/SCM/logistics-dashboard.jpg',
    link: '#'
  },
  {
    id: 2,
    name: 'Supplier Performance Tracker',
    description: 'Track supplier performance and procurement KPIs with interactive charts.',
    image: '/gallery/SCM/supplier-performance.jpg',
    link: '#'
  },
  {
    id: 3,
    name: 'Inventory Optimization Tool',
    description: 'Optimize inventory levels and reduce costs using advanced analytics.',
    image: '/gallery/SCM/inventory.jpg',
    link: '#'
  }
];

const ProductSection = () => (
  <section id="products" className="product-section">
    <div className="container">
      <h2 className="section-title">Featured Products</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <a href={product.link} className="product-link">View Details</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductSection;
