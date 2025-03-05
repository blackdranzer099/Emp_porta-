import React from "react";

const TeamMemberCard = ({ member }) => {
  return (
    <div className="team-card">
      <div className="profile-img">
        <img
          src={member.image}
          alt={member.name}
          onError={(e) => (e.target.src = "/assets/icons/default-avatar.png")}
        />
      </div>
      <h3>{member.name}</h3>
      <p>{member.role}</p>
      <div className="stars">
        {"★".repeat(member.rating)}{"☆".repeat(5 - member.rating)}
      </div>
    </div>
  );
};

export default TeamMemberCard;
