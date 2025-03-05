import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const Vegetable = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4096/api/Vegitables`);
        setItem(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError('ERROR OCCUR IN FETCHING DATA');
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="text-center">
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }
 const dispatch=useDispatch();
  return (
    <div className="container">
      <div className="row">
        {item.map((item, index) => {
          return (
            <div key={index} className="col-md-3 mb-4 mt-3">
              <div className="card">
                <img src={item.img} alt={item.name} className="card-img-top" />
                <div className="card-body">
                  <div className="card-title">{item.name}</div>
                  <div className="card-text">
                    <strong>Price:</strong> RS: {item.price}
                  </div>
                  <div className="card-text">{item.description}</div>
                  <button  className='btn btn-warning shadow fw-bold' onClick={()=> dispatch(addToCart(item))}>Add to cart</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Vegetable;
