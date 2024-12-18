import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';
import Blog from './components/Blog';
import University from './components/University';
import Terms from './components/Terms';
import Experts from './components/Experts';
import MBBSConsultant from './components/MBBSConsultant';
// import PrivacyPolicy from './components/PrivacyPolicy';
import Disclaimer from './components/Disclaimer';
import Partner from './components/Partner';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<><Home /> <AboutUs /> <Gallery /> <Experts/><University /><MBBSConsultant/><Blog/><Partner/><Disclaimer /></>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/experts" element={<Experts/>} />
        <Route path="/partner" element={<Partner/>} />
        <Route path="/MBBSConsultant" element={<MBBSConsultant/>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/university" element={<University />} />
        <Route path="/terms" element={<Terms />} />
        {/* <Route path="/privacy-policy" element={<PrivacyPolicy />} /> */}
        <Route path="/disclaimer" element={<Disclaimer />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
