import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";
import { BRAND } from "../data/brand";
import Reveal from "./Reveal";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <Reveal>
        <div className="footerGrid">
          <div>
            <div className="footerBrand">
              <img src={BRAND.logo} alt={BRAND.name} className="footerLogoImg" />

              <div>
                <h3>{BRAND.name}</h3>
                <span>{BRAND.tagline}</span>
              </div>
            </div>

            <p>
              Professional 24/7 Taxi Dispatch, Customer Support, Live Chat, And
              Back-office Outsourcing For Taxi And Private Hire Companies.
            </p>
<div className="footerSocials">
  <motion.a whileHover={{ y: -5 }} href={BRAND.facebook} target="_blank" rel="noreferrer">
    <FaFacebookF />
  </motion.a>

  <motion.a whileHover={{ y: -5 }} href={BRAND.instagram} target="_blank" rel="noreferrer">
    <FaInstagram />
  </motion.a>

  <motion.a whileHover={{ y: -5 }} href={BRAND.linkedin} target="_blank" rel="noreferrer">
    <FaLinkedinIn />
  </motion.a>

  <motion.a whileHover={{ y: -5 }} href={BRAND.whatsapp} target="_blank" rel="noreferrer">
    <FaWhatsapp />
  </motion.a>
</div>
          </div>

          <div>
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/how-it-works">How It Works</Link>
            <Link to="/contact">Contact</Link>
          </div>

       <div className="footerContact">
  <h4>Contact</h4>

  <a href={BRAND.whatsapp} target="_blank" rel="noreferrer">
    WhatsApp: {BRAND.whatsappText}
  </a>


<div className="footerPhones">
  <a
    href="tel:+923125357945"
    className="footerPhoneItem"
  >
    <span className="countryFlag">🇵🇰</span>

    <div className="footerPhoneText">
      <span className="phoneCountry">
        Pakistan
      </span>

      <strong>
        +92 312 5357945
      </strong>
    </div>
  </a>

  <a
    href="tel:+44XXXXXXXXXX"
    className="footerPhoneItem"
  >
    <span className="countryFlag">🇬🇧</span>

    <div className="footerPhoneText">
      <span className="phoneCountry">
        United Kingdom
      </span>

      <strong>
        +44 XXXX XXXXXX
      </strong>
    </div>
  </a>
</div>




  <a href={`mailto:${BRAND.email}`}>
    Email: {BRAND.email}
  </a>

  <p>Serving Taxi Companies Across The UK</p>
</div>
        </div>

        <div className="footerBottom">
          © {new Date().getFullYear()} {BRAND.name}. All Rights Reserved.
        </div>
      </Reveal>
    </footer>
  );
}

export default Footer;