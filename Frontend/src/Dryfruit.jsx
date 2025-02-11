import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';

 const Dryfruit = () => {
  const [item, setItem] = useState([])
  const [Loading, SetLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect ( () => {
    const Fetchdata = async () => {
      try {
     const response=await axios.get(`http://localhost:4096/api/DryFruit`)
     setItem(response.data)
     SetLoading(false)
      } catch (error) {
        setError('ERROR OCCUR IN FETCHING DATA')
        SetLoading(false)
      }
    }
    Fetchdata();
  },[])
  if(Loading){
    return (
      <div className='text-center'>
        <Spinner animation='border' role='status' variant='primary'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      </div>
    )
  }
  if(error){
    return <div className='alert alert-danger'>{error}</div>
  }
  return (
    <div className='container'>
    <div className="row">
      {
        item.map((item,index)=>{
          return(
          <div key={index} className="col-md-4 mb-4 mt-3" >
            <div className="card">
              <img src={item.img} alt={item.name} className='card-img-top' />
              <div className="card-body">
                <div className="card-title h4">{item.name}</div>
                <div className="card-text"><strong>Price</strong> ${item.price}</div>
                <div className="card-text">{item.description}</div>
              </div>
            </div>
          </div>
          )
        } )
      }
    </div>
    </div>
  )
}

export default Dryfruit
