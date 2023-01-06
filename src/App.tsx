import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

import Hackathon from "./pages/Hackathon";
import Home from "./pages/Home";
import I2C from "./pages/I2C";
import WDC from "./pages/WDC";
import UnderDevelopment from "./pages/UnderDevelopment";

import DonorDarah from "./pages/DonorDarah";
import FoodBazaar from "./pages/FoodBazaar";
import Seminar from "./pages/Seminar";
import Sponsor from "./pages/Sponsor";

import Error404 from "./pages/Error404";

export default function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/i2c" element={<I2C />} />
          <Route path="/wdc" element={<WDC />} />
          <Route path="/hackathon" element={<UnderDevelopment />} />
          <Route path="/seminar" element={<UnderDevelopment />} />
          <Route path="/donor-darah" element={<UnderDevelopment />} />
          <Route path="/food-bazaar" element={<UnderDevelopment />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}