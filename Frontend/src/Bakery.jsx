import React, { useState, useEffect } from 'react';
const Bakery = ({ onAddToCart }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4096/api/Bakery'); 
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setItems(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className='fw-bold text-center '>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='container-lg'>
      <h1><img src="/Fruit.webp" className='rounded mt-5 container'  alt="" /></h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {items.map((item) => (
          <div key={item.id} style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <img src={item.img} alt={item.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p><strong>Price:</strong> ${item.price}</p>
            <p><strong><span className='text-primary'>Quantity Available</span>:</strong> {item.quantity}</p>
            <button
              style={{
                padding: '10px 15px',
                backgroundColor: '#28a745',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
              onClick={() => onAddToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bakery;
