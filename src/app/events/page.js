import AboutLanding from "@/components/about/AboutLanding";
import Offer from "@/components/events/Offer";
import Wrapped from "@/components/events/WrappedEvents";

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
