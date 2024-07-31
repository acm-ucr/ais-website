import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const Upcoming = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const startDate = moment().subtract(10, "weeks").toISOString();
      const endDate = moment().add(10, "weeks").toISOString();

      try {
        const response = await axios.get(
          `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime&timeMin=${startDate}&timeMax=${endDate}&maxResults=10`
        );

        const calendarEvents = response.data.items.map((event) => ({
          id: event.id,
          name: event.summary,
          date: event.start.dateTime || event.start.date,
          location: event.location,
          isAllDay: !event.start.dateTime,
        }));

        setEvents(calendarEvents);
      } catch (error) {
        console.error("Error fetching events", error);
      }
    };

    fetchEvents();
  }, []);

  const upcomingEvents = events.filter(
    (event) => new Date(event.date) >= new Date()
  );

  return (
    <div className="flex justify-around p-5">
      {upcomingEvents.length ? (
        upcomingEvents.map((event) => (
          <div
            key={event.id}
            className="w-96 border border-black rounded-lg p-5 text-center"
          >
            <div className="text-black font-bold">{event.name}</div>
            <div className="text-black">
              {moment(event.date).format("MMMM D, YYYY")}
            </div>
            <div className="text-black">{event.location}</div>
          </div>
        ))
      ) : (
        <div className="text-center text-black">
          No upcoming events, please check back later!
        </div>
      )}
    </div>
  );
};

export default Upcoming;
