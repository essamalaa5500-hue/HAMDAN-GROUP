import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToHash from "./components/ScrollToHash";
import Hero from "./components/Hero";
import AboutUs from "./components/About";
import CompaniesSection from "./components/CompaniesSection";
import ContactSection from "./components/Contact";
import CompanyDetails from "./components/CompanyDetails";
import NotFound from "./pages/NotFound";

const LandingPage = () => (
  <>
    <Hero />
    <AboutUs />
    <CompaniesSection />
    <ContactSection />
  </>
);

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToHash />
        <div className="min-h-screen flex flex-col bg-white text-[#0B192C]">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/companies/:slug" element={<CompanyDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
