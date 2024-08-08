import AboutLanding from "@/components//about/AboutLanding";
import About from "@/components/about/About";
import Join from "@/components/about/Join";
import Values from "@/components/about/Values";

const page = () => {
  return (
    <div>
      <AboutLanding header={"ABOUT US"} />
      <About />
      <Values />
      <Join />
    </div>
  );
};

export default page;
