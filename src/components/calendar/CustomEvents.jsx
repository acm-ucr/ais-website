const CustomEvent = ({ event }) => {
  return (
    <div className="border-[6.5px] border-ais-blue-200 rounded-full py-0 md:py-[1px] drop-shadow-[1px_1px_0px_rgba(191,140,225,.70)]">
      <div className=" py-.5 rounded-full font-playfair text-sm flex justify-start p-1 text-black overflow-hidden">
        <p className="whitespace-nowrap m-0">
          {!event.allDay &&
            new Date(event.start).toLocaleTimeString(navigator.language, {
              hour: "2-digit",
              minute: "2-digit",
            })}
          &nbsp;
          {event.summary}
        </p>
      </div>
    </div>
  );
};

export default CustomEvent;
