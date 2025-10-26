import NavbarDemo, { BentoGridThirdDemo,  ContainerTextFlipDemo,  Footer, HeroHighlightDemo, HeroVideoDialogDemo, ImagesSliderDemo,  MarqueeDemo,  Masonary,  NosValeurs, StickyScrollRevealDemo } from "./homesPage";



const Page = () => {
  return (
    <div>
      <NavbarDemo />
      <ImagesSliderDemo />
      <HeroHighlightDemo />
      <BentoGridThirdDemo />
      <NosValeurs />
      <StickyScrollRevealDemo />
      <ContainerTextFlipDemo /> 
      <MarqueeDemo />
      <Masonary />
      <HeroVideoDialogDemo />
      
      <Footer />
    </div>
  );
};

export default Page;