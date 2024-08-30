import About from "@/components/about/About";
import Join from "@/components/about/Join";
import Values from "@/components/about/Values";
import Header from "@/components/HeaderComponent";

const page = () => {
  return (
    <div>
      <Header header={"ABOUT US"} />
      <About />
      <Values />
      <Join />
    </div>
  );
};

export default page;
