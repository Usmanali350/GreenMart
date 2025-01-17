import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { motion } from 'framer-motion';
import './Navbar1.css';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar1 = ({ cartCount }) => {
  const [SearchQuery, SetSearchQuery] = useState('');
  const [SearchInput, SetSearchInput] = useState(false);

  const handleSearch = async () => {
    if (!SearchQuery.trim()) {
      alert('Please enter a search term');
      return;
    }
    // Implement search logic here
  };

  return (
    <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} duration={{ duration: 0.5 }}>
      <nav className='navbar navbar-expand navbar1'>
        <div className='container-fluid'>
          <Link className='navbar-brand p-0'>
            <img src="public/logo2.webp" width={150} height={50} alt="" />
          </Link>
          <div className='navbar-items d-flex align-items-center ms-auto'>
            <motion.div className='search-icon-container me-lg-5 me-sm-5' whileHover={{ scale: 1.3 }} whileTap={{ scale: 1.9 }}>
              <FiSearch size={24} color='white' style={{ cursor: 'pointer' }} onClick={() => SetSearchInput(!SearchInput)} />
            </motion.div>
            {SearchInput && (
              <motion.div
                className='Search-container d-flex align-items-center me-3'
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                duration={{ duration: 0.3 }}
              >
                <input
                  type="text"
                  className='form-control search-input'
                  placeholder='Search...'
                  value={SearchQuery}
                  onChange={(e) => SetSearchQuery(e.target.value)}
                />
                <motion.button whileTap={{ scale: 1.9 }} whileHover={{ scale: 1.3 }} className='btn search-btn' onClick={handleSearch}>
                  <FiSearch size={20} color="white" />
                </motion.button>
              </motion.div>
            )}
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.9 }}
              className='nav-link text-danger position-relative ms-sm-3'
              href='#cart'
            >
              <FaShoppingCart size={24} />
              {cartCount > 0 && (
                <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info'>
                  {cartCount}
                </span>
              )}
            </motion.a>
          </div>
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar1;
