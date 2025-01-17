import React from 'react';
import './Navbar1.css';
const Hero = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar1 mt-0">
        <div className="container-fluid">
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ms-auto"></ul>
          </div>
        </div>
      </nav>

      
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="2"
          ></button>
        </div>

        
        <div className="carousel-inner">
          <div className="carousel-item active">
          <img src="/bg-1.webp" alt="Los Angeles" className="d-block w-100 carousel-img" />
                    </div>
          <div className="carousel-item">
          <img src="/bg-2.webp" alt="Chicago" className="d-block w-100 carousel-img" />          </div>
          {/* <div className="carousel-item">
          <img src="/bg-5.jpg" alt="New York" className="d-block w-100 carousel-img" />       
             </div> */}
        </div>

        {/* Left and Right Controls/Icons */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
