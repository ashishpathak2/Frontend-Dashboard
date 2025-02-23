import React from "react";

// Mock team members data
const teamData = [
  {
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "John ",
    role: "Frontend Developer",
    mood: "😊",
  },
  {
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Sarah ",
    role: "Backend Engineer",
    mood: "😎",
  },
  {
    img: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "Mike ",
    role: "UI/UX Designer",
    mood: "🎨",
  },
  {
    img: "https://randomuser.me/api/portraits/women/36.jpg",
    name: "Emily ",
    role: "Product Manager",
    mood: "🚀",
  },
];

export default function TeamMember() {
  return (
    <div className="flex flex-col gap-5">
      {teamData.map((member, index) => (
        <div key={index} className="flex items-center justify-between w-full">
          {/* Profile Image */}
          <div className="w-12 h-12 flex-shrink-0">
            <img
              className="w-full h-full object-cover rounded-full"
              src={member.img}
              alt={member.name}
            />
          </div>

          {/* Member Info (Hidden on Small Screens) */}
          <div className="hidden sm:flex flex-col flex-1 ml-2">
            <span className="font-semibold">{member.name}</span>
            <span className="text-gray-500 text-xs">{member.role}</span>
          </div>

          {/* Mood Emoji */}
          <span className="text-lg">{member.mood}</span>
        </div>
      ))}
    </div>
  );
}
