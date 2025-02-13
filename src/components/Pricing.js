import React from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import './Pricing.css';

const Pricing = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    // Function to handle plan selection and redirection
    const handlePlanSelection = (plan) => {
        navigate('/register', { state: { selectedPlan: plan } }); // Pass the selected plan as state
    };

    return (
        <div className="pricing-container">
            <h2>Choose Your Plan</h2>
            <p>Find the perfect plan for your needs.</p>

            <div className="pricing-grid">
                {/* Free Plan */}
                <div className="pricing-card">
                    <h3>Free</h3>
                    <div className="price">$0</div>
                    <ul>
                        <li>Basic Features</li>
                        <li>Community Support</li>
                        <li>Limited Storage</li>
                    </ul>
                    <button
                        className="btn-free"
                        onClick={() => handlePlanSelection('free')}
                    >
                        Get Started
                    </button>
                </div>

                {/* Basic Plan */}
                <div className="pricing-card">
                    <h3>Basic</h3>
                    <div className="price">$9</div>
                    <ul>
                        <li>All Free Features</li>
                        <li>Premium Support</li>
                        <li>10GB Storage</li>
                    </ul>
                    <button
                        className="btn-basic"
                        onClick={() => handlePlanSelection('basic')}
                    >
                        Choose Plan
                    </button>
                </div>

                {/* Pro Plan */}
                <div className="pricing-card">
                    <h3>Pro</h3>
                    <div className="price">$29</div>
                    <ul>
                        <li>All Basic Features</li>
                        <li>Priority Support</li>
                        <li>Unlimited Storage</li>
                    </ul>
                    <button
                        className="btn-pro"
                        onClick={() => handlePlanSelection('pro')}
                    >
                        Choose Plan
                    </button>
                </div>

                {/* Enterprise Plan */}
                <div className="pricing-card">
                    <h3>Enterprise</h3>
                    <div className="price">$99</div>
                    <ul>
                        <li>All Pro Features</li>
                        <li>Dedicated Support</li>
                        <li>Custom Solutions</li>
                    </ul>
                    <button
                        className="btn-enterprise"
                        onClick={() => handlePlanSelection('enterprise')}
                    >
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pricing;