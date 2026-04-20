import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Discover from "./components/Discover";
import Products from "./components/Products";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import SpecialityCoffee from "./components/SpecialityCoffee";
import SignatureBlends from "./components/SignatureBlends";
import ProductDetails from "./components/ProductDetails";
import Artisanalkunafa from "./components/Artisanalkunafa";
import Pizza from "./components/Pizza";
import Cookies from "./components/Cookies";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div>
      {/* Navbar stays at the top of EVERY page */}
      <Navbar />
      
      {/* Routes control what goes in the middle based on the URL */}
      <main style={{ paddingTop: '190px' }}>
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
          <Route path="/Signature-Blends" element={<SignatureBlends />} />
          <Route path="/Artisanalkunafa" element={<Artisanalkunafa />} />
          <Route path="/Cookies" element={<Cookies />} />
          <Route path="/Pizza" element={<Pizza />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          
          {/* The Product Details Page Route */}
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </main>

      {/* Footer stays at the bottom of EVERY page */}
      <Footer />
    </div>
  );
}

export default App;