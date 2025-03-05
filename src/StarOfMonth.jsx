import React from "react";
import { motion } from "framer-motion";

const StarOfMonth = () => {
  return (
    <section className="py-16">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Star of the Month
      </motion.h2>
      <div className="flex flex-col items-center">
        <img
          src="C:\Users\GAC-LP0003.GAC-LP-0003.000\Downloads\premium_photo-1661297414288-8ed17eb1b3f1-Photoroom.png"
          alt="Employee Avatar"
          className="rounded-full mb-4"
        />
        <h3 className="text-2xl font-bold">Employee Name</h3>
        <p className="text-lg">Role</p>
        <p className="text-center mt-4 max-w-md">
          Recognized for outstanding contributions and dedication to the team.
        </p>
      </div>
    </section>
  );
};

export default StarOfMonth;