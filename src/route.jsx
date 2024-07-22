import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/Index"
import Index from "./Pages/Dashboard/index";
import Inbox from "./Pages/Inbox/index";
import Projects from "./Pages/Dashboard/Profile/AdvanceProfile/Projects";
import Experience from "./Pages/Dashboard/Profile/AdvanceProfile/Experience";
import Education from "./Pages/Dashboard/Profile/AdvanceProfile/Education";
import Achivements from "./Pages/Dashboard/Profile/AdvanceProfile/Achivements";
import Template from "./Pages/Dashboard/Template";

import Main from "./Pages/Dashboard/main";
const routes = createBrowserRouter([
  {
    path:"/",
    element:<LandingPage/>
  },
  {
    path: "/dashboard",
    element: <Main />,
    children: [
      {
        path: "/dashboard/projects",
        element: <Projects />,
      },
      {
        path: "/dashboard/experience",
        element: <Experience />,
      },
      {
        path: "/dashboard/education",
        element: <Education />,
      },
      {
        path: "/dashboard/achivements",
        element: <Achivements />,
      },
    ],
  },
  {
    path: "/dashboard/templates",
    element: <Template />,
  },{
    path:"/inbox",
    element:<Inbox/>
  }
]);

export default routes;

// const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <div />,
//       children: [
//         {
//           path: "team",
//           element: <div />,
//         },
//       ],
//     },
//   ]);
