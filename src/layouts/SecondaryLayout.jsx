import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import SecondaryNav from "../components/secondaryNav";

const SecondaryLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <SecondaryNav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default SecondaryLayout;
