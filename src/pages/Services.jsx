import { useEffect, useRef, useState } from "react";
import { FaCheckCircle, FaTimes, FaArrowRight } from "react-icons/fa";

import PageWrapper from "../components/PageWrapper";
import Reveal from "../components/Reveal";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";

const serviceDetails = {
  "Taxi Dispatch Support": {
    text: "Our dispatch team helps manage bookings, coordinate drivers, monitor active journeys, and keep your daily taxi operation organised during busy and quiet periods.",
    points: [
      "Booking and journey coordination",
      "Driver communication support",
      "Advance booking management",
      "Operational support during busy hours",
    ],
  },

  "Customer Support": {
    text: "We help your customers receive fast, professional assistance for bookings, changes, enquiries, complaints, and general journey-related questions.",
    points: [
      "Professional customer communication",
      "Booking changes and cancellations",
      "Journey enquiries",
      "Customer issue handling",
    ],
  },

  "Live Chat Support": {
    text: "Our team can handle customer conversations through live chat so passengers can receive quick responses without putting extra pressure on your internal staff.",
    points: [
      "Fast customer responses",
      "Booking-related questions",
      "General customer enquiries",
      "Consistent communication",
    ],
  },

  "Email Support": {
    text: "We help manage customer emails and operational enquiries so important messages are answered professionally and nothing gets overlooked.",
    points: [
      "Customer email handling",
      "Booking enquiries",
      "Complaint responses",
      "General business communication",
    ],
  },

  "Fleet Coordination": {
    text: "We support communication between your dispatch operation and drivers, helping reduce delays and keep journeys moving smoothly.",
    points: [
      "Driver coordination",
      "Journey updates",
      "Booking allocation support",
      "Operational communication",
    ],
  },

  "Back Office Support": {
    text: "Our back-office support helps with routine operational tasks that consume valuable time, allowing your internal team to focus on growth and service quality.",
    points: [
      "Administrative support",
      "Booking records",
      "Operational organisation",
      "Daily support tasks",
    ],
  },
};

function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const detailRef = useRef(null);

  const handleServiceClick = (item) => {
    setSelectedService((current) =>
      current?.title === item.title ? null : item
    );
  };

  const details = selectedService
    ? serviceDetails[selectedService.title]
    : null;

  useEffect(() => {
    if (!selectedService || !detailRef.current) return;

    const timer = setTimeout(() => {
      const card = detailRef.current;

      const headerHeight = 90;
      const gap = 20;

      const rect = card.getBoundingClientRect();
      const cardHeight = rect.height;

      const availableHeight = window.innerHeight - headerHeight - gap * 2;

      let extraSpace = 0;

      if (cardHeight < availableHeight) {
        extraSpace = (availableHeight - cardHeight) / 2;
      }

      const scrollPosition =
        window.scrollY + rect.top - headerHeight - extraSpace;

      window.scrollTo({
        top: Math.max(0, scrollPosition),
        behavior: "smooth",
      });
    }, 150);

    return () => clearTimeout(timer);
  }, [selectedService]);

  return (
    <PageWrapper>
      <section className="animatedPageHero servicesPageHero">
        <Reveal>
          <span className="sectionLabel">Our Services</span>

          <h1>Premium Support Services For Modern Taxi Businesses.</h1>

          <p>
            We support your daily operations with dispatch, customer care,
            live chat, email handling, fleet coordination, and back-office
            assistance.
          </p>
        </Reveal>
      </section>

      <section className="services imageServiceSection">
        <div className="serviceGrid">
          {services.map((item, index) => {
            const isActive = selectedService?.title === item.title;

            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <div
                  className={`clickableService ${isActive ? "active" : ""}`}
                  onClick={() => handleServiceClick(item)}
                >
                  <ServiceCard
                    index={index}
                    {...item}
                    isActive={isActive}
                    onSeeMore={(e) => {
                      e.stopPropagation();
                      handleServiceClick(item);
                    }}
                  />

                  <button
                    type="button"
                    className="seeMoreLink"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleServiceClick(item);
                    }}
                  >
                    {isActive ? "Show less" : "See more"}
                    <FaArrowRight />
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>

        {selectedService && (
          <div ref={detailRef} className="serviceDetailPanel">
            <button
              type="button"
              className="serviceDetailClose"
              onClick={() => setSelectedService(null)}
              aria-label="Close service details"
            >
              <FaTimes />
            </button>

            <div className="serviceDetailContent">
              <span className="sectionLabel">Service Details</span>

              <h2>{selectedService.title}</h2>

              <p>
                {details?.text ||
                  selectedService.description ||
                  "Professional support designed to help your taxi business operate more efficiently."}
              </p>

              {details?.points && (
                <div className="serviceDetailPoints">
                  {details.points.map((point) => (
                    <div key={point}>
                      <FaCheckCircle />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              )}

              <a href="/contact" className="primaryBtn serviceDetailBtn">
                Discuss This Service
              </a>
            </div>
          </div>
        )}
      </section>
    </PageWrapper>
  );
}

export default Services;