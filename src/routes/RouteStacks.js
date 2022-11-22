import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "@/src/routes/PrivateRoute";
import { Navigate } from "react-router-dom";
import URLS from "@/src/enums/urls";

// pages
const Page404 = lazy(() => import("../pages/404"));
const Home = lazy(() => import("../pages/Home"));
const Profile = lazy(() => import("../pages/Profile"));
const DataPenduduk = lazy(() => import("../pages/DataPenduduk"));
const DetailDataPenduduk = lazy(() => import("../pages/DetailDataPenduduk"));
const Auth = lazy(() => import("../pages/Auth"));
const DetailUser = lazy(() => import("../pages/DetailUser"));

const RouteStacks = () => {
  const loggedIn = () => {
    const token = localStorage.getItem("token") || "";
    return token.length > 0;
  };
  const loggedOut = () => {
    const token = localStorage.getItem("token") || "";
    return token === "";
  };

  return (
    <Routes>
      <Route exact path={URLS.LANDING} element={<Navigate to={URLS.HOME} />} />

      <Route path={URLS.HOME} element={<Home />} />

      <Route
        path={URLS.PROFILE}
        element={
          <PrivateRoute
            path={URLS.PROFILE}
            allow={[loggedIn]}
            navigateTo={URLS.AUTH}
          >
            <Profile />
          </PrivateRoute>
        }
      />
      <Route
        path={`${URLS.PROFILE}/:username`}
        element={
          <PrivateRoute
            path={`${URLS.PROFILE}/:username`}
            allow={[loggedIn]}
            navigateTo={URLS.LOGIN}
          >
            <DetailUser />
          </PrivateRoute>
        }
      />
      <Route
        path={URLS.DATA_PENDUDUK}
        element={
          <PrivateRoute
            path={URLS.DATA_PENDUDUK}
            allow={[loggedIn]}
            navigateTo={URLS.AUTH}
          >
            <DataPenduduk />
          </PrivateRoute>
        }
      />
      <Route
        path={`${URLS.DATA_PENDUDUK}/:username`}
        element={
          <PrivateRoute
            path={`${URLS.DATA_PENDUDUK}/:userId`}
            allow={[loggedIn]}
            navigateTo={URLS.AUTH}
          >
            <DetailDataPenduduk />
          </PrivateRoute>
        }
      />
      <Route
        path={URLS.AUTH}
        element={
          <PrivateRoute
            path={URLS.AUTH}
            allow={[loggedOut]}
            navigateTo={URLS.PROFILE}
          >
            <Auth />
          </PrivateRoute>
        }
      />

      {/* keep  <Route path="*"> being the last of siblings */}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
export default RouteStacks;
