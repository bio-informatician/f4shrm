import React, { memo, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ProfilePage from "../pages/Profile";

// import ProtectedRoute from "./protected-route";

const HomePageRoutes = memo(({ path }) => {
  return (
    <Routes>
      <Route path="/Profile" element={<ProfilePage />} />
      <Route
          path="About"
          element={<AboutPage />}
        />
    </Routes>
  );
});

export default (HomePageRoutes);
