import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { Navbar, Footer } from './components/Layout';

// Pages
import Home from './pages/Home';
import Overview from './pages/Overview';
import Initiatives from './pages/Initiatives';
import Wellness from './pages/Wellness';
import Showcase from './pages/Showcase';
import Brands from './pages/Brands';
import Resource from './pages/Resource';
import Conclusion from './pages/Conclusion';
import Bibliography from './pages/Bibliography';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <div key={location.pathname}>
        {children}
      </div>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <PageWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/initiatives" element={<Initiatives />} />
              <Route path="/wellness" element={<Wellness />} />
              <Route path="/showcase" element={<Showcase />} />
              <Route path="/brands" element={<Brands />} />
              <Route path="/resource" element={<Resource />} />
              <Route path="/conclusion" element={<Conclusion />} />
              <Route path="/bibliography" element={<Bibliography />} />
            </Routes>
          </PageWrapper>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
