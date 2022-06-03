import React from "react";

const NavBar = () => {

  return (
    <div>
      <header className="header">
        <h1 className="logo"><a href="/"><b>SellerHero</b></a></h1>
        <ul className="main-nav">
          <li><a href="/"><b>Home</b></a></li>
          <li><a href="/"><b>About</b></a></li>
          <li><a href="/login"><b>Login</b></a></li>
          <li><a href="/register"><b>Register</b></a></li>
        </ul>
      </header>

    </div >

  )
}

export default NavBar;
