import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import PageWrapper from "../components/PageWrapper";
import Reveal from "../components/Reveal";

const WHATSAPP_URL = "https://wa.me/923125357945";

const values = [
  {
    title: "Built For UK Taxi Operators",
    image: "/images/about-block-1.webp",
  },
  {
    title: "24/7 Dispatch Coverage",
    image: "/images/about-block-2.webp",
  },
  {
    title: "Lower Operational Cost",
    image: "/images/about-block-3.webp",
  },
  {
    title: "Professional Customer Handling",
    image: "/images/about-block-4.webp",
  },
];

function About() {
  return (
    <PageWrapper>
      <section className="animatedPageHero aboutPageHero">
        <Reveal>
          <span className="sectionLabel">About PrimeCab Solutions</span>
          <h1>Reliable Taxi Dispatch Support Built For Growing Cab Companies.</h1>
          <p>
            PrimeCab Solutions helps taxi and private hire companies streamline
            operations through dispatch support, customer care, live chat, email
            handling, and back-office assistance.
          </p>

          <div className="heroActions">
            <Link to="/contact" className="primaryBtn">
              Book a Free Consultation
            </Link>

            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="whatsappBtn">
              <FaWhatsapp />
              WhatsApp Us
            </a>
          </div>
        </Reveal>
      </section>

   <section className="aboutStory aboutStoryWithImage">
  <Reveal className="aboutStoryImage">
    <img src="/images/whoweare.webp" alt="PrimeCab support team" />
  </Reveal>

  <div>
    <Reveal>
      <span className="sectionLabel">Who We Are</span>
      <h2>A Dedicated Outsourcing Partner For Taxi Businesses.</h2>
    </Reveal>

    <Reveal delay={0.1} className="storyText">
      <p>
        Taxi businesses handle constant pressure: missed calls, booking
        changes, driver coordination, customer complaints, and late-night
        demand. PrimeCab Solutions gives your company a trained support team
        that helps manage daily operations professionally.
      </p>

      <p>
        Our goal is to help your company answer faster, dispatch smarter,
        communicate better, and operate with more confidence.
      </p>
    </Reveal>
  </div>
</section>

    <section className="valueGridSection">
  {values.map((item, index) => (
    <Reveal delay={index * 0.08} key={item.title}>
      <div className="valueCard animatedCard aboutValueCard">
        <div
          className="aboutValueImage"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(6,24,38,0.04), rgba(6,24,38,0.55)), url(${item.image})`,
          }}
        >
          <div className="valueNumber">{`0${index + 1}`}</div>
        </div>

        <div className="aboutValueBody">
          <h3>{item.title}</h3>
          <p>
            We focus on speed, reliability, accuracy, and professional
            communication so your customers receive a better experience.
          </p>
        </div>
      </div>
    </Reveal>
  ))}
</section>



    </PageWrapper>
  );
}

export default About;
