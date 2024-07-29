import AboutLanding from "@/components//about/AboutLanding";
import About from "@/components/About";
import Join from "@/components/Join";
import Values from "@/components/Values";

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
