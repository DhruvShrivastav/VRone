import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import Portfolio from "./components/Portfolio";
import Achivement from "./components/Achivement";
import Home from "./components/Home";

function App(){
  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route path= "/" element={<Home />} />
        <Route path= "/aboutus" element={<Aboutus />} />
        <Route path= "/contactus" element={<Contactus />} />
        <Route path= "/portfolio" element={<Portfolio />} />
        <Route path= "/achivement" element={<Achivement />} />
      </Routes>
    </Router>
  )
}

export default App;