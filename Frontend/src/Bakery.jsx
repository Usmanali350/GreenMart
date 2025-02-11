import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';

const Bakery = () => {
  const [item,Setitem]=useState([]);
  const [Loading,SetLoading]=useState(true);
  const [Error,SetError]=useState(null)
  useEffect (()=>{
   const Fetchdata=async()=>{
    try{

      const response=await axios.get(`http://localhost:4096/api/Bakery`)
      Setitem(response.data)
      SetLoading(false)
    }catch(error){
     SetError('ERROR OCCUR IN FETCHING DATA');
     SetLoading(false)
    }}
   Fetchdata();
  },[])
  if(Loading){
    return (
      <div className='text-center mt-5 mb-5'>
       <Spinner  animation='border' role='status' variant='primary'>
        <span className='visiually-hidden'>Loading...</span>
       </Spinner>
      </div>
    )}
    if(Error){
      return <div className='alert alert-danger'>{Error}</div>
    }
  return (
    <div className='container'>
      <div className="row">
        {
          item.map((item,index)=>{
            return(
              <div key={index} className='col-md-4 mt-4 mb-5'>
         <div className="card">
          <img src={item.img} alt={item.name} />
          <div className="card-body">
               <div className="card-title h4">{item.name}</div>
               <div className="card-text"><strong>Price</strong> ${item.price}</div>
               <div className="card-text">{item.description}</div>
          </div>
         </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Bakery
