import React from "react";
import { useNavigate } from "react-router-dom";
import "./Pricing.css";

const Pricing = () => {
  const navigate = useNavigate();

  // Hardcoded pricing plans with relevant features
  const plans = [
    {
      name: "Free",
      price: "₹0", // Indian Rupee
      features: [
        "Peer-to-Peer Recognition",
        "Basic Badges and Kudos",
        "Up to 5 Team Members",
        "Community Support",
      ],
    },
    {
      name: "Basic",
      price: "₹99", // Indian Rupee
      features: [
        "All Free Features",
        "Advanced Badges and Rewards",
        "Up to 20 Team Members",
        "Weekly Recognition Reports",
        "Premium Support",
      ],
    },
    {
      name: "Pro",
      price: "₹299", // Indian Rupee
      features: [
        "All Basic Features",
        "Unlimited Team Members",
        "Custom Branding for Badges",
        "Monthly Engagement Analytics",
        "Priority Support",
        "Integration with HR Tools",
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
            <div className="price">{plan.price}</div>
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