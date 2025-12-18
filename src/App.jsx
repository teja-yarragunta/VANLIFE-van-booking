import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
} from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import VansPage, { loader as vansLoader } from "./pages/vans/VansPage";
import VanDetails, { loader as vanDetailLoader } from "./pages/vans/VanDetails";

import "./utils/server"; // mock backend server (not actual backend)

import Dashboard from "./pages/Admin/Dashboard";
import Income from "./pages/Admin/Income";
import Reviews from "./pages/Admin/Reviews";
import AdminLayout from "./components/AdminLayout";
import AdminVansPage, {
  loader as adminVansLoader,
} from "./pages/Admin/AdminVansPage";
import AdminVanDetails, {
  loader as adminVanDetailLoader,
} from "./pages/Admin/AdminVanDetails";
import AdminVanInfo from "./pages/Admin/AdminVanInfo";
import AdminVanPricing from "./pages/Admin/AdminVanPricing";
import AdminVanPhotos from "./pages/Admin/AdminVanPhotos";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Error from "./components/Error";
import { requireAuth } from "./utils/authCheck";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      {/* Layout don't need path, if there is no path, it's gonna render Layout for all the children paths */}
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="login" element={<Login />} />
      <Route
        path="vans"
        element={<VansPage />}
        loader={vansLoader}
        // errorElement={<Error />}
      />
      <Route
        path="vans/:id"
        element={<VanDetails />}
        loader={vanDetailLoader}
      />
      {/* Admin */}
      <Route path="admin" element={<AdminLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={async () => await requireAuth()}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async () => await requireAuth()}
        />
        <Route
          path="vans"
          element={<AdminVansPage />}
          loader={adminVansLoader}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async () => await requireAuth()}
        />
        <Route
          path="vans/:id"
          element={<AdminVanDetails />}
          loader={adminVanDetailLoader}
        >
          <Route
            index
            element={<AdminVanInfo />}
            loader={async () => {
              return null;
            }}
          />
          <Route
            path="pricing"
            element={<AdminVanPricing />}
            loader={async () => {
              return null;
            }}
          />
          <Route
            path="photos"
            element={<AdminVanPhotos />}
            loader={async () => {
              return null;
            }}
          />
        </Route>
      </Route>
      {/* page not found */}
      <Route path="*" element={<PageNotFound />} />
    </Route>
    //  {/* (:id) - router parameters/route params says that there'll be something there, that can be anything like 1,2,something */}
    //     {/* http://localhost:5173/vans/2 (or anything like) http://localhost:5173/vans/something%20else */}
    //     {/* route component can only have another routes as children */}
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
