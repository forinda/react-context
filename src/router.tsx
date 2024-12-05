import { createBrowserRouter } from "react-router-dom";
import Admin from "./pages/admin";
import Profile from "./pages/profile";
import Stats from "./pages/stats";
import DashboardLayout from "./layouts/dashboard-layout";
import LoginPage from "./pages/login";
import Home from "./pages/home";
import NotFound from "./pages/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Stats />,
      },
      {
        path: "/dashboard/admin",
        element: <Admin />,
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
    ],
  },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
