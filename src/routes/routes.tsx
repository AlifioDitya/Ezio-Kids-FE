import LandingPage from "@/pages/landing/LandingPage";
import UnderConstructionPage from "@/pages/UnderConstructionPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/under-construction",
    element: <UnderConstructionPage />,
  },
]);
