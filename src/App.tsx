import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import AboutMe from "./routes/AboutMe";
import Navbar from "./components/Navbar";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-me" element={<AboutMe />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;