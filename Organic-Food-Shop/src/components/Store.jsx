import { useState, useEffect } from 'react';
import { fetchProducts } from '../services/api';
import ProductModal from './ProductModal';
import ProductCard from './ProductCard';

// Import local images from assets
import quinoaImg from '../assets/images/quinoa.jpg';
import gheeImg from '../assets/images/ghee.jpg';
import honeyImg from '../assets/images/honey.jpg';
import chiaImg from '../assets/images/chia_seeds.jpg';
import acvImg from '../assets/images/acv.jpg';
import coconutImg from '../assets/images/coconut_oil.jpg';
import teaImg from '../assets/images/green_tea.jpg';
import almondImg from '../assets/images/almonds.jpg';
import saltImg from '../assets/images/pink_salt.jpg';
import riceImg from '../assets/images/brown_rice.jpg';

// Map database image filenames exactly to their corresponding local assets
const imageMap = {
  'honey.jpg': honeyImg,
  'ghee.jpg': gheeImg,
  'chia_seeds.jpg': chiaImg,
  'acv.jpg': acvImg,
  'coconut_oil.jpg': coconutImg,
  'green_tea.jpg': teaImg,
  'quinoa.jpg': quinoaImg,
  'almonds.jpg': almondImg,
  'pink_salt.jpg': saltImg,
  'brown_rice.jpg': riceImg
};

const Store = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      const apiData = await fetchProducts();
      if (apiData && apiData.length > 0) {
        setProducts(apiData);
      }
    };
    loadProducts();
  }, []);

  // Resolves whether to use local asset or fallback external URL
  const getProductImage = (imageField) => {
    if (!imageField) return '';

    // Extract filename if a path is given (e.g. "images/ghee.jpg" -> "ghee.jpg")
    const filename = imageField.split('/').pop();

    return imageMap[filename] || imageField;
  };

  return (
    <section className="shop py-5 bg-white" id="store">
      <div className="container py-4">
        <div className="card shadow-lg border-0 p-4 p-md-5 rounded-4 bg-light">
          <div className="row mb-5">
            <div className="col-lg-8 m-auto text-center">
              <span className="text-success fw-bold uppercase-tracking">Explore Catalog</span>
              <h1 className="fw-bold mt-2">Explore Our Store</h1>
              <h6 className="text-danger fw-semibold">Pick Your Product From Our Store</h6>
            </div>
          </div>
          <div className="row g-4">
            {products.map((product) => (
              <ProductCard
                key={product._id || product.id}
                product={product}
                onSelect={setSelectedProduct}
                getProductImage={getProductImage}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Product Detail Modal Component */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        getProductImage={getProductImage}
      />
    </section>
  );
};

export default Store;

