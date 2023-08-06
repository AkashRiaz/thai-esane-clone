import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Layout/Main";
import About from "../pages/About/About";

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
            }
        ]
    }
  ])

  export default router;