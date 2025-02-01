import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Navigation } from "./componants/Navigation/Navigation.jsx";
import { Specialities } from "./componants/Specialities/Specialities.jsx";
import { Work } from "./componants/WorkProcess/Work.jsx";
import { Other } from "./componants/OtherServ/Other.jsx";
import { Complete } from "./componants/Complete/Complete.jsx";
import { Team } from "./componants/Team/Team.jsx";
import { Footer } from "./componants/Footer/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Navigation />
    <Specialities />
    <Work />
    <Other />
    <Complete />
    <Team />
    <Footer />
  </StrictMode>
);
