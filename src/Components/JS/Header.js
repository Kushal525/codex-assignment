import React from 'react';
import  MyNavbar  from './Navbar' ;

import '../CSS/Header.css';

function MyHeader () {

  return (
      <div>
            <section className="header">
            <section className="header-top">
                <section className="header-top__logo">
                <img className="header-logo-image" src="atteca.png" alt="atteca-logo" />
                </section>
                <section className="header-top__navbar">
                <section className="header-top__navigation">
                    <MyNavbar />
                </section>
                <hr className="header-top__seperator" />
                </section>
            </section>

         </section>
    </div>
  )
}

export default MyHeader;