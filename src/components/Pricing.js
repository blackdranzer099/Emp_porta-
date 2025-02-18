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
            <h1>Choose Your Plan</h1>
            <p>Find the perfect plan for your needs.</p>
            <div className="pricing-grid">
                {/* Free Plan */}
                <div className="pricing-card">
                    <h3>Free</h3>
                    <div className="price">₹0</div> {/* Changed to Indian Rupee */}
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
                    <div className="price">₹99</div> {/* Changed to Indian Rupee */}
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
                    <div className="price">₹299</div> {/* Changed to Indian Rupee */}
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
            </div>
        </div>
    );
};

export default Pricing;