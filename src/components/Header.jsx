import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
  FaBars,
  FaTimes,

} from "react-icons/fa";
import { BRAND } from "../data/brand";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };


  const [servicesOpen, setServicesOpen] = useState(false);


  return (
    <motion.header
      className="navbar"
      initial={{ opacity: 0, y: -35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <NavLink to="/" className="brand" onClick={closeMenu}>
        <motion.div
          className="brandLogoBox"
          whileHover={{ scale: 1.05, rotate: -1 }}
          transition={{ type: "spring", stiffness: 260, damping: 15 }}
        >
          <img src={BRAND.logo} alt={BRAND.name} className="brandLogoImg" />
        </motion.div>

        <div className="brandText">
          <h2>{BRAND.name}</h2>
          <span>{BRAND.tagline}</span>
        </div>
      </NavLink>

      <nav className="navLinks desktopNav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>


        
        <NavLink to="/how-it-works">How It Works</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <div className="navRight desktopNav">
        
        <motion.a
          whileHover={{ y: -4 }}
          href={BRAND.facebook}
          target="_blank"
          rel="noreferrer"
          className="socialIcon"
        >
          <FaFacebookF />
        </motion.a>

        <motion.a
          whileHover={{ y: -4 }}
          href={BRAND.instagram}
          target="_blank"
          rel="noreferrer"
          className="socialIcon"
        >
          <FaInstagram />
        </motion.a>


<motion.a
  whileHover={{ y: -4 }}
  href={BRAND.linkedin}
  target="_blank"
  rel="noreferrer"
  className="socialIcon"
>
  <FaLinkedinIn />
</motion.a>

        <motion.a
          whileHover={{ y: -4 }}
          href={BRAND.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="socialIcon whatsappIcon"
        >
          <FaWhatsapp />
        </motion.a>

        <NavLink to="/contact" className="navBtn">
          Get Started
        </NavLink>
      </div>

      <button
        className="mobileMenuBtn"
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Open menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobileMenu"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.28 }}
          >
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>

            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>

            <NavLink to="/services" onClick={closeMenu}>
              Services
            </NavLink>

            <NavLink to="/how-it-works" onClick={closeMenu}>
              How It Works
            </NavLink>

            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>

            <div className="mobileSocials">
              <a href={BRAND.facebook} target="_blank" rel="noreferrer">
                <FaFacebookF />
              </a>

              <a href={BRAND.instagram} target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>


              <a href={BRAND.linkedin} target="_blank" rel="noreferrer">
  <FaLinkedinIn />
</a>

              <a href={BRAND.whatsapp} target="_blank" rel="noreferrer">
                <FaWhatsapp />
              </a>
            </div>

            <NavLink to="/contact" onClick={closeMenu} className="mobileMenuCta">
              Get Started
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;