const CustomEvent = ({ event }) => {
  return (
    <div className="font-nunito md:text-xs sm:text-[10px] text-[7px] flex justify-center">
      <div className="m-0">
        {!event.allDay &&
          new Date(event.start).toLocaleTimeString(navigator.language, {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          })}
      </div>
    </div>
  );
};

export default CustomEvent;
