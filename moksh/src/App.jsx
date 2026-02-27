import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Policy from "./extra/policy";
import Register from "./Register";
import Registertitles from "./pages/RegisterdTitle";
import Connect from "./extra/connect";
import Cancelled from "./pages/CancelledTitles";
import Defunct from "./pages/DefunctTitles";
import AboutOverview from "./extra/WhatWeAre";
import VisionMission from "./extra/WhatWeDo";
import OurTeam from "./extra/WhatWeWere";
import History from "./extra/Events";
import ContactInfo from "./extra/OrganizationalChart";
import Period from "./extra/RegistrationPeriod";
import Regular from "./extra/Regularity";
import News from "./extra/News";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/register" element={<Register />} />
      <Route path="/registertitles" element={<Registertitles />} />
      <Route path="/cancelled" element={<Cancelled />} />
      <Route path="/defunct" element={<Defunct />} />
      <Route path="/about" element={<AboutOverview />} />
      <Route path="/vision" element={<VisionMission />} />
      <Route path="/team" element={<OurTeam />} />
      <Route path="/history" element={<History />} />
      <Route path="/contact-info" element={<ContactInfo />} />
      <Route path="/period" element={<Period />} />
      <Route path="/regular" element={<Regular />} />
      <Route path="/news" element={<News />} />
      <Route path="/connect" element={<Connect />} />
    </Routes>
  );
}