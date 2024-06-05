import { Link, Outlet } from "react-router-dom";
import { BsHeartArrow } from "react-icons/bs";

const NotePageLayout = () => {
  const sideLinks = (
    <>
      <div>
        <li>
          <Link to={"/notes/all-notes"}>
            <BsHeartArrow />
            All Notes
          </Link>
        </li>
        <li>
          <Link to={"/notes/fav-notes"}>
            <BsHeartArrow />
            Favorite Notes
          </Link>
        </li>
        <li>
          <Link to={"/notes/completed-notes"}>
            <BsHeartArrow />
            Completed Notes
          </Link>
        </li>
        <li>
          <Link to={"/notes/incomplete-notes"}>
            <BsHeartArrow />
            Incomplete Notes
          </Link>
        </li>

        <li>
          <Link to={"/notes/pinned-notes"}>
            <BsHeartArrow />
            Pinned Notes
          </Link>
        </li>
        <li>
          <Link to={"/notes/trash-notes"}>
            <BsHeartArrow />
            Trash
          </Link>
        </li>
      </div>
      <div>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/dashboard/profile"}>Dashboard</Link>
        </li>
      </div>
    </>
  );
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center p-10">
        {/* Page content here */}
        {/* <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden mb-5"
        >
          Open drawer
        </label> */}
        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-60 min-h-full text-base-content font-normal text-md  flex flex-col justify-between bg-white">
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

export default NotePageLayout;
