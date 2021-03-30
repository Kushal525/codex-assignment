import React from 'react';
import '../CSS/Navbar.css'

function MyNavbar () {

  return (
    <section className="navbar">
      <a href="/" className="navbar-item">Home</a>
      <a href="/about" className="navbar-item">About Us</a>
      <a href="/services" className="navbar-item">Services</a>
      <a href="/Industry" className="navbar-item">Industry</a>
      <a href="/Technology" className="navbar-item">Technology</a>
      <a href="/Careeers" className="navbar-item">Careers</a>
      <a href="/Contact" className="navbar-item">Contact</a>
  </section>
  )

}

export default MyNavbar;