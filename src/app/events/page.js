import Header from "@/components/HeaderComponent";
import Offer from "@/components/events/Offer";
import Wrapped from "@/components/events/WrappedEvents";

const page = () => {
  return (
    <div>
      <Header header={"EVENTS"} />
      <Offer />
      <Wrapped />
    </div>
  );
};

export default page;
