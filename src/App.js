import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import BenefitsSection from './components/BenefitsSection';
import FAQSection from './components/FAQSection';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HeroSection2 from './components/HeroSection2';
import PricingSection from './components/PricingSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';

import faqsGenerales from './components/FaqPage';
import faqsEquipo from './components/TeamFaqPage';
import CorreoSection from './components/CorreoSection';
import FooterLinks from './components/FooterLinks';
import SocialSection from './components/SocialSection';
import CopyrightSection from './components/CopyrightSection';
import FreeTrialView from './components/FreeTrialView';
import ReunionSection from './components/ReunionSection';
import MeetSection from './components/MeetSection';
import MeetingScheduled from './components/MeetingScheduled';
import BillingDetails from './components/BillingDetails';
import PaymentMethod from './components/PaymentMethod';




function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
      <HeroSection/>
      <HeroSection2/>
      <BenefitsSection/>
      <ServicesSection/>
      <PricingSection/>
      <TestimonialsSection/>
      {/* FAQ Generales */}
      <FAQSection title="General" faqs={faqsGenerales} />
      {/* FAQ Nuestro Equipo */}
      <FAQSection title="Nuestro equipo" faqs={faqsEquipo} />
      <CorreoSection/>
      <FooterLinks/>
      <SocialSection/>
      <CopyrightSection/>
      <ReunionSection/>
      <MeetSection/>
      <MeetingScheduled/>
      <BillingDetails/>
      <PaymentMethod/>
      
    </>
    } />
         <Route path="/free-trial" element={<FreeTrialView />} />
      </Routes>
    </Router>
  );
}

export default App;
