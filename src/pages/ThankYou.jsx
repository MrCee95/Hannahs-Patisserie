import { Link } from 'react-router-dom';

export default function ThankYou() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <i className="fas fa-check text-green-600 text-3xl"></i>
        </div>
        <h2 className="font-heading text-3xl text-rose-dark mb-4">Message Sent!</h2>
        <p className="text-gray-600 mb-8">Thank you for reaching out to Hannah's Patisserie. We'll reply within 24 hours.</p>
        <Link to="/" className="bg-rose-dark text-white px-8 py-3 rounded-full font-bold hover:bg-rose transition inline-block">Back to Home</Link>
      </div>
    </div>
  );
}