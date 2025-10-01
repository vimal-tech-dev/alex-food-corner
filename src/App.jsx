import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Dishes from "./components/Dishes";
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* Define Routes */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/dishes" element={<Dishes />} />
      </Routes>

    </div>
  )
}

export default App;