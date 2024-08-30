import Alumnis from "@/components/alumni/Alumnis";
import Placement from "@/components/Placement";
import Header from "@/components/HeaderComponent";


const page = () => {
  return (
    <div className="flex flex-col relative gap-10">
      <Header header={"OUR ALUMNI"} />
      <Alumnis />
      <Placement />
    </div>
  );
};

export default page;
