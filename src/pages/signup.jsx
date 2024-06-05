import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Signup = () => {
  const { createUserUsingEmailPass, profileUpdate } = useContext(AuthContext);
  // const [state, setState] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [userData, SetUserData] = useState({
    name: "",
    url: "",
    email: "",
    password: "",
  });
  const [error, SetError] = useState({
    name: "",
    url: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    if (e.target.name === "confirmpassword") {
      if (userData.password === e.target.value) {
        SetError((curr) => {
          return { ...curr, password: "" };
        });

        // setState(false);
      } else {
        SetError((curr) => {
          return { ...curr, password: "password incorrect" };
        });

        // setState(true);
      }
    } else {
      SetUserData((curr) => {
        return { ...curr, [e.target.name]: e.target.value };
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);

    createUserUsingEmailPass(userData.email, userData.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateInfo();
        // console.log(from);
        const currentUser = {
          email: user.email,
        };
        // fetch("", {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(currentUser),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     console.log(data);
        //     localStorage.setItem("json-token", data.token);
        //   });
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateInfo = () => {
    profileUpdate({ displayName: userData.name, photoURL: userData.url })
      .then(alert("profile updated!"))
      .catch((err) => console.log(err));
  };

  return (
    <div className=" h-[69vh] flex flex-col items-center static">
      <div className="w-full max-w-sm p-6 mx-auto  rounded-lg shadow-md bg-white-800 text-black">
        <form onSubmit={handleSubmit}>
          <h2 className="text-xl text-red-400 ">{error.name}</h2>
          <div className="relative flex items-center mt-8">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>

            <input
              required
              onChange={handleInput}
              defaultValue={userData.name}
              type="text"
              name="name"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11   border-gray-600 focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Username"
            />
          </div>

          <div className="relative flex items-center mt-8">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 w-6 h-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
            </span>

            <input
              required
              onChange={handleInput}
              type="text"
              name="url"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11   border-gray-600 focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Profile Photo URL"
            />
          </div>

          <div className="relative flex items-center mt-6">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>

            <input
              required
              onChange={handleInput}
              defaultValue={userData.email}
              type="email"
              name="email"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11   border-gray-600 focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Email address"
            />
          </div>

          <div className="relative flex items-center mt-4">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>

            <input
              required
              onChange={handleInput}
              name="password"
              type="password"
              className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg   border-gray-600 focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Password"
            />
          </div>

          <div className="relative flex items-center mt-4">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>

            <input
              required
              onChange={handleInput}
              name="confirmpassword"
              type="password"
              className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg   border-gray-600 focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Confirm Password"
            />
          </div>
          <h2 className="text-xl text-red-400 ">{error.password}</h2>
          <div className="mt-6">
            <button
              // disabled={state}
              type="submit"
              className={
                // state
                // ? "bg-blue-500 w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform rounded-lg blur-sm"
                //   :
                "w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              }
            >
              Sign Up
            </button>

            <div className="mt-6 text-center ">
              <Link
                to="/login"
                className="text-sm text-blue-500 hover:underline hover:text-blue-400"
              >
                Already have an account?
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
