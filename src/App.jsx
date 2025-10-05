import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Dishes from "./components/Dishes";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      {/* Nav Bar as Single Page Application */}
      <Navbar />
      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dishes" element={<Dishes />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      {/* Footer for all page */}
      <Footer />
    </div>
  )
}

export default App;