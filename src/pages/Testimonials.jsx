import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "John Doe",
    role: "Software Engineer",
    message:
      "Being recognized as 'Star of the Month' has motivated me to push my limits further!",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    message:
      "The Wall of Fame is an incredible way to celebrate our team's hard work.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 4,
  },
  {
    name: "Emily Johnson",
    role: "Lead Developer",
    message:
      "I love how Honor Hive fosters collaboration and innovation in the workplace.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 5,
  },
  {
    name: "Michael Brown",
    role: "UX Designer",
    message:
      "The recognition system here truly values creativity and hard work.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 4,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next testimonial
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to move to the previous testimonial
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-sliding functionality
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000); // Slide every 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]);

  return (
    <section id="testimonials" className="py-16 px-6">
      {/* Section Title */}
      <h2 className="testimonials-title">What Our Employees Say</h2>

      {/* Carousel Container */}
      <div className="carousel-container">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="carousel-card">
              {/* Quote Icon */}
              <div className="quote-icon">“</div>
              {/* Testimonial Message */}
              <p className="testimonial-message">{testimonial.message}</p>
              {/* Author Details */}
              <div className="author-details flex items-center mt-4">
                {/* Avatar */}
                <img
                  src={testimonial.image}
                  alt={`Portrait of ${testimonial.name}`}
                  className="author-avatar"
                  onError={(e) => {
                    e.target.src = "/assets/icons/default-avatar.png";
                  }}
                  loading="lazy"
                />
                <div>
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role}</p>
                  {/* Star Rating */}
                  <div className="star-rating flex mt-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 fill-current ${
                          i < testimonial.rating ? "text-yellow-500" : "text-gray-300"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="pagination-dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          ></span>
        ))}
      </div>

      {/* Carousel Controls */}
      <div className="carousel-controls">
        {/* <button onClick={prevTestimonial} aria-label="Previous testimonial">
          Previous
        </button>
        <button onClick={nextTestimonial} aria-label="Next testimonial">
          Next
        </button> */}
      </div>
    </section>
  );
};

export default Testimonials;