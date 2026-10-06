import { FaWhatsapp } from "react-icons/fa";
import { useLocation } from "react-router-dom";

function WhatsAppWidget() {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <div className={`whatsappWidget ${isHome ? "homeWhatsapp" : ""}`}>
      <div className="whatsappMessage">
        <strong>Need help?</strong>
        <span>Chat with our team</span>
      </div>

      <a
        href="https://wa.me/923125357945"
        target="_blank"
        rel="noreferrer"
        className="floatingWhatsapp"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}

export default WhatsAppWidget;