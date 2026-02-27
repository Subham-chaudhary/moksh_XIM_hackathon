import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Policy from "./policy";
import Register from "./Register";
import Registertitles from "./RegisterdTitle";
import Connect from "./connect";
import Cancelled from "./cancelledTitles";
import Defunct from "./DefunctTitles";
import AboutOverview from "./WhatWeAre";
import VisionMission from "./WhatWeDo";
import OurTeam from "./WhatWeWere";
import History from "./Events";
import ContactInfo from "./OrganizationalChart";
import Period from "./RegistrationPeriod";
import Regular from "./Regularity";
import News from "./News";

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