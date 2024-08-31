import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CustomToolbar = ({ onNavigate, date }) => {
  return (
    <div className="flex justify-center">
      <div className="absolute z-50 bg-white w-2/3 md:w-1/3 m-auto border rounded-full md:py-1 -translate-y-20 overflow-visible">
        <div className="py-2 ring-ais-blue-100 ring-2 ring-offset-[0.5px] rounded-full flex justify-center items-center md:flex-row">
          <IoIosArrowBack
            onClick={() => {
              onNavigate("PREV");
            }}
            className="hover:cursor-pointer text-3xl"
          />
          <div>
            <p className="m-0 text-xl md:text-3xl font-nunito font-bold ">
              {date.toLocaleString("default", { month: "short" })}{" "}
              {date.getFullYear()}
            </p>
          </div>
          <IoIosArrowForward
            onClick={() => onNavigate("NEXT")}
            className="hover:cursor-pointer text-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomToolbar;
