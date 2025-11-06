"use client";

import NavbarDemo, { Footer } from "../homesPage";
import AppCard from "./CardsSection.product";
import HeroSaaS2, { ConsommonsBurkinabe } from "./homepage.product";



const ProductPage = () => {
  return (
    <div>
      <NavbarDemo />
      <HeroSaaS2 />
      <AppCard />
     <ConsommonsBurkinabe />
     <Footer />
    </div>
  );
};

export default ProductPage;