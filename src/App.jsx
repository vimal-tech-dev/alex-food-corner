import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/home";

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div id="home">
          <Home />
        </div>
      </main>
    </div>
  )
}

export default App;