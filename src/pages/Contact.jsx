import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import PageWrapper from "../components/PageWrapper";
import Reveal from "../components/Reveal";

const WHATSAPP_URL = "https://wa.me/923125357945";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill name, email, and message.");
      return;
    }

    try {
      setLoading(true);
      setStatus("");

      await addDoc(collection(db, "contactMessages"), {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        message: formData.message,
        source: "PrimeCab Solutions Website",
        createdAt: serverTimestamp(),
      });

      setStatus("Message sent successfully.");

      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
      <section className="contact pageContact animatedContact">
        <Reveal>
          <span className="sectionLabel">Contact Us</span>

          <h2>Ready To Improve Your Taxi Operations?</h2>

          <p>
            Send us your details and our team will contact you to discuss taxi
            dispatch, customer support, live chat, and back-office requirements.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="contactWhatsapp"
          >
            <FaWhatsapp />
            Chat with us on WhatsApp
          </a>
        </Reveal>

        <Reveal delay={0.12}>
          <form className="contactForm animatedCard" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone / WhatsApp Number"
              value={formData.phone}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Tell us what support your taxi company needs"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            {status && <p className="formStatus">{status}</p>}

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </Reveal>
      </section>
    </PageWrapper>
  );
}

export default Contact;