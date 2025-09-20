import { BentoGridThirdDemo, GridBackgroundDemo, HeroHighlightDemo, ImagesSliderDemo,  NavbarDemo, StickyBannerDemo, StickyScrollRevealDemo } from "./homesPage";



const Page = () => {

  return (
    <div>
      <StickyBannerDemo />
      <NavbarDemo />
      <ImagesSliderDemo />
      <HeroHighlightDemo />
      <BentoGridThirdDemo />
      <StickyScrollRevealDemo />

      <GridBackgroundDemo />


    </div>
  );
};

export default Page;