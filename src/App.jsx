import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Dishes from "./components/Dishes";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";

const App = () => {
  return (
    <div>
      <Navbar />

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dishes" element={<Dishes />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>

    </div>
  )
}

export default App;