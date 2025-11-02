import { useState } from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import RouteMap from '@/components/RouteMap';
import FAQ from '@/components/FAQ';
import Contacts from '@/components/Contacts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-background">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="services" className="py-20 bg-muted/30">
          <Services />
        </section>
        
        <section id="about" className="py-20">
          <About />
        </section>
        
        <section id="portfolio" className="py-20 bg-muted/30">
          <Portfolio />
        </section>
        
        <section id="testimonials" className="py-20">
          <Testimonials />
        </section>
        
        <section id="map" className="py-20 bg-muted/30">
          <RouteMap />
        </section>
        
        <section id="faq" className="py-20">
          <FAQ />
        </section>
        
        <section id="contacts" className="py-20 bg-muted/30">
          <Contacts />
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;