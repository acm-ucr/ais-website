import AboutLanding from "@/components/about/AboutLanding";
import Offer from "@/components/calendar/Offer";
import Wrapped from "@/components/calendar/WrappedEvents";

const page = () => {
  return (
    <div>
      <AboutLanding header={"EVENTS"} />
      <Offer />
      <Wrapped />
    </div>
  );
};

export default page;
