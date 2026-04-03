import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center text-center px-6 pt-16 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=1920"
          alt="Freshly baked artisan pastries"
          className="w-full h-full object-cover brightness-[0.6]"
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 text-white max-w-3xl"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-5xl md:text-7xl mb-4"
        >
          Sweet Treats, Serious Skills
        </motion.h1>
        
        <p className="text-xl md:text-2xl mb-8 font-light">
          Artisan ice cream & pastries, crafted by the next generation.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/about#visit"
            className="bg-white text-rose-dark hover:bg-cream px-8 py-4 rounded-full text-lg font-bold transition transform hover:scale-105"
          >
            <i className="fas fa-store mr-2"></i> Visit Our Café
          </Link>
          <Link
            to="/menu"
            className="bg-rose hover:bg-rose-dark text-white px-8 py-4 rounded-full text-lg font-bold transition transform hover:scale-105"
          >
            <i className="fas fa-shopping-bag mr-2"></i> Order Take-out
          </Link>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;