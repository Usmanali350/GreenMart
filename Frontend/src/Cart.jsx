import React, { useState } from 'react'

const Cart = () => {
    const [CartItem,SetCartItem]=useState([]);
    const [NewItem,SetNewItem]=useState({productId:'',name:'',img:'',price:'0',quantity:'1'})
    const userId='123';
    const FetchCartItem=async()=>{
    try{
     const response=await axios.get(`http://localhost:4096/Cart/:userId/${userId}`)
    }catch(error){
        console.log('error fetching cart', error.response?.data?.message || error.message)
    }
    }
  return (
    <div>
      
    </div>
  )
}

export default Cart
