import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { logOut, user, setUser } = useAuth();
  // console.log(user);
  const handleLogOut = () => {
    logOut()
      .then((res) => {
        console.log(res, "logout successful");
        setUser(null);
      })
      .catch((e) => console.log(e));
  };
  const NavLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <a href="/#features">Features</a>
      </li>
      <li>
        <a href="#specialty">Specialty</a>
      </li>
      <li>
        <a href="#feedback">Feedback</a>
      </li>
      <li>
        <a href="#teammembers">Team Members</a>
      </li>
      <li>
        <a href="#blogs">Blogs</a>
      </li>

      <li>
        <NavLink to={"/notes/all-notes"}>My Notes</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard/profile"}>Dashboard</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 sticky top-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {NavLinks}
          </ul>
        </div>
        <Link to={"/"} className="font-extrabold btn btn-ghost text-4xl">
          myNotes
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
      </div>
      {user ? (
        <div className="navbar-end">
          <div className=" dropdown dropdown-bottom dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="w-12 rounded-full overflow-hidden "
            >
              <img
                src={
                  user && user.photoURL
                    ? user.photoURL
                    : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                }
              />
            </div>

            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-fit "
            >
              <li>
                <Link to={`/dashboard`}>
                  <button className="text-nowrap"> View Profile</button>
                </Link>
              </li>
              <li>
                <button onClick={handleLogOut}> Log Out</button>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="navbar-end">
          <Link to={"/login"} className="btn">
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
