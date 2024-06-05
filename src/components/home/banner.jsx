import bannerImg from "../../assets/banner.jpg";
import CustomButton from "../CustomButton";
const Banner = () => {
  return (
    <div className="grid grid-cols-2 space-y-10 items-center">
      <div className="text-start flex flex-col gap-4 items-start">
        <h1 className="text-6xl font-bold">
          Manage work <span className="text-[#d88531]">Effeciently</span>
        </h1>
        <h3 className="text-3xl font-bold">
          Plan, Track and Organise your work.
        </h3>
        <h5 className="font-semibold">
          An Intranet platform to Manage projects, organise work and focus on
          what&apos;s important.
        </h5>
        <CustomButton text={"Learn More"} />
      </div>
      <div className="">
        <img className="h-full w-full" src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
