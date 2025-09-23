import "./App.css";
import { NavbarDemo } from "@/components/navbar";
import { HeroSectionOne } from "@/components/hero";
import { AnimatedTooltipPreview, ThreeDCardDemo } from "@/components/proyectos";
import { WobbleCardDemo } from "@/components/sobre-mi";
import { Footer } from "@/components/footer";

function App() {
  return (
    <>
      <NavbarDemo />
      <HeroSectionOne />
      <ThreeDCardDemo />
      <AnimatedTooltipPreview />
      <WobbleCardDemo />
      <Footer />
    </>
  );
}

export default App;