import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import TeamMemberCard from "./TeamMemberCard"; // Import the new component
import "./About.css"; // Make sure styles are applied

const teamMembers = [
  { name: "John Doe", role: "Software Engineer", image: "/images/john.jpg", rating: 5 },
  { name: "Jane Smith", role: "UI/UX Designer", image: "/images/jane.jpg", rating: 4 },
];

const TeamCarousel = () => {
  return (
    <Swiper 
      spaceBetween={30} 
      slidesPerView={1} 
      pagination={{ clickable: true }} 
      modules={[Pagination]} 
      className="swiper-container"
    >
      {teamMembers.map((member, index) => (
        <SwiperSlide key={index}>
          <TeamMemberCard member={member} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TeamCarousel;
