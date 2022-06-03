import React from "react";
import './NavBar.css';

const NavBar = () => {

  const clickHandler = () => {
    localStorage.removeItem('user');
    window.location.href = '/login'
  }

  return (
    <div>
      <header className="header">
        <h1 className="logo"><a href="/"><b>Admin Panel</b></a></h1>
        <ul className="main-nav">
          <li><a href="/"><b>Home</b></a></li>
          <li><a href="/plans"><b>Plans</b></a></li>
          <li><a href="/addplan"><b>Add Plan</b></a></li>
          <li><a href="/faqs"><b>Add Faq</b></a></li>
          <li><a href="/login"><b>Login</b></a></li>
          <li><a href="/register"><b>Register</b></a></li>
          <li onClick={clickHandler}><a><b>Logout</b></a></li>
        </ul>
      </header>

    </div >

  )
}

export default NavBar;
