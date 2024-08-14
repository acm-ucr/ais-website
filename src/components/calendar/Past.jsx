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

const Past = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const startDate = moment().subtract(10, "weeks").toISOString();
    const endDate = moment().add(10, "weeks").toISOString();
    fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=starttime&timeMin=${startDate}&timeMax=${endDate}&maxResults=10`
    )
      .then((res) => res.json())
      .then((data) => {
        const events = data.items.map((a) => {
          a.start = a.start.dateTime
            ? new Date(a.start.dateTime)
            : new Date(a.start.date);
          a.end = a.end.dateTime
            ? new Date(a.end.dateTime)
            : new Date(a.end.date);
          a.isAllDay = !a.start.dateTime;
          return a;
        });

        setData(events);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const past = data.filter((e) => e.start <= new Date());

  return (
    <div className="flex justify-center w-full font-nunito text-xl font-extrabold">
      <div className="grid justify-center gap-10 grid-cols-3 w-8/12">
        {past.slice(-6).map((item, index) => (
          <Event
            name={item.summary}
            month={item.start
              .toLocaleDateString("en-US", { month: "short" })
              .toUpperCase()}
            day={item.start.toLocaleDateString("en-US", {
              day: "2-digit",
            })}
            location={item.location}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Past;
