import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar2 from './Navbar2';

import Navbar1 from './Navbar1';
import Herosection from './Hero';
import Bakery from './Bakery';

const Home = () => <div>Home Page</div>;
const About = () => <div>About Page</div>;
const Services = () => <div>Services Page</div>;
const Categories = () => <div>Categories Page</div>;
const Shop = () => <div>Shop Page</div>;
const Account = () => <div>Account Page</div>;
const Delivery = () => <div>Delivery Page</div>;
const Contact = () => <div>Contact Page</div>;

function App() {
  const [cart, setCart] = useState([]);

  // Add to Cart handler
  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    alert(`${item.name} added to the cart!`);
  };

  return (
    <BrowserRouter>
      {/* Pass cart count to Navbar1 */}
      <Navbar1 cartCount={cart.length} />
      <Herosection />
      <Navbar2 />

      {/* Routes */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route 
          path="/Bakery" 
          element={<Bakery onAddToCart={handleAddToCart} />} 
        />
        <Route path="/services" element={<Services />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/account" element={<Account />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
