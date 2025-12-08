import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Clients from './pages/Clients';
import News from './pages/News';
import Jobs from './pages/Jobs';
import Contact from './pages/Contact';
import Values from './pages/Values';
import MarketSectors from './pages/MarketSectors';
import ProductBenefits from './pages/ProductBenefits';
import Sustainability from './pages/Sustainability';
import SocialResponsibility from './pages/SocialResponsibility';
import EnvironmentalCommitment from './pages/EnvironmentalCommitment';
import WhyWorkWithUs from './pages/WhyWorkWithUs';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled(motion.main)`
  flex: 1;
  /* No padding-top - let hero section extend to top */
`;

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppContainer>
          <Navbar />
          <MainContent
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product-benefits" element={<ProductBenefits />} />
              <Route path="/values" element={<Values />} />
              <Route path="/sectors" element={<MarketSectors />} />
              <Route path="/sustainability" element={<Sustainability />} />
              <Route path="/social-responsibility" element={<SocialResponsibility />} />
              <Route path="/environmental-commitment" element={<EnvironmentalCommitment />} />
              <Route path="/why-work-with-us" element={<WhyWorkWithUs />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/news" element={<News />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </MainContent>
          <Footer />
        </AppContainer>
      </Router>
    </LanguageProvider>
  );
}

export default App;
