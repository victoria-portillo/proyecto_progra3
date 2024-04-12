import React from 'react';
import { Route, Routes } from "react-router-dom"; // Import Routes instead of Switch
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./screens/Home/Home";
import Peliculas from "./components/Peliculas/Peliculas";

function App() {
  return (
    <div>
      <Header />

      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<Home />} exact /> {/* Update the Route component to use element prop */}
        <Route path="/peliculas" element={<Peliculas />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
