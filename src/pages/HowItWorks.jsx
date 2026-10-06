const steps = [
  "Contact Our Team",
  "Choose Your Support Plan",
  "Onboard Your Taxi Business",
  "Start 24/7 Operations",
];

function HowItWorks() {
  return (
    <section className="pageSection howPageHero">
      <span className="sectionLabel">How It Works</span>

      <h1>Simple Onboarding. Smooth Daily Operations.</h1>

      <div className="steps pageGrid">
        {steps.map((step, index) => (
          <div className="step" key={step}>
            <span>{`0${index + 1}`}</span>
            <h3>{step}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;