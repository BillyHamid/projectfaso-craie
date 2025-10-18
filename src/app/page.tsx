import NavbarDemo, { BentoGridThirdDemo,  Footer, HeroHighlightDemo, ImagesSliderDemo,  MarqueeDemo,  NosValeurs, StickyScrollRevealDemo } from "./homesPage";



const Page = () => {
  return (
    <div>
      <NavbarDemo />
      <ImagesSliderDemo />
      <HeroHighlightDemo />
      <BentoGridThirdDemo />
      <NosValeurs />
      <StickyScrollRevealDemo />
      {/* <ContainerTextFlipDemo /> */}
      <MarqueeDemo />
      <Footer />
    </div>
  );
};

export default Page;