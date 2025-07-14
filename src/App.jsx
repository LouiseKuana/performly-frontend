import { Routes, Route } from "react-router-dom";
import "./styles/themes.css";
import "./styles/components.css";

import PrivateRoute from "./components/PrivateRoute.jsx";
import HeaderMenu from "./components/HeaderMenu";
import Footer from "./components/Footer";
import FloatingMenu from "./components/FloatingMenu";
import BackgroundGrid from "./components/BackgroundGrid";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Welcome from "./pages/Welcome";

export default function App() {
  return (
    <>
      <HeaderMenu />
      <BackgroundGrid>
        <FloatingMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/welcome"
            element={
              <PrivateRoute>
                <Welcome />
              </PrivateRoute>
            }
          />
        </Routes>
      </BackgroundGrid>
      <Footer />
    </>
  );
}
