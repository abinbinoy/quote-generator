import { createBrowserRouter } from "react-router-dom";
import BookMark from "../pages/bookmark/BookMark";
import Home from "../pages/home/Home"
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/bookmark",
    element: <BookMark/>
  },
]);
