import { Hero } from "./components/Hero";
import { ScrollToTop } from "./components/ScrollToTop";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Solution } from "./pages/Solution";
import { Contact } from "@/pages/Contact";
import { ITService } from "./pages/ITService";

// Import individual product components or dynamic ProductPage
import { Product } from "./pages/Product";
import { About } from "./pages/About";

const productRoutes = [
  "boombarriers",
  "anprcameras",
  "axlebreakers",
  "baggagescanners",
  "bollards",
  "crashratedbarriers",
  "dfmds",
  "droparmbarriers",
  "flapbarriers",
  "fullheightturnstiles",
  "ptypebarriers",
  "roadblockers",
  "shutdoormotors",
  "slideflaps",
  "slidinggateoperators",
  "swingflaps",
  "swinggateoperators",
  "tripodturnstiles",
  "tripodturnstiles2",
  "tyrekillers",
  "uvss",
];

const solutionRoutes = [
  "parkingguidancesystem",
  "parkingmanagementsystem",
  "visitormanagementsystem",
  "tollmanagementsolution",
  "masstransitfarecollectionsystem",
  "trafficmanagementsystem",
  "queuemanagementsystem"
]

const serviceRoutes = [
  "softwaredevelopment",
  "cloudservices",
  "automation",
  "securitysolution",
  "development",
  "consultingandservices",
  "aivision"
]


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {productRoutes.map((product) => (
          <Route
            key={product}
            path={`/products/${product}`}
            element={<Product productname={product} />}
          />
        ))}
        {solutionRoutes.map((solution) => (
          <Route
            key={solution}
            path={`/solution/${solution}`}
            element={<Solution solutionname={solution} />}
          />
        ))}
        {serviceRoutes.map((service) => (
          <Route
            key={service}
            path={`/service/${service}`}
            element={<ITService servicename={service} />}
          />
        ))}
      </Routes>
      <ScrollToTop />
    </Router>
  );
}

export default App;