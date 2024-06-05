import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
