import { AiOutlinePlus } from "react-icons/ai";
import reactHtmlParser from "html-react-parser";

const Modal = ({ event, setEvent }) => {
  return (
    <div className="font-nunito fixed top-[56%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75vw] md:w-[50vw] z-10 bg-ais-blue-200 text-white rounded-xl">
      <div className={`flex justify-between items-center ${event.color}`}>
        <p className={" m-0 py-2 md:py-3 px-3 md:px-4 text-lg md:text-2xl"}>
          {event.summary}
        </p>

        <div className="absolute right-2 md:py-3 px-12 md:px-12 text-lg md:text-2xl">
          {event.allDay
            ? "All Day"
            : new Date(event.start).toLocaleTimeString(navigator.language, {
                hour: "2-digit",
                minute: "2-digit",
              }) +
              " - " +
              new Date(event.end).toLocaleTimeString(navigator.language, {
                hour: "2-digit",
                minute: "2-digit",
              })}
        </div>

        <AiOutlinePlus
          onClick={() => setEvent(null)}
          className="rotate-45 p-0 hover:scale-110 duration-300 hover:cursor-pointer text-3xl m-3"
        />
      </div>
      <div className="p-3">
        <p className="m-0 pl-2">{event.location}</p>

        <div className="md:text-lg text-sm p-2">
          {event.description ? reactHtmlParser(event.description) : " "}
        </div>
      </div>
    </div>
  );
};

export default Modal;
