import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner'; 

const Fruit = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4096/api/Fruit');
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

    return (
        <div className='container'>
            <div className='row'>
                {item.map((item, index) => (
                    <div key={index} className='col-md-3 mb-4'>
                        <div className='card'>
                            <img src={item.img} alt={item.name} className='card-img-top' />
                            <div className='card-body'>
                                <div className='card-title h5'>{item.name}</div>
                                <div className='card-text'>{item.description}</div>
                                <div className='card-text'><strong>Price:</strong> ${item.price}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Fruit;
