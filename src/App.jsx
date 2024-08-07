import { AboutSection } from './components/AboutSection';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <>
      <Navbar />
      <Hero id="home" />
      <AboutSection id="about" />
      <Services id="services" />
      <ContactUs id="contact" />
      <Testimonials id="testimony" />
      <Footer />
    </>
  );
}

export default App;
