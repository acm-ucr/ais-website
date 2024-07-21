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
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "20px",
      }}
    >
      {events.map((event) => (
        <div
          key={event.id}
          style={{
            width: "400px",
            border: "1px solid black",
            borderRadius: "10px",
            padding: "10px",
            textAlign: "center",
          }}
        >
          <h3 style={{ color: "black", fontWeight: "bold" }}>{event.name}</h3>
          <p style={{ color: "black" }}>{event.date}</p>
          <p style={{ color: "black" }}>{event.location}</p>
        </div>
      ))}
    </div>
  );
};

export default Upcoming;
