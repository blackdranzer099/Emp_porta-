import React from "react";
import { useNavigate } from "react-router-dom";
import "./Pricing.css";

const Pricing = () => {
  const navigate = useNavigate();

  // Simplified pricing plans
  const plans = [
    {
      name: "Free",
      basePrice: "₹0",
      includedUsers: 5,
      features: [
        "Peer-to-Peer Recognition",
        "Basic Badges and Kudos",
        "Community Support",
      ],
    },
    {
      name: "Basic",
      basePrice: "₹99",
      includedUsers: 10,
      features: [
        "Advanced Badges and Rewards",
        "Weekly Recognition Reports",
        "Premium Support",
      ],
    },
    {
      name: "Pro",
      basePrice: "₹199",
      includedUsers: 20,
      features: [
        "Custom Branding for Badges",
        "Monthly Engagement Analytics",
        "Priority Support",
        "Integration with HR Tools",
      ],
    },
    {
      name: "Enterprise",
      basePrice: "₹499",
      includedUsers: 50,
      features: [
        "Unlimited Customization",
        "Dedicated Account Manager",
        "Advanced Security Features",
      ],
    },
  ];

  // Function to handle plan selection and redirection
  const handlePlanSelection = (plan) => {
    navigate("/register", { state: { selectedPlan: plan.toLowerCase() } });
  };

  return (
    <div className="pricing-container">
      <h1>Choose Your Plan</h1>
      <p>Find the perfect plan for your team's recognition needs.</p>
      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div className="pricing-card" key={index}>
            <h3>{plan.name}</h3>
            <div className="price">{plan.basePrice}</div>
            <div className="included-users">
              Includes up to {plan.includedUsers} users
            </div>
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button
              className={`btn-${plan.name.toLowerCase()}`}
              onClick={() => handlePlanSelection(plan.name)}
            >
              {plan.name === "Free" ? "Get Started" : "Choose Plan"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;