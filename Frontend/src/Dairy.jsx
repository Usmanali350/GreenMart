import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

const Dairy = () => {
    const [item, setItem] = useState([]);
    const [loader, setLoader] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4096/api/Dairy');
                setItem(response.data);
                setLoader(false);
            } catch (err) {
                setError('Failed to fetch data');
                setLoader(false);
            }
        };

        fetchData();
    }, []);

    if (loader) {
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

    return (
        <div className="container">
            <div className="row">
                {item.map((item, index) => (
                    <div key={index} className="col-md-3 mb-4">
                        <div className="card">
                            <img src={item.img} alt={item.name} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.description}</p>
                                <p className="card-text"><strong>Price:</strong> ${item.price}</p>
                                <a href="#" className="btn btn-primary">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dairy;
