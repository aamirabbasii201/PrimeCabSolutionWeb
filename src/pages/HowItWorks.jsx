import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaCheckCircle,
  FaComments,
  FaClock,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";

import Reveal from "../components/Reveal";

const WHATSAPP_URL = "https://wa.me/923125357945";

const steps = [
  {
    number: "01",
    title: "Contact Our Team",
    text: "Get in touch through our contact form or WhatsApp. We arrange a call to understand how your taxi or private hire business currently runs.",
    points: [
      "Short discovery call with our team",
      "Review of your booking and dispatch process",
      "Identify where extra support will help most",
    ],
  },
  {
    number: "02",
    title: "Choose Your Support Plan",
    text: "Based on your needs, we recommend the right level of cover and the services that suit your operation.",
    points: [
      "Hours of cover and booking volumes agreed",
      "Services selected: dispatch, chat, email and more",
      "A clear quote tailored to your business",
    ],
  },
  {
    number: "03",
    title: "Onboard Your Taxi Business",
    text: "We prepare our team to work as an extension of yours, with the right access, processes and guidelines in place.",
    points: [
      "Secure access to your systems, as agreed",
      "Briefing on your policies, tone and escalation routes",
      "Preparation and checks before going live",
    ],
  },
  {
    number: "04",
    title: "Start 24/7 Operations",
    text: "Our team goes live and handles day-to-day support, with regular reviews so the service keeps improving.",
    points: [
      "Round-the-clock cover for bookings and customers",
      "Regular check-ins to review how things are going",
      "Support adjusted as your business grows",
    ],
  },
];

const needs = [
  "Access to your dispatch or booking software",
  "Your service area, pricing and booking policies",
  "Contacts for urgent issues and escalations",
  "Your preferred tone for customer communication",
];

const promises = [
  "A named point of contact for your account",
  "Processes agreed with you before go-live",
  "Regular reviews of how the service is performing",
];

const expectCards = [
  {
    icon: <FaComments />,
    title: "Clear Communication",
    text: "You always know what is happening and who to speak to, with updates shared in the way that suits you.",
  },
  {
    icon: <FaClock />,
    title: "Consistent Cover",
    text: "Reliable support day and night, including weekends and bank holidays, so customers are never left waiting.",
  },
  {
    icon: <FaChartLine />,
    title: "Flexible Scaling",
    text: "Increase or reduce support as your fleet, seasons and booking volumes change.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Confidential Handling",
    text: "Customer and driver information is used only for the services agreed with you, in line with your instructions.",
  },
];

function HowItWorks() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="pageSection howPageHero">
        <span className="sectionLabel">How It Works</span>

        <h1>Simple Onboarding. Smooth Daily Operations.</h1>

        <p>
          Getting started with PrimeCab Solutions is straightforward. We take
          care of the setup, so you can hand over dispatch and customer support
          with confidence.
        </p>

        <div className="heroActions">
          <Link to="/contact" className="primaryBtn">
            Book a Free Consultation
          </Link>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="whatsappBtn"
          >
            <FaWhatsapp />
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* ================= STEPS ================= */}
      <section className="howSteps">
        <Reveal className="sectionHead">
          <span className="sectionLabel">Our Process</span>
          <h2>Four Clear Steps From First Call To Full Support.</h2>
          <p>
            Every business is different, so we shape the process around your
            operation while keeping each stage simple and transparent.
          </p>
        </Reveal>

        <div className="howStepsGrid">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.08}>
              <div className="howDetailCard">
                <span className="howNumber">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>

                <ul className="howChecklist">
                  {step.points.map((point) => (
                    <li key={point}>
                      <FaCheckCircle />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= WHAT WE NEED ================= */}
      <section className="howNeeds">
        <Reveal className="howNeedsText">
          <span className="sectionLabel">Getting Ready</span>
          <h2>What We Need From You To Get Started.</h2>
          <p>
            A few simple details help us represent your business accurately from
            the very first call.
          </p>
        </Reveal>

        <Reveal className="howNeedsList" delay={0.1}>
          {needs.map((item) => (
            <div key={item}>
              <FaCheckCircle />
              <span>{item}</span>
            </div>
          ))}
        </Reveal>
      </section>

      {/* ================= WHAT TO EXPECT ================= */}
      <section className="howExpect">
        <div className="expectLayout">
          <Reveal className="expectPanel">
            <span className="sectionLabel">What To Expect</span>

            <h2>A Service Built Around Reliability.</h2>

            <p>
              From onboarding to daily operations, our focus is on dependable
              support that your drivers and customers can trust.
            </p>

            <ul className="expectPromises">
              {promises.map((item) => (
                <li key={item}>
                  <FaCheckCircle />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link to="/contact" className="primaryBtn">
              Speak To Our Team
            </Link>
          </Reveal>

          <div className="expectGrid">
            {expectCards.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className="expectCard">
                  <span className="expectIndex">{`0${index + 1}`}</span>
                  <div className="expectIcon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="homeCta">
        <Reveal>
          <span className="sectionLabel">Get Started</span>
          <h2>Ready To Take The First Step?</h2>
          <p>
            Speak to our team about your taxi or private hire business and
            find out how we can support your daily operations.
          </p>

          <div className="heroActions">
            <Link to="/contact" className="primaryBtn">
              Book a Free Consultation
            </Link>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="whatsappBtn"
            >
              <FaWhatsapp />
              WhatsApp Us
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}

export default HowItWorks;