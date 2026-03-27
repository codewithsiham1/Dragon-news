import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import Home from "../pages/Home";
import Loginpage from "../pages/Loginpage";
import Registerpage from "../pages/Registerpage";
import Authlayout from "../layouts/Authlayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/news.json"),
      },
    ],
  },
  {
    path: "/auth",
    element: <Authlayout></Authlayout>,
    children:[
      {
        path:"/auth/login",
        element:<Loginpage></Loginpage>
      },
      {
        path:"/auth/regester",
        element:<Registerpage></Registerpage>
      }
    ]
  },
  {
    path: "/news",
    element: <h2>News Layout</h2>,
  },
  {
    path: "/*",
    element: <h2>Error404</h2>,
  },
]);

export default router;
