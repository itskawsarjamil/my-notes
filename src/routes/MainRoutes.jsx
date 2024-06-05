import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import DashboardLayout from "../layouts/DashboardLayout";
import Profile from "../pages/dashboard/Profile";
import Statistics from "../pages/dashboard/Statistics";
import Login from "../pages/login";
import Signup from "../pages/signup";
import MyNotes from "../pages/Notes/MyNotes";
import SecondaryLayout from "../layouts/SecondaryLayout";
import Blogs from "../components/home/Blogs";
import NotePageLayout from "../layouts/NotePageLayout";
import PrivateRoutes from "./PrivateRoutes";
import Cooking from "../pages/Cooking";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "",
    element: <SecondaryLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/notes",
    element: (
      <PrivateRoutes>
        <NotePageLayout />
      </PrivateRoutes>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "all-notes",
        element: <MyNotes />,
      },
      {
        path: "fav-notes",
        element: <Cooking />,
      },
      {
        path: "pinned-notes",
        element: <Cooking />,
      },
      {
        path: "incomplete-notes",
        element: <Cooking />,
      },
      {
        path: "completed-notes",
        element: <Cooking />,
      },
      {
        path: "trash-notes",
        element: <Cooking />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "statistics",
        element: <Cooking />,
      },
    ],
  },
]);
