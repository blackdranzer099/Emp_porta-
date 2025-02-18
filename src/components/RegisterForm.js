import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './RegisterForm.css';

const RegisterForm = () => {
    const location = useLocation();
    const selectedPlanFromState = location.state?.selectedPlan || 'free'; // Default to 'free'

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        plan: selectedPlanFromState, // Pre-fill the plan
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Add validation logic here
        if (!formData.name || !formData.email) {
            alert('Please fill in all required fields.');
            return;
        }

        // Simulate form submission (for now)
        console.log('Form Data Submitted:', formData);
        alert('Registration successful! Check the console for details.');
    };

    return (
        <div className="register-container">
            <h2>Join Us Today</h2>

            <form onSubmit={handleSubmit} className="register-form">
                {/* Full Name */}
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Email Address */}
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Phone Number (Optional) */}
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone number (optional)"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>

                {/* Address (Optional) */}
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Enter your address (optional)"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </div>

                {/* Plan Selection */}
                <div className="form-group">
                    <label htmlFor="plan">Select Plan</label>
                    <select
                        id="plan"
                        name="plan"
                        value={formData.plan}
                        onChange={handleChange}
                        required
                    >
                        <option value="free">Free</option>
                        <option value="basic">Basic</option>
                        <option value="pro">Pro</option>
                        
                    </select>
                </div>

                {/* Submit Button */}
                <button type="submit" className="submit-btn">
                    Get Started
                </button>
            </form>

            {/* Login Link */}
            <div className="login-link">
                Already have an account? <a href="/login">Login here</a>
            </div>
        </div>
    );
};

export default RegisterForm;