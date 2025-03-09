import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import AddReview from "../Pages/AddReview";
import AllReviews from "../Pages/AllReviews";
import Login from "../Pages/Login";
import SignIn from "../Pages/SignIn";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../Components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/add-review",
        element: (
          <PrivateRoutes>
            <AddReview />
          </PrivateRoutes>
        ),
      },
      {
        path: "/all-reviews",
        element: <AllReviews />,
        loader: () => fetch("http://localhost:5000/reviews"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignIn />,
      },
    ],
  },
]);

export default router;
