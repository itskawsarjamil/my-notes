import { Link, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { MdMenu } from "react-icons/md";

const DashboardLayout = () => {
  const { logOut, setUser } = useAuth();
  // console.log(user);
  const handleLogOut = () => {
    logOut()
      .then((res) => {
        console.log(res, "logout successful");
        setUser(null);
      })
      .catch((e) => console.log(e));
  };
  const sideLinks = (
    <>
      <div>
        <li>
          <Link to={"/dashboard/profile"}>Profile</Link>
        </li>
        <li>
          <Link to={"/dashboard/statistics"}>Statistics</Link>
        </li>
      </div>
      <div>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/notes/all-notes"}>My Notes</Link>
        </li>
      </div>
    </>
  );
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center mt-4">
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="absolute top-5 right-10 btn btn-outline drawer-button lg:hidden"
        >
          <MdMenu />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content font-normal text-lg  flex flex-col justify-between">
          {/* Sidebar content here */}
          {sideLinks}
          <button
            onClick={handleLogOut}
            className="w-full btn font-bold text-white bg-[#d88531]"
          >
            LogOut
          </button>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
