import NavbarDemo, { BentoGridThirdDemo,  ContainerTextFlipDemo,  Footer, HeroHighlightDemo, HeroVideoDialogDemo, ImagesSliderDemo,  MarqueeDemo,  NosValeurs, StickyScrollRevealDemo } from "./homesPage";



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
      <HeroVideoDialogDemo />
      
      <Footer />
    </div>
  );
};

export default Page;