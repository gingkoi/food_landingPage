import Credits from "./components/Credits";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LastSection from "./components/LastSection";
import MidSection from "./components/MidSection";
import NavBar from "./components/NavBar";
import PizzaSection from "./components/PizzaSection";
import ProductSection from "./components/ProductSection";
import Recipes from "./components/Recipes";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Testimonial />
      <PizzaSection />
      <MidSection />
      <ProductSection />
      <Credits />
      <Recipes />
      <LastSection />
      <Footer />
    </div>
  );
}

export default App;
