import React from "react";
import { Facebook, Twitter, Linkedin, Mail, Phone, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-orange-500">Honor Hive</h3>
            <p className="mt-4">Your Trusted Partner</p>
          </div>
          
          <div className="col">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>contact@honohive.com</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
          
          <div className="col">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-500">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-orange-500">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-orange-500">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-orange-500">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div className="col">
            <h4 className="text-lg font-semibold mb-4">Address</h4>
            <p>123 Innovation Street</p>
            <p>Tech District</p>
            <p>San Francisco, CA 94105</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Honor Hive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;