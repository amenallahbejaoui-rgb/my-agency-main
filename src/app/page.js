import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Features from "./components/features/Features";
import OurWork from "./components/ourwork/OurWork";
import About from "./components/about/About";
import ReviewsFaq from "./components/reviewsfaq/ReviewsFaq";
import Footer from "./components/footer/Footer";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Home />
      <Features />
      <OurWork />
      <About />
      <ReviewsFaq />
      <Footer />
    </div>
  );
}
        
 