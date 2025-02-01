import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 bg-black text-white text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Honor Hive. All rights reserved.
      </p>
      <div className="mt-4">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white mx-2 transition-colors"
      >
        Facebook
      </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white mx-2 transition-colors"
        >
          Twitter
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white mx-2 transition-colors"
        >
          Instagram
        </a>
      </div>
      <div className="mt-8">
        <p className="text-sm mb-4">Subscribe to our newsletter:</p>
        <form className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-l-lg focus:outline-none"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-r-lg hover:opacity-90"
          >
            Subscribe
          </button>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-8 px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-full hover:opacity-90">
                  Back to Top
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;