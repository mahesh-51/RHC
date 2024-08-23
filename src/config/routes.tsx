import { createBrowserRouter, RouteObject } from "react-router-dom";
import MasterLayout from "../component/MasterLayout";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Dashboard from "../admin/dashboard";
import DailyCase from "../admin/dailtCases";
import CaseDetail from "../admin/caseDetail";
import Court from "../admin/court";
import UploadFiles from "../admin/uploadFilles";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MasterLayout />,
    children: [
      {
        index: true, // This marks it as the default child route
        element: <Home/>,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/cases",
        element: <DailyCase />,
      },
      {
        path: "/case-detail",
        element: <CaseDetail />,
      },
      {
        path: "/courts",
        element: <Court />,
      },
      {
        path: "/upload-files",
        element: <UploadFiles />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);
export default router;
