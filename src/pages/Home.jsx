import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=1920" 
            alt="Fresh artisan pastries" 
            className="w-full h-full object-cover brightness-[0.6]"
          />
        </div>
        <motion.div 
          initial="hidden" animate="visible" variants={fadeInUp} transition={{ duration: 0.6 }}
          className="relative z-10 text-white max-w-3xl pt-16"
        >
          <h1 className="font-heading text-5xl md:text-7xl mb-4">Sweet Treats, Serious Skills</h1>
          <p className="text-xl md:text-2xl mb-8 font-light">Artisan ice cream & pastries, crafted by the next generation.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/about" className="bg-white text-rose-dark hover:bg-cream px-8 py-4 rounded-full text-lg font-bold transition">Visit Our Café</Link>
            <Link to="/menu" className="bg-rose hover:bg-rose-dark text-white px-8 py-4 rounded-full text-lg font-bold transition">Order Take-out</Link>
          </div>
        </motion.div>
      </section>

      {/* Quick Menu Preview */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="font-heading text-4xl text-rose-dark mb-8 text-center">Today's Favorites</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {['Vanilla Bean Mille-Feuille', 'Wildberry Lavender Scoop', 'Apprentice Signature Pizza'].map((item, i) => (
            <div key={i} className="p-6 border border-rose/20 rounded-2xl bg-white hover:shadow-lg transition">
              <h4 className="font-bold text-lg mb-2">{item}</h4>
              <p className="text-gray-500 italic text-sm">Handcrafted daily by our apprentices</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link to="/menu" className="inline-block bg-rose-dark text-white px-8 py-3 rounded-full font-bold hover:bg-rose transition">View Full Menu</Link>
        </div>
      </section>

      {/* Mission Snippet */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl text-rose-dark mb-6">More Than Just Desserts</h2>
          <p className="text-lg leading-relaxed text-gray-600 mb-8">
            Hannah's Patisserie is a dedicated training kitchen where passion meets purpose. We empower the next generation with hands-on culinary experience, turning a love for baking into a professional career.
          </p>
          <Link to="/about" className="text-rose-dark font-bold border-b-2 border-rose hover:text-rose transition pb-1">Learn About Our Mission →</Link>
        </div>
      </section>
    </>
  );
}