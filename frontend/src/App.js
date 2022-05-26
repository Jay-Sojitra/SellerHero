import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./index.css";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";


const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>




    </div>
  )
}

export default App
