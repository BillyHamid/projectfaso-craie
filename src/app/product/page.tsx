"use client";

import NavbarDemo, { Footer } from "../homesPage";
import HeroSaaS2, { ConsommonsBurkinabe } from "./homepage.product";
import ProductCards from "./testCard";



const ProductPage = () => {
  return (
    <div>
      <NavbarDemo />
      <HeroSaaS2 />
      <ProductCards />
     <ConsommonsBurkinabe />
     <Footer />
    </div>
  );
};

export default ProductPage;