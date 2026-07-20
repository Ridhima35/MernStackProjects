import { useState, useEffect } from 'react';

const ShopByCollections = () => {
    // 1. Create a state to store our flowers from the database
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // 2. Fetch the data as soon as the page loads
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // This calls the backend route you just built!
                const response = await fetch('http://localhost:5000/api/products');
                const data = await response.json();

                setProducts(data); // Save the data to our state
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // 3. Show a loading message while waiting for the database
    if (loading) {
        return <h2>Loading beautiful flowers...</h2>;
    }

    // 4. Display the products on the screen!
    return (
        <div style={{ padding: '20px' }}>
            <h1>Shop By Collections</h1>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                {products.map((product) => (
                    <div key={product._id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', width: '250px' }}>
                        <img
                            src={product.imageURL}
                            alt={product.name}
                            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                        />
                        <h3>{product.name}</h3>
                        <p style={{ color: 'gray' }}>{product.category}</p>
                        <p><strong>${product.price}</strong></p>
                        <button style={{ backgroundColor: 'pink', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                            View Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShopByCollections;

