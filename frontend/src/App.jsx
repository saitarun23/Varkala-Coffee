import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Discover from "./components/Discover";
import Products from "./components/Products";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import SpecialityCoffee from "./coffee/SpecialityCoffee";
import SpecialityCoffeeDetail from "./coffee/SpecialityCoffeeDetail";
import SignatureBlends from "./coffee/SignatureBlends";
import SpecialityBlendsDetail from "./coffee/SpecialityBlendsDetails";
import FilterCoffee from "./coffee/FilterCoffee"
import FilterCoffeeDetail from "./coffee/FilterCoffeeDetail";
import Artisanalkunafa from "./cocoa/Artisanalkunafa";
import Clusters from "./cocoa/Clusters";
import ChocolateBars from "./cocoa/ChocolateBars";
import ChocolateDrages from "./cocoa/ChocolateDrages";
import Pizza from "./components/Pizza";
import Cookies from "./components/Cookies";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div>
      {/* Navbar stays at the top of EVERY page */}
      <Navbar />
      
      {/* Routes control what goes in the middle based on the URL */}
      <main style={{ paddingTop: '132px' }}>
        <Routes>
          
          {/* The Home Page Route */}
          <Route path="/" element={
            <>
              <Hero />
              <Discover />
              <Products />
              <Experience />
            </>
          } />
          
          {/* The Specialty Coffee Page Route */}
          <Route path="/specialty-coffee" element={<SpecialityCoffee />} />
          <Route path="/signature-blends" element={<SignatureBlends />} />
          <Route path="/filter-coffee" element={<FilterCoffee />} />


          {/* The Cocoa Product Pages */}
          <Route path="/Artisanalkunafa" element={<Artisanalkunafa />} />
          <Route path="/clusters" element={<Clusters />} />
          <Route path="/chocolate-bars" element={<ChocolateBars />} />
          <Route path="/chocolate-drages" element={<ChocolateDrages />} />
          
          {/* Other Product Pages */}
          
          <Route path="/Cookies" element={<Cookies />} />
          <Route path="/Pizza" element={<Pizza />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          
          {/* The Product Details Page Route */}
          <Route path="/specialitycoffeedetail/:id" element={<SpecialityCoffeeDetail />} />
          <Route path="/specialityblendsdetail/:id" element={<SpecialityBlendsDetail />} />
          <Route path="/filtercoffeedetail/:id" element={<FilterCoffeeDetail />} />
        </Routes>
      </main>

      {/* Footer stays at the bottom of EVERY page */}
      <Footer />
    </div>
  );
}

export default App;