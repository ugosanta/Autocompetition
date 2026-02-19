import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Retrait de Switch
import ThemeToggle from "./components/Themeswitch";
import Home from "./pages/Home";
import About from "./pages/About";
import Profil from "./pages/Profil";


function App() {
    return (
        <Router>
            <div className="min-h-screen bg-white dark:bg-slate-900 text-black dark:text-white transition-colors duration-300"></div>
                <ThemeToggle />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/profil" element={<Profil />} />
                </Routes>
        <div />
    </Router>
    );
};  

export default App;