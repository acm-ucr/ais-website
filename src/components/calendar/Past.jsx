import React, { useEffect, useState } from "react";

const Event = ({ name, date, location }) => {
  return (
    <div className="font-nunito border rounded-lg border-black shadow-sm shadow-black py-2.5">
      <div className="font-extrabold text-xl text-center pt-1 px-2">{name}</div>
      <div className="font-semibold text-base text-center pt-1 px-2">
        {date} |{" "}
      </div>
      <div className="font-semibold text-base text-center pt-1 px-2">
        {location}
      </div>
    </div>
  );
};

function pastFilter(item) {
  const date = new Date();
  const d = new Date(item.end.dateTime);
  return d < date;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayOfWeek = daysOfWeek[date.getUTCDay()];
  const month = months[date.getUTCMonth()];
  const day = date.getUTCDate();

  // Add suffix to the day (e.g., "1st", "2nd", "3rd", "4th", etc.)
  const daySuffix = (day) => {
    if (day > 3 && day < 21) return `${day}th`;
    switch (day % 10) {
      case 1:
        return `${day}st`;
      case 2:
        return `${day}nd`;
      case 3:
        return `${day}rd`;
      default:
        return `${day}th`;
    }
  };

  return `${dayOfWeek} ${month} ${daySuffix(day)}`;
}

const Past = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  let filteredDates;

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!data) {
    return <p>No data</p>;
  }
  if (data) {
    filteredDates = data.items.filter((item, index) => pastFilter(item));
  }

  return (
    <div className="">
      <div className="ml-[270px] justify-center w-full font-nunito text-xl font-extrabold">
        2023-2024
      </div>
      <div className="flex justify-center gap-24 w-full">
        {filteredDates
          .slice(filteredDates.length - 3, filteredDates.length)
          .map((item, index) => (
            <Event
              name={item.summary}
              date={formatDate(item.start.dateTime)}
              location={item.location}
              key={index}
            />
          ))}
      </div>
    </div>
  );
};

export default Past;
