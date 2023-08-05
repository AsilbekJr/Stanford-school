import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Menu/Home";
import Navbar from "./Components/Navbar";
import Facilities from "./Components/Menu/Facilities";
import ContactUs from "./Components/Menu/ContactUs";
import { useLocation } from "react-router-dom";
import NavbarMenu from "./Components/NavbarMenu";
import Footer from "./Components/Footer";
const App = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location, displayLocation]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <div
      className={`${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setTransistionStage("fadeIn");
          setDisplayLocation(location);
        }
      }}
    >
      {splitLocation[1] === "" ? <Navbar /> : <NavbarMenu />}
      <Routes location={displayLocation}>
        <Route path="/" element={<Home />} />
        <Route path="facilities" element={<Facilities />} />
        <Route path="contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
