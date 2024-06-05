import FeatureCard from "./featureCard";

const Features = () => {
  return (
    <div id="features" className=" bg-slate-50 p-20">
      <div className="grid grid-cols-2 mb-10">
        <h2 className="text-4xl text-start font-bold flex items-center">
          See how Micronet can help you improve your systems & productivity.
        </h2>
        <h5 className="text-xl text-start flex items-center">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </h5>
      </div>
      <div className="flex gap-5">
        <FeatureCard bgColor={"#e3defc"} headingText={"Task Management"} />
        <FeatureCard bgColor={"#dffdec"} headingText={"Team Collaboration"} />
        <FeatureCard bgColor={"#fceedf"} headingText={"Project Planning"} />
      </div>
    </div>
  );
};

export default Features;
