import Banner from "../components/home/banner";
import Blogs from "../components/home/Blogs";
import Features from "../components/home/features";
import Feedback from "../components/home/feedback";
import Specialty from "../components/home/specialty";
import Teams from "../components/home/Teams";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-15">
      <Banner />
      <Features />
      <Specialty />
      <Feedback />
      <Teams />
      <Blogs />
    </div>
  );
};

export default HomePage;
