import NavbarDemo, { Footer } from "../homesPage";
import { CardsSection } from "./CardsSection.product";
import HeroSaaS2, { ConsommonsBurkinabe } from "./homepage.product";



const ProductPage = () => {
  return (
    <div>
      <NavbarDemo />
      <HeroSaaS2 />
     <CardsSection />
     <ConsommonsBurkinabe />
     <Footer />
    </div>
  );
};

export default ProductPage;