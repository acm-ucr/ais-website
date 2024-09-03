import About from "@/components/about/About";
import Landing from "@/components/Landing";
import Placement from "@/components/Placement";
import Values from "@/components/about/Values";
import Events from "@/components/events/Events";
const Home = () => {
  return (
    <div className="flex flex-col gap-5">
      <Landing />
      <About />
      <Values />
      <Events type="both" />
      <Placement />
    </div>
  );
};

export default Home;
