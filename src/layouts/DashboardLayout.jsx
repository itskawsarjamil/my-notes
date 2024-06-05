import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
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
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
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
          <button className="w-full btn font-bold text-white bg-[#d88531]">
            LogOut
          </button>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
