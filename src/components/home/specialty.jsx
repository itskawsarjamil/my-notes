import hero2 from "../../assets/hero2.png";
import CustomButton from "../CustomButton";
const Specialty = () => {
  return (
    <div id="specialty" className="my-10">
      <div className="grid grid-cols-2 font-bold text-start gap-5">
        <div>
          <img src={hero2} alt="" />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold">
            Get the Micronet Advantage. Our stats speak for temselves.
          </h1>
          <p className="font-semibold">
            It is a long established fact that a reader will be distracted. It
            is a long established fact that a reader will be distracted.
          </p>
          <div className="flex gap-4">
            <div className="w-2/5">
              <h4 className="text-xl">Intense research</h4>
              <p className="font-semibold">
                It is a long established fact that a reader will be distracted.
              </p>
            </div>
            <div className="text-[#d88531] text-2xl border text-wrap p-4 rounded-xl border-[#d88531] w-1/5 text-center">
              5 Active Projects
            </div>
            <div className="">
              <h4 className="text-xl">Audience segmentation</h4>
              <p className="font-semibold">
                It is a long established fact that a reader will be distracted.
              </p>
            </div>
          </div>
          <div className="p-3 border w-full flex justify-between rounded-lg">
            <input
              type="text"
              className=""
              placeholder="Enter email to subscribe"
            />
            <CustomButton text={"Subscribe"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialty;
