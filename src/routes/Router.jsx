import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Layout/Main";
import About from "../pages/About/About";
import Gallery from "../pages/Gallery/Gallery";
import JoinOurTeam from "../pages/JoinOurTeam/JoinOurTeam";
import Contact from "../pages/Contact/Contact";

  const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/gallery',
                element:<Gallery></Gallery>
            },
            {
                path:'/joinOurTeam',
                element:<JoinOurTeam></JoinOurTeam>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/joinOurTeam',
                element:<JoinOurTeam></JoinOurTeam>
            }
        ]
    }
  ])

  export default router;