import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Retrait de Switch
import Home from "./pages/Home";
import About from "./pages/About";
import Profil from "./pages/Profil";


function App() {
    return (

        <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/profil" element={<Profil />} />
                </Routes>
        </Router>
    );
};
export default App;