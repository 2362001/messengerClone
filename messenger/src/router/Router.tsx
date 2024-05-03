import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login";
import Messenger from "../pages/messenger/Messenger";
import Home from "../pages/home/Home";

// const { user } = useContext(AuthContext);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/messenger",
    element: <Messenger />,
  },
]);

export default router;
