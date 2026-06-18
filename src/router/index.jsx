import { createBrowserRouter } from "react-router-dom";

import AdminLayout from "../components/layout/AdminLayout";
import Layout from "../components/layout/Layout";
import AdminCases from "../pages/admin/AdminCases";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminLogin from "../pages/admin/AdminLogin";
import AdminRequests from "../pages/admin/AdminRequests";
import Cases from "../pages/cases";
import CaseDetail from "../pages/cases/CaseDetail";
import Diagnosis from "../pages/diagnosis";
import Home from "../pages/home";
import Landing from "../pages/landing";
import Pricing from "../pages/pricing";
import Reservation from "../pages/reservation";
import Reviews from "../pages/reviews";
import Service from "../pages/service";
import NotFound from "../pages/not-found";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/service", element: <Service /> },
      { path: "/pricing", element: <Pricing /> },
      { path: "/cases", element: <Cases /> },
      { path: "/cases/:slug", element: <CaseDetail /> },
      { path: "/reviews", element: <Reviews /> },
      { path: "/reservation", element: <Reservation /> },
      { path: "/diagnosis", element: <Diagnosis /> },
      { path: "/landing", element: <Landing /> },
    ],
  },
  { path: "/admin/login", element: <AdminLogin /> },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <AdminDashboard /> },
      { path: "reservations", element: <AdminRequests /> },
      { path: "inquiries", element: <AdminRequests /> },
      { path: "cases", element: <AdminCases /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);
