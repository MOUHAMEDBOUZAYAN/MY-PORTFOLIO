import React, { useState, useEffect } from "react";
// components
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white overflow-hidden">
          <Header />
          <Home />
          <About />
          <Projects />
          <Portfolio />
          <Contact />
          <Footer />
          <Nav />
        </div>
      )}
    </>
  );
};

// Loading screen component
const Loader = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-4xl font-bold text-white"
        >
          <span className="text-blue-500">M</span>ouhamed
          <span className="text-blue-500">B</span>
        </motion.div>
        
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="h-1 bg-blue-500 rounded-full w-48 mx-auto"
        />
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-4 text-gray-400"
        >
          Full Stack Developer
        </motion.p>
      </div>
    </div>
  );
};

export default App;