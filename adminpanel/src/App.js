import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./index.css";
import Home from "./components/Home";
import AddPlan from "./components/AddPlan";
import AddFaq from "./components/AddFaqs";
import 'antd/dist/antd.css';




const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plans" element={<AddPlan/>} />
          <Route path="/faqs" element={<AddFaq/>} />
        </Routes>
      </Router>




    </div>
  )
}

export default App
