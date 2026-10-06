import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaHeadset,
  FaCarSide,
  FaComments,
  FaCheckCircle,
  FaClock,
  FaUsers,
  FaChartLine,
  FaShieldAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendarCheck,
  FaArrowRight,
} from "react-icons/fa";


import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

import { services } from "../data/services";
import ServiceCard from "../components/ServiceCard";
import Reveal from "../components/Reveal";

const WHATSAPP_URL = "https://wa.me/923125357945";

const benefits = [
  {
    icon: <FaClock />,
    title: "24/7 Operational Coverage",
    text: "Keep your taxi business responsive during busy periods, overnight shifts, weekends, and peak booking hours.",
  },
  {
    icon: <FaUsers />,
    title: "Dedicated Support Team",
    text: "Our trained support staff handle customer queries, booking requests, driver communication, and operational tasks.",
  },
  {
    icon: <FaChartLine />,
    title: "Built For Growth",
    text: "Scale support without constantly increasing your internal staffing, training, and operational overhead.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Reliable Daily Operations",
    text: "Consistent workflows help reduce missed calls, delayed responses, booking issues, and customer frustration.",
  },
];

const supportTasks = [
  {
    icon: <FaPhoneAlt />,
    title: "Booking Calls",
    text: "Handle incoming booking enquiries quickly and professionally.",
  },
  {
    icon: <FaCarSide />,
    title: "Driver Coordination",
    text: "Assist with booking allocation, journey updates, and operational communication.",
  },
  {
    icon: <FaComments />,
    title: "Live Chat Support",
    text: "Respond to customers through live chat and digital support channels.",
  },
  {
    icon: <FaEnvelope />,
    title: "Email Handling",
    text: "Manage customer enquiries, booking questions, and routine correspondence.",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Journey Support",
    text: "Help customers with pickup information, journey updates, and booking-related assistance.",
  },
  {
    icon: <FaCalendarCheck />,
    title: "Advance Bookings",
    text: "Support scheduled journeys, airport transfers, and future reservations.",
  },
];

const faqs = [
  {
    question: "Do you provide 24/7 taxi dispatch support?",
    answer:
      "Yes. PrimeCab Solutions can support taxi and private hire operations across daytime, evening, overnight, weekend, and peak-hour requirements.",
  },
  {
    question: "Can your team work with our existing dispatch system?",
    answer:
      "Our service is designed to integrate into the operational workflow already used by your taxi business, subject to your platform and access requirements.",
  },
  {
    question: "Do you only handle dispatch?",
    answer:
      "No. Support can include booking calls, customer service, live chat, email handling, driver coordination, and other back-office operational tasks.",
  },
  {
    question: "Can the service scale as our company grows?",
    answer:
      "Yes. The support model can be adjusted as booking volume, operating hours, fleet size, and customer-support requirements increase.",
  },
];


function Home() {

  const [openFaq, setOpenFaq] = useState(0);


  return (
    <>
      {/* HERO */}
      <section className="premiumHero">
        <div className="heroOverlay"></div>

        <div className="premiumHeroText">
          <motion.span
            className="badge"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            24/7 UK Taxi Dispatch Support
          </motion.span>

<motion.h1
  className="heroTitle"
  initial={{ opacity: 0, y: 28 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.65, delay: 0.1 }}
>
  <span>Reliable Dispatch.</span>
  <span>Happier Customers.</span>
  <span>Stronger Business.</span>
</motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
          >
            PrimeCab Solutions provides professional taxi dispatch, customer
            support, live chat, email handling, and back-office outsourcing for
            taxi and private hire companies across the UK.
          </motion.p>

          <motion.div
            className="heroActions"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
          >
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
          </motion.div>

          <motion.div
            className="heroTrustRow"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.4 }}
          >
            <div>
              <FaHeadset />
              <span>24/7 Support</span>
            </div>

            <div>
              <FaCarSide />
              <span>Taxi Focused</span>
            </div>

            <div>
              <FaComments />
              <span>Live Support</span>
            </div>
          </motion.div>
        </div>

      <motion.div
  className="heroVisualStage"
  initial={{ opacity: 0, scale: 0.94, x: 40, y: 0 }}
  animate={{ opacity: 1, scale: 1, x: 50, y: 50 }}
  transition={{ duration: 0.85, delay: 0.15 }}
>
          <img
            className="heroCharacter"
            src="/images/aboutus.webp"
            alt="PrimeCab dispatcher"
          />

          <motion.div
            className="floatingCard cardOne"
            animate={{ y: [0, -14, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            <FaCarSide />

            <div>
              <strong>New Booking</strong>
              <span>Airport pickup assigned</span>
            </div>
          </motion.div>

          <motion.div
            className="floatingCard cardTwo"
            style={{ top: "360px" }}
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 4.5 }}
          >
            <FaHeadset />

            <div>
              <strong>Customer Call</strong>
              <span>Answered in seconds</span>
            </div>
          </motion.div>

          <motion.div
            className="floatingCard cardThree"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
          >
            <FaCheckCircle />

            <div>
              <strong>Driver Assigned</strong>
              <span>Vehicle on the way</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* STATS */}
      <Reveal>
        <section className="statsBand">
          <div>
            <strong>2000+</strong>
            <span>Bookings Handled Daily</span>
          </div>

          <div>
            <strong>24/7</strong>
            <span>Operational Support</span>
          </div>

          <div>
            <strong>10+</strong>
            <span>Taxi Companies Supported</span>
          </div>

          <div>
            <strong>99%</strong>
            <span>Client Satisfaction Focus</span>
          </div>
        </section>
      </Reveal>

      {/* SERVICES */}
      <section
  className="
    services
    imageServiceSection
    imageBgSection
    servicesBg
  "
>
        <Reveal className="sectionHead">
          <span className="sectionLabel">What We Do</span>

          <h2>
            Complete Support For Your Taxi Business.
          </h2>

          <p>
            From dispatch to customer care, we handle daily operations so your
            team can focus on growing your fleet and improving service quality.
          </p>
        </Reveal>

        <div className="serviceGrid">
          {services.slice(0, 4).map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.08}
            >
              <ServiceCard
                index={index}
                {...item}
              />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="centerAction">
            <Link
              to="/services"
              className="textLink"
            >
              Explore All Services
              <FaArrowRight />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* WHY PRIMECAB */}
      <section
  className="
    whyPrimeCab
    imageBgSection
    whyBg
  "
>
        <Reveal className="sectionHead">
          <span className="sectionLabel">
            Why PrimeCab
          </span>

          <h2>
            Support Built Around The Way Taxi Companies Operate.
          </h2>

          <p>
            Taxi businesses need fast responses, reliable communication, and
            consistent operational support. Our service is designed around
            those daily requirements.
          </p>
        </Reveal>

        <div className="benefitsGrid">
          {benefits.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.07}
            >
              <div className="benefitCard">
                <div className="benefitIcon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHAT WE HANDLE */}
      <section
  className="
    supportCoverageSection
    imageBgSection
    operationsBg
  "
>
        <Reveal className="sectionHead">
          <span className="sectionLabel">
            Daily Operations
          </span>

          <h2>
            More Than Just Answering Calls.
          </h2>

          <p>
            Our team can support multiple parts of the customer and dispatch
            journey, helping your operation stay organised and responsive.
          </p>
        </Reveal>

        <div className="supportTaskGrid">
          {supportTasks.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.06}
            >
              <div className="supportTaskCard">
                <span className="supportTaskIcon">
                  {item.icon}
                </span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="homeProcess">
        <div className="processDarkOverlay"></div>

        <Reveal className="processContent">
          <span className="sectionLabel">
            Simple Setup
          </span>

          <h2>
            Start Your Support Operation In Three Steps.
          </h2>

          <div className="processSteps">
            <div>
              <strong>01</strong>

              <h3>Initial Consultation</h3>

              <p>
                We understand your taxi business, booking volume, operating
                hours, and support requirements.
              </p>
            </div>

            <div>
              <strong>02</strong>

              <h3>Go Live</h3>

              <p>
                Our team aligns with your processes and begins supporting your
                day-to-day operation.
              </p>
            </div>

            <div>
              <strong>03</strong>

              <h3>Ongoing Support</h3>

              <p>
                We continue monitoring service quality and adapt support as
                your business requirements change.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal
          className="processImageFill"
          delay={0.15}
        >
          <img
            src="/images/support-agent-3d.webp"
            alt="PrimeCab support agent"
          />
        </Reveal>
      </section>

      {/* BUSINESS BENEFIT SPLIT */}
 <section
  className="
    growthSection
    imageBgSection
    growthBg
  "
>
        <Reveal className="growthContent">
          <span className="sectionLabel">
            Built For Taxi Operators
          </span>

          <h2>
            Spend Less Time Managing Support.
            More Time Growing Your Business.
          </h2>

          <p>
            Outsourcing repetitive operational tasks gives owners and managers
            more time to focus on fleet growth, driver relationships, service
            quality, and customer acquisition.
          </p>

          <div className="growthChecklist">
            <div>
              <FaCheckCircle />
              <span>
                Reduce pressure on internal teams
              </span>
            </div>

            <div>
              <FaCheckCircle />
              <span>
                Extend customer support coverage
              </span>
            </div>

            <div>
              <FaCheckCircle />
              <span>
                Handle busy periods more effectively
              </span>
            </div>

            <div>
              <FaCheckCircle />
              <span>
                Create a more consistent customer experience
              </span>
            </div>

            <div>
              <FaCheckCircle />
              <span>
                Scale operational support as booking volume grows
              </span>
            </div>
          </div>

          <Link
            to="/contact"
            className="primaryBtn"
          >
            Discuss Your Requirements
          </Link>
        </Reveal>

        <Reveal
          className="growthVisual"
          delay={0.15}
        >
          <img
            src="/images/aboutus.webp"
            alt="Taxi support operations"
          />
        </Reveal>
      </section>

      {/* FAQ */}
    <section className="homeFaq premiumFaq">
  <div className="faqGlow faqGlowOne"></div>
  <div className="faqGlow faqGlowTwo"></div>

  <Reveal className="sectionHead">
    <span className="sectionLabel">FAQs</span>

    <h2>
      Questions Before You Get Started?
    </h2>

    <p>
      Everything you need to know about PrimeCab dispatch,
      customer support, and outsourcing services.
    </p>
  </Reveal>

  <div className="premiumFaqLayout">

    {/* LEFT FEATURE PANEL */}
    <Reveal className="premiumFaqAside">
      <span className="faqAsideBadge">
        PrimeCab Support
      </span>

      <h3>
        Need a more specific answer?
      </h3>

      <p>
        Tell us how your taxi operation works and our team
        will help you choose the right support setup.
      </p>

      <div className="faqAsidePoints">
        <div>
          <FaCheckCircle />
          <span>24/7 availability options</span>
        </div>

        <div>
          <FaCheckCircle />
          <span>Flexible support coverage</span>
        </div>

        <div>
          <FaCheckCircle />
          <span>Taxi-focused operations</span>
        </div>
      </div>

      <Link to="/contact" className="faqContactBtn">
        Talk To Our Team
        <FaArrowRight />
      </Link>
    </Reveal>

    {/* FAQ ACCORDION */}
    <div className="premiumFaqAccordion">
      {faqs.map((item, index) => {
        const isOpen = openFaq === index;

        return (
          <Reveal
            key={item.question}
            delay={index * 0.05}
          >
            <motion.div
              className={`premiumFaqItem ${
                isOpen ? "premiumFaqItemOpen" : ""
              }`}
              layout
            >
              <button
                className="premiumFaqQuestion"
                onClick={() =>
                  setOpenFaq(isOpen ? -1 : index)
                }
              >
                <div className="premiumFaqQuestionContent">
                  <span className="premiumFaqNumber">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <span className="premiumFaqTag">
                      {index === 0
                        ? "Support"
                        : index === 1
                        ? "Integration"
                        : index === 2
                        ? "Services"
                        : "Scaling"}
                    </span>

                    <h3>{item.question}</h3>
                  </div>
                </div>

                <motion.span
                  className="premiumFaqToggle"
                  animate={{
                    rotate: isOpen ? 45 : 0,
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <FaPlus />
                </motion.span>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: isOpen ? "auto" : 0,
                  opacity: isOpen ? 1 : 0,
                }}
                transition={{
                  duration: 0.32,
                  ease: "easeInOut",
                }}
                className="premiumFaqAnswerWrap"
              >
                <div className="premiumFaqAnswer">
                  <p>{item.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          </Reveal>
        );
      })}
    </div>
  </div>
</section>
      {/* CTA */}
      <section className="homeCta">
        <Reveal>
          <span className="sectionLabel">
            Ready to Grow?
          </span>

          <h2>
            Let PrimeCab Solutions Handle Your Dispatch And Support.
          </h2>

          <p>
            Get reliable support for bookings, drivers, customers, and daily
            taxi operations without putting additional pressure on your
            internal team.
          </p>

          <div className="heroActions">
            <Link
              to="/contact"
              className="primaryBtn"
            >
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
 <div className="whatsappWidget">
  <div className="whatsappMessage">
    <strong>Need help?</strong>
    <span>Chat with our team</span>
  </div>

  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noreferrer"
    className="floatingWhatsapp"
    aria-label="Chat with PrimeCab on WhatsApp"
  >
    <FaWhatsapp />
  </a>
</div>
    </>
  );
}

export default Home;