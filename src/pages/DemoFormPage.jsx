import React, { useState } from "react";

const DemoFormPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for booking a demo! Details: " + JSON.stringify(formData));
  };

  return (
    <section className="flex flex-col items-center py-16 min-h-screen">
      {/* Form Title */}
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400 mb-6">
        Book a Demo
      </h2>

      {/* Form Container */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full"
      >
        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-black font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
            required
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-black font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
            required
          />
        </div>

        {/* Phone Field */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-black font-medium mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
            required
          />
        </div>

        {/* Company Field */}
        <div className="mb-4">
          <label htmlFor="company" className="block text-black font-medium mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
            required
          />
        </div>

        {/* Job Title Field */}
        <div className="mb-4">
          <label htmlFor="jobTitle" className="block text-black font-medium mb-2">
            Job Title
          </label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
            required
          />
        </div>

        {/* Message Field */}
        <div className="mb-4">
          <label htmlFor="message" className="block text-black font-medium mb-2">
            Message (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
            placeholder="Tell us more about your requirements..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded hover:opacity-90 transition-opacity"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default DemoFormPage;