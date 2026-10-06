import PageWrapper from "../components/PageWrapper";
import Reveal from "../components/Reveal";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";

function Services() {
  return (
    <PageWrapper>
      <section className="animatedPageHero servicesPageHero">
        <Reveal>
          <span className="sectionLabel">Our Services</span>
          <h1>Premium Support Services For Modern Taxi Businesses.</h1>
          <p>
            We support your daily operations with dispatch, customer care, live
            chat, email handling, fleet coordination, and back-office assistance.
          </p>
        </Reveal>
      </section>

      <section className="services imageServiceSection">
        <div className="serviceGrid">
          {services.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <ServiceCard index={index} {...item} />
            </Reveal>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}

export default Services;