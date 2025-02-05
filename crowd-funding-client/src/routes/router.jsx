import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Auth from "../components/Auth";
import Error from "../components/Error/Error";
import UpdateCampaign from "../components/UpdateCampaign";
import Login from "../components/User/Login";
import Register from "../components/User/Register";
import PrivateRoute from "./PrivateRoute";
import Home from "../components/NavItems/Home";
import AllCamping from "../components/NavItems/AllCamping";
import DetailsCamping from "../components/DetailsCamping";
import AddCampaign from "../components/NavItems/AddCampaign";
import MyCampaign from "../components/NavItems/MyCampaign";
import MyDonations from "../components/NavItems/MyDonations";
import Dashboard from "../components/NavItems/Dashboard";
import Rahim from "../components/story/Rahim";
import Amina from "../components/story/Amina";
import Children from "../components/story/Children";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://crowd-funding-server-two.vercel.app/campaign"),
      },
      {
        path: "allcamping",
        element: <AllCamping></AllCamping>,
        loader: () =>
          fetch("https://crowd-funding-server-two.vercel.app/campaign"),
      },
      {
        path: "allcamping/:id",
        element: (
          <PrivateRoute>
            <DetailsCamping></DetailsCamping>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://crowd-funding-server-two.vercel.app/campaign/${params.id}`
          ),
      },
      {
        path: "addcampaign",
        element: (
          <PrivateRoute>
            <AddCampaign></AddCampaign>
          </PrivateRoute>
        ),
      },
      {
        path: "updatecampaign/:id",
        element: (
          <PrivateRoute>
            <UpdateCampaign></UpdateCampaign>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://crowd-funding-server-two.vercel.app/campaign/${params.id}`
          ),
      },
      {
        path: "mycampaign",
        element: (
          <PrivateRoute>
            <MyCampaign></MyCampaign>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://crowd-funding-server-two.vercel.app/campaign"),
      },
      {
        path: "mydonations",
        element: (
          <PrivateRoute>
            <MyDonations></MyDonations>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://crowd-funding-server-two.vercel.app/donation"),
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth></Auth>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/rahim",
    element: <Rahim />,
  },
  {
    path: "/amina",
    element: <Amina />,
  },
  {
    path: "/children",
    element: <Children />,
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;
