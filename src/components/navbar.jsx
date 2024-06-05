import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
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
      <div className="navbar-end">
        <Link to={"/login"} className="btn">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
