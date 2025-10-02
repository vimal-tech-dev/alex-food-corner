import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Dishes from "./components/Dishes";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dishes" element={<Dishes />} />
      </Routes>

    </div>
  )
}

export default App;