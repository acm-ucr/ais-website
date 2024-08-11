import About from "@/components/about/About";
import Join from "@/components/about/Join";
import Landing from "@/components/Landing";
import Placement from "@/components/Placement";
import Values from "@/components/about/Values";

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
