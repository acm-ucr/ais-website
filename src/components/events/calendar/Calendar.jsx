"use client";
import { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomToolbar from "./CustomToolbar.jsx";
import CustomEvent from "./CustomEvents.jsx";
import CustomHeader from "./CustomHeader.jsx";
import Modal from "./Modal.jsx";
import Title from "../../Title.jsx";

const localizer = momentLocalizer(moment);

const CalendarEvent = () => {
  const [event, setEvent] = useState(null);
  const [events, setEvents] = useState([]);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/calendar/v3/calendars/${
            process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL
          }/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}
          &singleEvents=true&orderBy=startTime&timeMin=${new Date(
            new Date().getTime() - 60 * 60 * 24 * 7 * 10 * 1000
          ).toISOString()}&timeMax=${new Date(
            new Date().getTime() + 60 * 60 * 24 * 7 * 10 * 1000
          ).toISOString()}`
        );

        const offset = new Date().getTimezoneOffset() * 60000;
        const data = await response.json();
        const items = data.items.map((item) => {
          item.allDay = !item.start.dateTime;
          (item.start = item.start.dateTime
            ? new Date(item.start.dateTime)
            : new Date(new Date(item.start.date).getTime() + offset)),
            (item.end = new Date(
              item.end.dateTime || new Date(item.end.date).getTime() + offset
            )),
            (item.hidden = false);

          return item;
        });
        setEvents(items);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="w-full flex justify-center items-center flex-col mt-14 font-nunito">
      <Title text={"Calendar"} />
      <div className="h-[100vh] w-10/12 relative mt-10 my-10 bg-ais-blue-100 rounded-xl z-0 font-nunito ">
        <Calendar
          date={date}
          className="w-full m-0 p-0 text-sm md:text-2xl "
          allDayAccessor="allDay"
          showAllEvents={true}
          events={events}
          localizer={localizer}
          defaultView="month"
          views={["month"]}
          components={{
            event: CustomEvent,
            toolbar: CustomToolbar,
            header: CustomHeader,
          }}
          onNavigate={(newDate) => {
            return setDate(newDate);
          }}
          eventPropGetter={() => {
            return {
              className: `p-0 !active:ring-0 !focus:outline-0 !bg-transparent`,
            };
          }}
          onSelectEvent={(event) => setEvent(event)}
          dayPropGetter={(event) => {
            return {
              className: `${
                new Date(event).toLocaleDateString() ===
                new Date().toLocaleDateString()
                  ? "!bg-opacity-80 !bg-ais-blue-100"
                  : "!bg-transparent"
              }`,
              style: {
                margin: 0,
                padding: 0,
              },
            };
          }}
        />
      </div>
      {event && <Modal event={event} setEvent={setEvent} />}
    </section>
  );
};

export default CalendarEvent;
