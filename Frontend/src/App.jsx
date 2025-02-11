import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar2 from './Navbar2';
import Navbar1 from './Navbar1';
import Herosection from './Hero';
import Bakery from './Bakery';
import Dairy from './Dairy';
import Fruit from './Fruit';
import Meat from './Meat';
import Dryfruit from './Dryfruit';
import Vegitable from './Vegitable';
import Bundle from './Bundle';
import Teacofee from './Teacofee';


const Home = () => <div>Home Page</div>;
const Services = () => <div>Services Page</div>;
const Categories = () => <div>Categories Page</div>;
const Shop = () => <div>Shop Page</div>;
const Account = () => <div>Account Page</div>;
const Delivery = () => <div>Delivery Page</div>;
const Contact = () => <div>Contact Page</div>;
function App() {
  const [cart, setCart] = useState([]);
  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    alert(`${item.name} added to the cart!`);
  };
  return (
    <BrowserRouter>
      <Navbar1 cartCount={cart.length} />
      <Herosection />
      <Navbar2 />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route   path="/Bakery"  element={<Bakery  />}  />
        <Route   path="/Dairy"  element={<Dairy />}  />
        <Route   path="/Fruit"  element={<Fruit />}  />
        <Route   path="/DryFruit"  element={<Dryfruit />}  />
        <Route   path="/Vegitable"  element={<Vegitable />}  />
        <Route path='bundle' element={<Bundle/>}/>
        <Route   path="/Meat"  element={<Meat />}  />
        <Route   path="/teacoffee"  element={<Teacofee />}  />

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
