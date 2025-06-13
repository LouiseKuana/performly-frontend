import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingMenu from "./components/FloatingMenu";
import BackgroundGrid from "./components/BackgroundGrid";
import './styles/themes.css';
import './styles/components.css';

import Login from "./pages/Login";
import About from "./pages/About";

export default function App() {
  return (
    <>
      <Header />
      <BackgroundGrid>
        <FloatingMenu />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/signin" element={<Login />} />
          {/* <Route path="/project" element={<Project />} /> */}
          {/* <Route path="/linkedin" element={<LinkedInRedirect />} /> */}
        </Routes>
      </BackgroundGrid>
      <Footer />
    </>
  );
}
