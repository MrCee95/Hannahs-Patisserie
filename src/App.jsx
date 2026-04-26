import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { initGA, usePageViews } from './hooks/useAnalytics';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import ThankYou from './pages/ThankYou';

// Helper component to handle GitHub Pages redirect
function GitHubPagesRedirect() {
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    // Check for path query parameter from 404.html redirect
    const params = new URLSearchParams(location.search);
    const redirectedPath = params.get('path');
    
    if (redirectedPath) {
      // Clean up the URL and navigate to the correct route
      const cleanPath = redirectedPath.split('?')[0].split('#')[0];
      const hash = redirectedPath.includes('#') ? '#' + redirectedPath.split('#')[1] : '';
      
      // Remove the query param and navigate
      navigate(cleanPath + hash, { replace: true, state: { fromRedirect: true } });
    }
  }, [navigate, location.search, location.pathname]);
  
  return null;
}

function App() {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <BrowserRouter basename="/hannahs-patisserie">
      <GitHubPagesRedirect />
      <AnalyticsTracker />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="*" element={
            <div className="min-h-[60vh] flex items-center justify-center">
              <div className="text-center">
                <h2 className="font-heading text-4xl text-rose-dark mb-4">404</h2>
                <p className="text-gray-600 mb-6">Page not found</p>
                <a href="/" className="text-rose hover:underline">Return Home</a>
              </div>
            </div>
          } />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

function AnalyticsTracker() {
  usePageViews();
  return null;
}

export default App;