const Footer = () => {
  return (
    <footer className="bg-[#20336E] p-4 text-white text-center">
      <p>© 2024 Xpress Cleaning Services</p>
      <div className="flex justify-center space-x-4">
        <a href="mailto:xpresscleanempire@gmail.com" className="text-white">
          Request a Quote
        </a>
        <a
          href="https://www.instagram.com/xpressclean_empire?igsh=MTcyMndobzRsMGtpYQ=="
          className="text-white"
        >
          Follow us on Instagram
        </a>
        <a href="tel:+2349024127040" className="text-white">
          Speak to Us
        </a>
      </div>
    </footer>
  );
};

export default Footer;
