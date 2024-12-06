import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Create from "../pages/Create";
import Detail from "../pages/Detail";
import Edit from "../pages/Edit";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/:id",
    element: <Detail />,
  },
  {
    path: "/edit/:id",
    element: <Edit />,
  },
]);

export default router;
