import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutDefault from "../Config/Layout/LayoutDefault";
import Home from "../pages/Home";
import Notes from "../pages/Notes";
import Login from "../pages/Login";
import CreateAccount from "../pages/Create";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cadastro",
    element: <LayoutDefault page={<CreateAccount />} />,
  },
  {
    path: "/login",
    element: <LayoutDefault page={<Login />} />,
  },
  {
    path: "/recados",
    element: <Notes />,
  },
]);
const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
