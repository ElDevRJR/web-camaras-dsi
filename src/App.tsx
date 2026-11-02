import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { SecurityCamerasPage } from "./pages/SecurityCamerasPage";
import { CameraInstallationPage } from "./pages/CameraInstallationPage";
import { VideoSurveillancePage } from "./pages/VideoSurveillancePage";
import { AnalogIPPage } from "./pages/AnalogIPPage";
import { StructuredCablingPage } from "./pages/StructuredCablingPage";
import { FireSystemsPage } from "./pages/FireSystemsPage";
import { MotionSensorsPage } from "./pages/MotionSensorsPage";
import { IntrusionSystemsPage } from "./pages/IntrusionSystemsPage";
import { PerimeterFencingPage } from "./pages/PerimeterFencingPage";
import { LEDScreensPage } from "./pages/LEDScreensPage";
import { LightingPage } from "./pages/LightingPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { SazonDeLaLenaPage } from "./pages/SazonDeLaLenaPage";
import { AtoXpressPage } from "./pages/AtoXpressPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { DomoticaPage } from "./pages/DomoticaPage";

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className="flex-1"
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/servicios/camaras-de-seguridad" element={<SecurityCamerasPage />} />
          <Route path="/servicios/instalacion-de-camaras" element={<CameraInstallationPage />} />
          <Route path="/servicios/sistemas-de-videovigilancia" element={<VideoSurveillancePage />} />
          <Route path="/servicios/sistemas-analogicos-e-ip" element={<AnalogIPPage />} />
          <Route path="/servicios/redes-y-cableado-estructurado" element={<StructuredCablingPage />} />
          <Route path="/servicios/sistemas-contra-incendios" element={<FireSystemsPage />} />
          <Route path="/servicios/sensores-de-movimiento" element={<MotionSensorsPage />} />
          <Route path="/servicios/sistemas-de-intrusion" element={<IntrusionSystemsPage />} />
          <Route path="/servicios/cercos-perimetricos" element={<PerimeterFencingPage />} />
          <Route path="/servicios/pantallas-led" element={<LEDScreensPage />} />
          <Route path="/servicios/electricidad-e-iluminacion" element={<LightingPage />} />
          <Route path="/proyectos" element={<ProjectsPage />} />
          <Route path="/proyectos/sazon-de-la-lena" element={<SazonDeLaLenaPage />} />
          <Route path="/proyectos/ato-xpress" element={<AtoXpressPage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/domotica" element={<DomoticaPage />} />
          <Route path="*" element={<NotFoundPage />} />
          
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#F8F9FB] text-[#141A23]">
        <Navbar />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
