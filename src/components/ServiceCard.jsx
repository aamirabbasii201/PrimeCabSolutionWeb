import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

function ServiceCard({ title, text, index, image }) {
  return (
    <motion.div
      className="serviceCard imageServiceCard"
      whileHover={{ y: -10, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
    >
      <div className="serviceImage">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
        />

        <div className="serviceImageOverlay"></div>

        <motion.div className="icon" whileHover={{ scale: 1.12, rotate: 6 }}>
          {index + 1}
        </motion.div>
      </div>

      <div className="serviceBody">
        <h3>{title}</h3>
        <p>{text}</p>

        <motion.button
          className="cardArrow"
          whileHover={{ x: 6, scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaArrowRight />
        </motion.button>
      </div>
    </motion.div>
  );
}

export default ServiceCard;