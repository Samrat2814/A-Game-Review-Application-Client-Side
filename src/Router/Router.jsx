import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import AddReview from "../Pages/AddReview";
import AllReviews from "../Pages/AllReviews";
import Login from "../Pages/Login";
import SignIn from "../Pages/SignIn";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../Components/Error";
import MyReview from "../Pages/MyReview";
import GameWatchList from "../Pages/GameWatchList";
import HomePage from "../Pages/HomePage";
import PageDetails from "../Pages/PageDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
         <HomePage/>
        ),
        loader: () => fetch("http://localhost:5000/reviews"),
      },
      {
        path: "/add-review",
        element: (
          <PrivateRoutes>
            <AddReview />
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-reviews",
        element: (
          <PrivateRoutes>
            <MyReview/>
          </PrivateRoutes>
        ),
      },
      {
        path: "/game-watch-list",
        element: (
          <PrivateRoutes>
            <GameWatchList/>
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
      {
        path: "/page-details/:_id",
        element: <PageDetails/>,
        loader:({params})=> fetch(`http://localhost:5000/reviews/${params._id}`)
      },
    ],
  },
]);

export default router;
