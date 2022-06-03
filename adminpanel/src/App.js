import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./index.css";
import Home from "./components/Home";
import AddPlan from "./components/AddPlan";
import AddFaq from "./components/AddFaqs";
import 'antd/dist/antd.css';
import Login from "./components/Login";
import Register from "./components/Register";
import Protect from "./components/Protect";
import EditPlan from "./components/EditPlan";
import Plans from "./components/Plans";




const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" exact element={<Protect> <Home /></Protect>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addplan" element={<Protect><AddPlan /></Protect>} />
          <Route path="/editplan/:planid" element={<Protect><EditPlan /></Protect>} />
          <Route path="/plans" element={<Protect><Plans /></Protect>} />
          <Route path="/faqs" element={<Protect><AddFaq /></Protect>} />
        </Routes>
      </Router>




    </div>
  )
}

export default App
