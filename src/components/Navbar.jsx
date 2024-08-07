import logo from '../assets/logo.jpg';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div>
      <nav className="fixed bg-[#E7EFFA] p-4 flex flex-col sm:flex-row sm:justify-between items-center top-0 left-0 w-full z-50 shadow-md">
        <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-24  mx-8 sm:mt-12 lg:mt-0">
          <li>
            <Link to="home" smooth={true} duration={500}>
              <a
                href="#home"
                className="text-[#20336E] text-lg sm:text-xl hover:underline "
              >
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              <a className="text-[#20336E] text-lg sm:text-xl hover:underline ">
                About-us
              </a>
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={500}>
              <a
                href="#services"
                className="text-[#20336E] text-lg sm:text-xl hover:underline"
              >
                Services
              </a>
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              <a
                href="#contact"
                className="text-[#20336E] text-lg sm:text-xl hover:underline"
              >
                Contact
              </a>
            </Link>
          </li>
          <li>
            <Link to="testimony" smooth={true} duration={500}>
              <a
                href="#more"
                className="text-[#20336E] text-lg sm:text-xl hover:underline "
              >
                More
              </a>
            </Link>
          </li>
        </ul>
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 sm:mt-4">
          <img className="h-24 w-18" src={logo} alt="logo" />
        </div>
        <div className="flex flex-row sm:flex-row sm:space-x-4 mt-4 sm:mt-0">
          <button className="p-2 m-2 bg-white rounded shadow-md hover:bg-[#20336E] hover:text-white   transition-colors">
            <a href="tel:+2349024127040">Call us 📞</a>
          </button>
          <button className="p-2 m-2 bg-white rounded shadow-md  hover:bg-[#20336E] hover:text-white   transition-colors">
            <a href="mailto:xpresscleanempire@gmail.com">Email us 📧</a>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
