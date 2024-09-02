"use client";
import React, { useEffect, useState } from "react";
import moment from "moment";
import Loading from "../Loading";
import Title from "../Title";
import { motion } from "framer-motion";

const Event = ({ name, month, day, location, index }) => {
  return (
    <div className="hover:scale-105 transition-transform">
      <motion.div
        className="font-nunito border rounded-lg border-black shadow-sm shadow-black py-2.5"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.2, duration: 0.5 }}
      >
        <div className="font-extrabold text-xl text-center pt-1 px-2">
          {name}
        </div>
        <div className="font-semibold text-base text-center pt-1 px-2">
          {month} {day}
        </div>
        <div className="font-semibold text-base text-center pt-1 px-2">
          {location}
        </div>
      </motion.div>
    </div>
  );
};

const Events = ({ type }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching events", error);
        setLoading(false);
      });
  }, []);

  const filteredEvents = (() => {
    if (type === "upcoming") {
      return events.filter((event) => new Date(event.date) >= new Date());
    } else if (type === "past") {
      return events.filter((event) => new Date(event.date) < new Date());
    } else if (type === "both") {
      const pastEvents = events
        .filter((event) => new Date(event.date) < new Date())
        .slice(-3);
      const upcomingEvents = events
        .filter((event) => new Date(event.date) >= new Date())
        .slice(0, 3);
      return [...pastEvents, ...upcomingEvents];
    }
    return [];
  })();

  return (
    <>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-7 font-nunito text-xl font-extrabold my-10 mx-auto">
          {type === "both" && <Title title={"UPCOMING EVENTS"} />}
          {filteredEvents.length ? (
            <div className="grid grid-cols-3 w-9/12 gap-16">
              {filteredEvents
                .slice(type === "upcoming" ? 0 : -6)
                .map((event, index) => (
                  <Event
                    key={index}
                    name={event.name}
                    month={moment(event.date).format("MMM").toUpperCase()}
                    day={moment(event.date).format("DD")}
                    location={event.location}
                    index={index}
                  />
                ))}
            </div>
          ) : (
            <div className="flex justify-center text-center text-black w-full">
              {type === "upcoming" || "both"
                ? "No upcoming events, please check back later!"
                : "No past events found."}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Events;
