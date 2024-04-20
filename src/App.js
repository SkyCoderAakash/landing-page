import Blogs from "./components/Blogs";
import Categories from "./components/Categories";
import Category from "./components/Category";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <div className="App bg-slate-50">
      <Navbar />
      <HeroSection />
      <Category />
      <Services /> 
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
