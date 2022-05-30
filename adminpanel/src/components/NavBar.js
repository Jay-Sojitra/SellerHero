import React from "react";
import './NavBar.css';

const NavBar = () => {

  return (
    <div>
      <header className="header">
        <h1 className="logo"><a href="/">Admin Panel</a></h1>
        <ul className="main-nav">
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/plans">Plans</a></li>
          <li><a href="/faqs">Faqs</a></li>
        </ul>
      </header>

    </div >

  )
}

export default NavBar;
