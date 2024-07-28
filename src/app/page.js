import About from "@/components/About";
import Join from "@/components/Join";
import Landing from "@/components/Landing";
import Placement from "@/components/Placement";
import Values from "@/components/Values";

const Home = () => {
  return (
    <div className="flex flex-col gap-5">
      <Landing />
      <About />
      <Values />
      <Join />
      <Placement />
    </div>
  );
};

export default Home;
