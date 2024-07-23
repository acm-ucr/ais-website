import React from "react";

const Upcoming = () => {
  const events = [
    {
      id: 1,
      name: "Dog Party",
      date: "July 21, 2024",
      location: "Central Park",
    },
    {
      id: 2,
      name: "Puppy Parade",
      date: "August 22, 2025",
      location: "UCR",
    },
    {
      id: 3,
      name: "Canine Convention",
      date: "September 23, 2026",
      location: "City Hall",
    },
  ];

  return (
    <div className="flex justify-around p-5">
      {events.map((event) => (
        <div
          key={event.id}
          className="w-96 border border-black rounded-lg p-5 text-center"
        >
          <div className="text-black font-bold">{event.name}</div>
          <div className="text-black">{event.date}</div>
          <div className="text-black">{event.location}</div>
        </div>
      ))}
    </div>
  );
};

export default Upcoming;
