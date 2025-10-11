import NavbarDemo, { BentoGridThirdDemo, Footer, HeroHighlightDemo, ImagesSliderDemo,  MarqueeDemo,  NosValeurs,  StickyBannerDemo, StickyScrollRevealDemo } from "./homesPage";



const Page = () => {
  return (
    <div>
      <StickyBannerDemo />
      <NavbarDemo />
      <ImagesSliderDemo />
      <HeroHighlightDemo />
      <BentoGridThirdDemo />
      <NosValeurs />
      <StickyScrollRevealDemo />
      <MarqueeDemo />
      <Footer />
    </div>
  );
};

export default Page;