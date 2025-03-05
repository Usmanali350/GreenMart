import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { useDispatch } from 'react-redux';

const Meat = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true); // Fixed casing
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4096/api/Meat');
                setItem(response.data);
                setLoading(false);
            } catch (err) {
                setError('ERROR OCCUR IN FETCHING DATA');
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return (
            <div className='text-center'>
                <Spinner animation='border' role='status' variant='primary'>
                    <span className='visually-hidden'>Loading...</span>
                </Spinner>
            </div>
        );
    }

    if (error) {
        return <div className='alert alert-danger'>{error}</div>;
    }
   const dispatch=useDispatch();
    return (
        <div className='container'>
            <div className='row'>
                {item.map((item, index) => (
                    <div key={index} className='col-md-3 mb-4'>
                        <div className='card shadow'>
                            <img src={item.img} alt={item.name} className='card-img-top' />
                            <div className='card-body'>
                                <div className='card-title h4'>{item.name}</div>
                                <div className='card-text'><button className='btn p-0 ps-2 pe-2 btn-primary'>Price:</button> <button className='btn p-0 ps-2 pe-2 btn-primary'>RS: {item.price}</button></div>
                                <div className='card-text'>{item.description}</div>
                                <button  className='btn btn-warning shadow fw-bold' onClick={()=> dispatch(addToCart(item))}>Add to cart</button> 
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Meat;
