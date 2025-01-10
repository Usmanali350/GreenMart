import React from 'react'
import { Link } from 'react-router-dom'
const Navbar1 = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <Link className="navbar-brand p-0 h1" > GreenMart</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav ms-auto">
      <li className="nav-item">
            <Link to='/' className="nav-link">
            logo
            </Link>
        </li>
        <li className="nav-item">
            <Link to='/' className="nav-link">
            logo
            </Link>
            </li>
            <li className="nav-item">
            <Link to='/' className="nav-link">
            logo
            </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar1
