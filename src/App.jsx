import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrollTop";
import PageNotFound from "./Components/Pagenotfound/PageNotFound";
import BlogDetails from "./Components/BlogDetails.jsx/BlogDetails";
import Loader from "./Components/Loader/Loader";

// Lazy imports
const Home = lazy(() => import("./Pages/Home"));
const BlogPage = lazy(() => import("./Pages/Blog"));
const AboutPage = lazy(() => import("./Pages/About"));
const ContactPage = lazy(() => import("./Pages/Contact"));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>

      <Footer />
    </Router>
  );
}

export default App;
