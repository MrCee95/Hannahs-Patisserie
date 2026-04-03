import { useState } from 'react';
import { useForm } from '../../hooks/useForm';

const Contact = () => {
  const { formData, handleChange, handleSubmit, isSubmitting, isSuccess, error } = useForm();

  return (
    <section id="contact" className="py-20 bg-white px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <div className="bg-cream p-8 rounded-2xl shadow-inner">
          <h3 className="font-heading text-3xl mb-6 text-rose-dark">Say Hello</h3>
          
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-check text-green-600 text-2xl"></i>
              </div>
              <h4 className="text-2xl font-bold text-charcoal mb-2">Message Sent!</h4>
              <p className="text-gray-600">We'll get back to you within 24 hours.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg border border-rose/30 focus:outline-none focus:ring-2 focus:ring-rose"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg border border-rose/30 focus:outline-none focus:ring-2 focus:ring-rose"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                  className="w-full p-3 rounded-lg border border-rose/30 focus:outline-none focus:ring-2 focus:ring-rose"
                  placeholder="How can we help?"
                />
              </div>

              {error && (
                <p className="text-red-600 text-sm">{error}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-rose-dark text-white font-bold py-3 rounded-lg hover:bg-rose transition shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i> Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          )}
        </div>

        {/* Map & Info */}
        <div className="space-y-8">
          <div className="h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.5!2d-0.41679!3d5.53449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDMyJzA0LjIiTiAwwrAyNScwMC40Ilc!5e0!3m2!1sen!2sgh!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Hannah's Patisserie location"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h4 className="font-heading text-xl text-rose-dark mb-2 underline decoration-rose/30">
                Location
              </h4>
              <p className="text-gray-600">
                Kasoa Second<br />
                Central Region, Ghana
              </p>
            </div>
            <div>
              <h4 className="font-heading text-xl text-rose-dark mb-2 underline decoration-rose/30">
                Hours
              </h4>
              <p className="text-gray-600">
                <strong>Mon-Sat:</strong> 7am - 6pm<br />
                <strong>Sun:</strong> 12pm - 7pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;