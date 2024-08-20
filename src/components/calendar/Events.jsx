import React, { useEffect, useState } from "react";
import moment from "moment";

const Event = ({ name, month, day, location }) => {
  return (
    <div className="font-nunito border rounded-lg border-black shadow-sm shadow-black py-2.5">
      <div className="font-extrabold text-xl text-center pt-1 px-2">{name}</div>
      <div className="font-semibold text-base text-center pt-1 px-2">
        {month} {day}
      </div>
      <div className="font-semibold text-base text-center pt-1 px-2">
        {location}
      </div>
    </div>
  );
};

const Events = ({ type }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const startDate = moment().subtract(10, "weeks").toISOString();
    const endDate = moment().add(10, "weeks").toISOString();

    fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime&timeMin=${startDate}&timeMax=${endDate}&maxResults=10`
    )
      .then((res) => res.json())
      .then((data) => {
        const eventsData = data.items.map((event) => ({
          id: event.id,
          name: event.summary,
          date: event.start.dateTime || event.start.date,
          location: event.location,
          isAllDay: !event.start.dateTime,
        }));

        setEvents(eventsData);
      })
      .catch((error) => {
        console.error("Error fetching events", error);
      });
  }, []);

  const filteredEvents =
    type === "upcoming"
      ? events.filter((event) => new Date(event.date) >= new Date())
      : events.filter((event) => new Date(event.date) < new Date());

  return (
    <div
      className={`flex ${
        type === "upcoming"
          ? "justify-around p-5"
          : "justify-center w-full font-nunito text-xl font-extrabold my-10"
      }`}
    >
      {filteredEvents.length ? (
        filteredEvents
          .slice(type === "upcoming" ? 0 : -6)
          .map((event, index) => (
            <Event
              key={event.id || index}
              name={event.name}
              month={moment(event.date).format("MMM").toUpperCase()}
              day={moment(event.date).format("DD")}
              location={event.location}
            />
          ))
      ) : (
        <div className="text-center text-black">
          {type === "upcoming"
            ? "No upcoming events, please check back later!"
            : "No past events found."}
        </div>
      )}
    </div>
  );
};

export default Events;
