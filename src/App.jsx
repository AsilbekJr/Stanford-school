import React from "react";
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

  return (
    <div>
      {splitLocation[1] === "" ? <Navbar /> : <NavbarMenu />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="facilities" element={<Facilities />} />
        <Route path="contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
