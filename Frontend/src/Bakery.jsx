import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from './CartSlice';
import { ToastContainer, toast } from 'react-toastify'; // ✅ Import toastify
import 'react-toastify/dist/ReactToastify.css'; // ✅ Import toastify CSS

const Bakery = () => {
  const [item, Setitem] = useState([]);
  const [Loading, SetLoading] = useState(true);
  const [Error, SetError] = useState(null);

  useEffect(() => {
    const Fetchdata = async () => {
      try {
        const response = await axios.get(`http://localhost:4096/api/Bakery`);
        Setitem(response.data);
        SetLoading(false);
      } catch (error) {
        SetError('ERROR OCCURRED WHILE FETCHING DATA');
        SetLoading(false);
      }
    };
    Fetchdata();
  }, []);

  if (Loading) {
    return (
      <div className='text-center mt-5 mb-5'>
        <Spinner animation='border' role='status' variant='primary'>
          <br />
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (Error) {
    return <div className='alert alert-danger'>{Error}</div>;
  }

  const dispatch = useDispatch();

  // ✅ Function to handle adding item to cart and showing toast notification
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    toast.success(`${item.name} added to cart!`, { position: 'top-right' });
  };

  return (
    <div className='container'>
      <ToastContainer /> {/* ✅ Toast container to display notifications */}
      
      <div className="row">
        {item.map((item, index) => {
          return (
            <div key={index} className='col-md-4 mt-4 mb-5'>
              <div className="card">
                <img src={item.img} alt={item.name} />
                <div className="card-body">
                  <div className="card-title h4">{item.name}</div>
                  <h1 className="card-text h3"><strong>Price=</strong> RS: {item.price}</h1>
                  <div className="card-text h5">{item.description}</div>
                  
                  {/* ✅ Modified button to show toast on adding to cart */}
                  <button className='btn btn-warning fw-bold' onClick={() => handleAddToCart(item)}>
                    Add to cart
                  </button>

                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bakery;
