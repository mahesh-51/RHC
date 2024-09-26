import { createBrowserRouter, RouteObject } from "react-router-dom";
import MasterLayout from "../component/MasterLayout";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Dashboard from "../admin/dashboard";
import DailyCase from "../admin/dailyCases/dailtCases";
import CaseDetail from "../admin/caseDetail";
import Court from "../admin/courts/court";
import UploadFiles from "../admin/uploadFiles/uploadFilles";
import AddCourt from "../admin/courts/add";
import AddUploadFiles from "../admin/uploadFiles/add";
import AddDailyCases from "../admin/dailyCases/add";
import AdminPanelLayout from "../admin/layout";
import ProtectedRoute from "../auth/protectedRoute";

const routes: RouteObject[] = [
  {
    path: "/",
    // element: (
    //   <ProtectedRoute>
    //     <AdminPanelLayout />
    //   </ProtectedRoute>
    // ),
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
        path: "/add-case",
        element: <AddDailyCases />,
      },
      {
        path: "/case-detail",
        element: <CaseDetail />,
      },
      {
        path: "/court-list",
        element: <Court />,
      },
      {
        path: "/add-court",
        element: <AddCourt />,
      },
      {
        path: "/upload-files",
        element: <UploadFiles />,
      },
      {
        path: "/add-upload-files",
        element: <AddUploadFiles />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);
export default router;
