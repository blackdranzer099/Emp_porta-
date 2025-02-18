import React from "react";
import { Facebook, Twitter, Linkedin, Mail, Phone, Instagram } from 'lucide-react';
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="grid">
          {/* About Section */}
          <div className="col">
            <h3>Honor Hive</h3>
            <p>Your Trusted Partner</p>
          </div>
          {/* Contact Section */}
          <div className="col contact-info">
            <h4>Contact</h4>
            <div className="flex items-center">
              <Mail size={16} />
              <span>contact@honohive.com</span>
            </div>
            <div className="flex items-center">
              <Phone size={16} />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
          {/* Follow Us Section */}
          <div className="col follow-us">
            <h4>Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-orange-500">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-orange-500">
                <Twitter size={20} />
              </a>
              {/* Update LinkedIn Link */}
              <a 
                href="https://www.linkedin.com/company/fifteen-flames/posts/?feedView=all" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn" 
                className="hover:text-orange-500"
              >
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-orange-500">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          {/* Address Section */}
          <div className="col address">
            <h4>Address</h4>
            <p>Jain Sadhguru capital park</p>
            <p>Hyderbad</p>
            <p>15 Flames Team</p>
          </div>
        </div>
        {/* Copyright Section */}
        <div className="border-t mt-8 pt-8 text-center copyright">
          <p>&copy; {new Date().getFullYear()} Honor Hive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;