import React from "react";

const NavBar = () => {

  return (
    <div>
      <header className="header">
        <h1 className="logo"><a href="/">SellerHero</a></h1>
        <ul className="main-nav">
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
        </ul>
      </header>

    </div >

  )
}

export default NavBar;
