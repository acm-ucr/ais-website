import AboutLanding from "@/components//about/AboutLanding";
import Alumnis from "@/components/alumni/Alumnis";
import Placement from "@/components/Placement";

const page = () => {
  return (
    <div className="flex flex-col relative gap-10">
      <AboutLanding header={"OUR ALUMNI"} />
      <Alumnis />
      <Placement />
    </div>
  );
};

export default page;
