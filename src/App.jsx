import React from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Home from './Pages/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import BlogDetails from './Components/BlogDetails.jsx/BlogDetails';
import AboutPage from './Pages/About';
import ContactPage from './Pages/Contact';
import ScrollToTop from './Components/ScrollTop';
import BlogPage from './Pages/Blog';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      {   /* <Footer /> */}
      <Footer />
    </Router>
  );
}

export default App;
