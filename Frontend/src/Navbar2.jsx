import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaHome,
  FaBreadSlice,
  FaCheese,
  FaAppleAlt,
  FaSeedling,
  FaCarrot,
  FaDrumstickBite,
  FaBoxOpen,
  FaCoffee,
  FaTh,
  FaUser,
  FaTruck,
  FaTimes
} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar2.css';

const Navbar2 = () => {
  const [showCategories, setShowCategories] = useState(false);

  const handleCategoryToggle = () => {
    setShowCategories(!showCategories);
  };

  const handleCloseCategories = () => {
    setShowCategories(false);
  };

  return (
    <div>
     
      <nav className="navbar navbar-expand-lg navbar-light bg-light mt-5">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-3 bordered">
              <li className="nav-item ms-2 d-none d-lg-block">
                <Link className="nav-link lbg ms-4 ps-4 fw-bold text-center gap-2 w-100" to="/home">
                  <FaHome className="me-2" /> Home
                </Link>
              </li>
              <li className="nav-item ms-2 d-none d-lg-block">
                <Link className="nav-link lbg ms-4 ps-4 fw-bold text-center gap-2 w-100" to="/bakery">
                  <FaBreadSlice className="me-2" /> Bakery
                </Link>
              </li>
              <li className="nav-item ms-2 d-none d-lg-block">
                <Link className="nav-link lbg ms-4 ps-4 fw-bold text-center gap-2 w-100" to="/dairy">
                  <FaCheese className="me-2" /> Dairy
                </Link>
              </li>
              <li className="nav-item ms-2 d-none d-lg-block">
                <Link className="nav-link lbg ms-4 ps-4 fw-bold text-center gap-2 w-100" to="/fruit">
                  <FaAppleAlt className="me-2" /> Fruit
                </Link>
              </li>
              <li className="nav-item ms-2 d-none d-lg-block">
                <Link className="nav-link lbg ms-4 ps-4 fw-bold text-center gap-2 w-100" to="/dryfruit">
                  <FaSeedling className="me-2" /> DryFruit
                </Link>
              </li>
              <li className="nav-item ms-2 d-none d-lg-block">
                <Link className="nav-link lbg ms-4 ps-4 fw-bold text-center gap-2 w-100" to="/vegetables">
                  <FaCarrot className="me-2" /> Vegetables
                </Link>
              </li>
              <li className="nav-item ms-2 d-none d-lg-block">
                <Link className="nav-link lbg ms-4 ps-4 fw-bold text-center gap-2 w-100" to="/meat">
                  <FaDrumstickBite className="me-2" /> Meat
                </Link>
              </li>
              <li className="nav-item ms-2 d-none d-lg-block">
                <Link className="nav-link lbg ms-4 ps-4 fw-bold text-center gap-2 w-100" to="/bundle">
                  <FaBoxOpen className="me-2" /> Bundle
                </Link>
              </li>
              <li className="nav-item ms-2 d-none d-lg-block">
                <Link className="nav-link lbg ms-4 ps-4 fw-bold text-center gap-2 w-100" to="/teacoffee">
                  <FaCoffee className="me-2" /> Tea & Coffee
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      
      <nav className="navbar  d-lg-none ms-1 me-1" style={{backgroundColor:'#afa7a7',borderRadius:'16px'}}>
        <div className="container-fluid d-flex justify-content-around align-items-center">
          {/* Horizontal Links */}
          <Link className="nav-link text-center" to="/home">
            <FaHome size={24} />
            <div>Home</div>
          </Link>
          <div className="nav-link text-center" onClick={handleCategoryToggle}>
            <FaTh size={24} />
            <div>Categories</div>
          </div>
          <Link className="nav-link text-center" to="/account">
            <FaUser size={24} />
            <div>Account</div>
          </Link>
          <Link className="nav-link text-center" to="/delivery">
            <FaTruck size={24} />
            <div>Delivery</div>
          </Link>
        </div>

        {/* Dropdown for Categories */}
        {showCategories && (
          <div className="dropdown-menu d-block position-relative">
            <button
              className="btn btn-danger btn-sm position-absolute top-0 end-0 m-2"
              onClick={handleCloseCategories}
            >
              <FaTimes />
            </button>
            <Link className="dropdown-item" to="/bakery">
              <FaBreadSlice className="me-2" /> Bakery
            </Link>
            <Link className="dropdown-item" to="/dairy">
              <FaCheese className="me-2" /> Dairy
            </Link>
            <Link className="dropdown-item" to="/fruit">
              <FaAppleAlt className="me-2" /> Fruit
            </Link>
            <Link className="dropdown-item" to="/dryfruit">
              <FaSeedling className="me-2" /> DryFruit
            </Link>
            <Link className="dropdown-item" to="/vegetables">
              <FaCarrot className="me-2" /> Vegetables
            </Link>
            <Link className="dropdown-item" to="/meat">
              <FaDrumstickBite className="me-2" /> Meat
            </Link>
            <Link className="dropdown-item" to="/bundle">
              <FaBoxOpen className="me-2" /> Bundle
            </Link>
            <Link className="dropdown-item" to="/teacoffee">
              <FaCoffee className="me-2" /> Tea & Coffee
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar2;
