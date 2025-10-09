"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useRef, useState } from "react";
import { motion } from "motion/react";
import React from "react";
import { ImagesSlider } from "../components/ui/images-slider";
import { cn } from "@/lib/utils";
import { StickyBanner } from "@/components/ui/sticky-banner";

import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import ColourfulText from "@/components/ui/colourful-text";
import { FollowerPointerCard } from "../components/ui/following-pointer";


import { TracingBeam } from "../components/ui/tracing-beam";

import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { TextReveal } from "../components/ui/text-reveal";
import { PixelImage } from "../components/ui/pixel-image";
import { easeOut, useInView } from "framer-motion";
import { Marquee } from "../components/ui/marquee";

import { Heart, Lightbulb, GraduationCap } from 'lucide-react';

import { ArrowRight, Sparkles } from 'lucide-react';


import { Facebook, Linkedin, Instagram, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';


import { Factory, BookOpen, Globe2 } from 'lucide-react';







export default function NavbarDemo() {
  const navItems = [
    {
      name: "Acceuil",
      link: "/",
    },
    {
      name: "A propos de nous",
      link: "/about",
    },
    {
      name: "Contactez-nous",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="primary">Book a call</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
             
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      {/* Navbar */}
    </div>
  );
}


export function ImagesSliderDemo() {
  const images = [
    "/banier.jpg",
    "/banner5.jpg",
    "/banner4.jpg",
  ];
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
      >
        
       
      </motion.div>
    </ImagesSlider>
  );
}


export function GridBackgroundDemo() {
  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
            <InfiniteMovingCardsDemo />
     
    </div>
  );
}



export function StickyBannerDemo() {
  return (
    <div className="relative flex w-full flex-col">
  <StickyBanner className="bg-gradient-to-b from-blue-500 to-blue-600"
>
    <p className="mx-0 max-w-[90%] text-white drop-shadow-md">
  Une nouvelle étape commence : de nouvelles solutions pour mieux répondre à vos besoins.{" "}
  <a href="#" className="transition duration-200 hover:underline">
    Lire l’annonce
  </a>
</p>

  </StickyBanner>
</div>

  );
}




export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];




export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Sans craie, rien n&apos;est écrit. Rien n&apos;est transmis. Chaque trait que l&apos;on trace 
        {" "}
        <Highlight className="text-black dark:text-white">
          marque le savoir en mouvement.
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}


export function BentoGridThirdDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn ("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
    </motion.div>
  );
};

const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  
  // Utilisez des valeurs fixes au lieu de Math.random()
  const fixedWidths = [78, 65, 92, 45, 73, 58];
  const arr = new Array(6).fill(0);
  
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{
            maxWidth: fixedWidths[i] + "%", // Valeurs fixes
          }}
          className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"
        ></motion.div>
      ))}
    </motion.div>
  );
};

const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};

const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="/02f78412-0500-4fd5-a4c0-373da09ddc8e.jpg"
          alt="avatar"
          height={100}
          width={100}
          className="rounded-full h-10 w-10"
        />
        
        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Delusional
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <Image
          src="/02f78412-0500-4fd5-a4c0-373da09ddc8e.jpg"
          alt="avatar"
          height={100}
          width={100}
          className="rounded-full h-10 w-10"
        />
       
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Sensible
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="/02f78412-0500-4fd5-a4c0-373da09ddc8e.jpg"
          alt="avatar"
          height={100}
          width={100}
          className="rounded-full h-10 w-10"
        />
      
        <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Helpless
        </p>
      </motion.div>
    </motion.div>
  );
};

const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
      >
        <Image
          src="/premium_vector-1729100276796-0bff726d5a76.avif"
          alt="avatar"
          height={100}
          width={100}
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-neutral-500">
          « Depuis que nous utilisons cette craie, les tableaux restent propres et les cours sont plus fluides. »
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
      </motion.div>
    </motion.div>
  );
};

const items = [
  {
    title: "Accroche principale",
    description: (
      <span className="text-sm">
        Une craie 100% burkinabè, pour écrire l&apos;avenir..
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Présentation de l'usine",
    description: (
      <span className="text-sm">
        Une usine au service de l&apos;éducation et de l&apos;économie locale.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Objectif et vision",
    description: (
      <span className="text-sm">
       Notre mission : rendre la craie accessible à tous.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: " Développement durable / local",
    description: (
      <span className="text-sm">
        Une craie propre pour un avenir durable. 
       </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Fierté nationale",
    description: (
      <span className="text-sm">
        La craie burkinabè, symbole de souveraineté.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];


const content = [
  {
    title: "Faso Craie – Une fierté nationale",
    description:
      "Seule unité industrielle de production de craie au Burkina Faso ,avec une capacité installée de 1000 à 1120 cartons de 16 boites de craie par mois, elle emploie actuellement 3 administratifs et cinq(5) Ouvriers. FASO CRAIE a pour principaux clients: le MENAPLN, et les Etablissements privés Primaires, et  Secondaires  du Burkina Faso.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
       <Image
          src="/OIP.jpg"
          alt="linear board demo"
          fill
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover"
        />
      </div>
    ),
  },
  {
    title: "Un engagement pour la jeunesse et l'industrialisation",
    description:
      "Au-delà de la production, Rabin Goro s'engage activement dans la promotion de l'entrepreneuriat chez les jeunes. Il organise régulièrement des conférences et des événements pour encourager l'auto-emploi et l'innovation locale. Son initiative s'inscrit dans une dynamique de valorisation du Consommons burkinabè, visant à stimuler l'économie nationale et à renforcer la souveraineté industrielle du pays.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/alexander-grey-O2u6gA2esAI-unsplash.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Une reconnaissance nationale",
    description:
      "En reconnaissance de son engagement exemplaire pour l'industrialisation locale et l'innovation au service du développement, Rabin Goro a été décoré Chevalier de l'Ordre du Mérite burkinabè en décembre 2024. Cette distinction vient saluer son parcours inspirant et son impact concret sur l'économie nationale.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
         <Image
          src="/WhatsApp Image 2025-04-28 at 17.54.06.jpeg"
          alt="linear board demo"
          width={300}
          height={300}
        />
      </div>
    ),
  },
  {
    title: "Une vision tournée vers l'avenir",
    description:
      "Faso Craie ne compte pas s'arrêter là. L'entreprise envisage de diversifier sa production avec des craies de couleur et de conquérir le marché sous-régional. Elle aspire à devenir une référence en matière de production de fournitures scolaires en Afrique de l'Ouest, tout en continuant à promouvoir les valeurs de patriotisme, de qualité et d'innovation",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
       <Image
          src="/miki-fath-1v1zjqxldmc-unsplash.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 py-4">
      <StickyScroll content={content} />
    </div>
  );
}




export function ColourfulTextDemo() {
  return (
    <div className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-black">
      <motion.img
        src="/alexander-grey-O2u6gA2esAI-unsplash.jpg"
        className="h-full w-full object-cover absolute inset-0 [mask-image:radial-gradient(circle,transparent,black_80%)] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      />
      <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans">
       <ColourfulText text="Faso Craie" />  write your future  <br /> 
      </h1>
    </div>
  );
}



export function FollowingPointerDemo() {
  return (
    <div className="mx-auto w-full max-w-3xl p-30">
      <FollowerPointerCard
        title={
          <TitleComponent
            title={blogContent.author}
            avatar={blogContent.authorAvatar}
          />
        }
      >
        <div className="group relative h-full overflow-hidden rounded-2xl border border-zinc-100 bg-white transition duration-200 hover:shadow-xl">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-tl-lg rounded-tr-lg bg-gray-100">
            <Image
              src={blogContent.image}
              alt="thumbnail"
              fill
              className="transform object-cover transition duration-200 group-hover:scale-95 group-hover:rounded-2xl"
            />
          </div>
          <div className="p-4">
            <h2 className="my-4 text-lg font-bold text-zinc-700">
              {blogContent.title}
            </h2>
            <h2 className="my-4 text-sm font-normal text-zinc-500">
              {blogContent.description}
            </h2>
            <div className="mt-10 flex flex-row items-center justify-between">
              <span className="text-sm text-gray-500">{blogContent.date}</span>
             
            </div>
          </div>
        </div>
      </FollowerPointerCard>
    </div>
  );
}

const blogContent = {
  slug: "Promoteur: GORO Kaho Abdel Rabin",
  author: "Rabin Goro",
  date: "20th September, 2025",
  title: "Promoteur: GORO Kaho Abdel Rabin",
  description:
    "Rabin Goro est un entrepreneur burkinabè visionnaire, originaire de Bobo-Dioulasso. Très engagé dans les actions de la promotion de la jeunesse entreprenante, Il est Co-promoteur, du Forum National de l’Étudiant Entrepreneur (FN2E). Il préside actuellement l’association des jeunes pour le développement du SYA (AJDS) Il assure la Coordination de la  SCOOPS BATIR l’AVENIR HBS Initiateur du projet Faso Tomate, Il assure aussi  à ce jour, la coordination de l’APEC dans la région des Hauts Bassins ",
  image: "/2e28dbf9-c270-4c05-b101-929cbef11890 (1).jpg",
  authorAvatar: "/d9a2f9a6-bc25-48b8-b978-c4e3f7277f2c.jpg",
};

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex items-center space-x-2">
    <Image
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
);









const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: easeOut } // <-- use imported easeOut
  },
};

const words1 = `L’histoire de FASO CRAIE, fondée en 2021, repose sur une volonté profonde de
contribuer au développement du Burkina Faso en réduisant sa dépendance
aux importations. Le constat de départ était clair : malgré les milliers d&apos;écoles
dans le pays, il y avait une absence d&apos;unité industrielle locale capable de
produire la craie nécessaire à l&apos;éducation.

Aujourd’hui, FASO CRAIE se dresse comme la première usine de production de
craie scolaire 100% burkinabè et la seule unité industrielle de production de
craie au Burkina Faso.

Notre accroche principale résume notre engagement national : « Une craie
100% burkinabè, pour écrire l&apos;avenir ».
`;

const words2 = `FASO CRAIE est plus qu'une entreprise : c'est une usine au service de
l'éducation et de l'économie locale.
Structure et Investissement
Notre entité est enregistrée au Registre de commerce et du crédit Immobilier
(RCCM : BF BBD 2021 A0802 ; IFU: 00158617V). Nous sommes stratégiquement
localisés dans la zone industrielle, sur la route de Banfora, à 200m du Port Sec
de Bobo-Dioulasso.
La société a réalisé un investissement conséquent de plus de 250 000 000 FCFA.
Ces fonds ont permis notamment :
• L’acquisition du terrain.
• La construction des bâtiments administratifs, industriels et commerciaux.
• L’acquisition des machines industrielles.
• L’équipement en matériel roulant, mobilier et informatique.
`;

const words3 = `Notre mission fondamentale est de rendre la craie accessible à tous. FASO
CRAIE est guidée par son slogan : « Fabriqué au Burkina, pour bâtir l’Afrique ».
Le futur de FASO CRAIE est tourné vers l'expansion régionale. Nous ne
comptons pas nous arrêter là. Notre vision à long terme comprend :
1. La diversification de notre production.
2. La conquête du marché sous-régional.
L'entreprise aspire à devenir une référence en matière de production de
fournitures scolaires en Afrique de l'Ouest, tout en continuant à promouvoir les
valeurs de patriotisme, de qualité et d'innovation.
`;

export function TextGenerateEffectDemo1() {
  return <TextGenerateEffect words={words1} />;
}
export function TextGenerateEffectDemo2() {
  return <TextGenerateEffect words={words2} />;
}
export function TextGenerateEffectDemo3() {
  return <TextGenerateEffect words={words3} />;
}

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6 pb-24 pt-10 bg-gradient-to-b from-gray-50 to-white dark:from-neutral-900 dark:to-black">
      <div className="max-w-6xl mx-auto space-y-32">
        {dummyContent.map((item, index) => (
          <motion.div
            key={`content-${index}`}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className={`flex flex-col ${
              index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center gap-12`}
          >
            {/* IMAGE */}
            {item.image && (
              <motion.div
                variants={fadeUp}
                className="flex-1 flex justify-center"
              >
                <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-xl bg-white dark:bg-neutral-900 hover:scale-[1.02] transition-transform duration-500">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={550}
                    height={400}
                    <<<<<<< HEAD
    title: "Le Début de l'Écriture Burkinabè",
    description: <TextGenerateEffectDemo1 />,
    badge: "Historique et Contexte de Création",
    image: "/DSC_1792.jpg",
  },
  {
    title: "Notre Engagement Industriel et Qualité",
    description: <TextGenerateEffectDemo2 />,
    badge: "Engagement et Qualité",
    image: "/usine2.jpg",
  },
  {
    title: "Vision et Ambitions Panafricaines",
    description: <TextGenerateEffectDemo3 />,
    badge: "Vision à Long Terme",
    image: "/usine3.jpg",
=======
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Sit duis est minim proident non nisi velit non consectetur. Esse
          adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
          Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
          incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
          fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
          nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
          occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
          officia sint labore. Tempor consectetur excepteur ut fugiat veniam
          commodo et labore dolore commodo pariatur.
        </p>
        <p>
          Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
          veniam in commodo id reprehenderit adipisicing. Proident duis
          exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
        </p>
        <p>
          Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
          reprehenderit deserunt amet laborum consequat adipisicing officia qui
          irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
          Amet culpa officia aliquip deserunt veniam deserunt officia
          adipisicing aliquip proident officia sunt.
        </p>
      </>
    ),
    badge: "",
    image:
      "/2e28dbf9-c270-4c05-b101-929cbef11890 (1).jpg",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
        <p>
          In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
          veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
          reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
          cillum ut mollit.
        </p>
      </>
    ),
    badge: "",
    image:
      "/d9a2f9a6-bc25-48b8-b978-c4e3f7277f2c.jpg",
  },
  {
    title: "",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
      </>
    ),
    badge: "Launch Week",
    image:
      "/preview.png",
>>>>>>> 186b86946caedd9bbf5ebb9912b8ac7285798c08
,
    image: "/usine3.jpg",
=======
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Sit duis est minim proident non nisi velit non consectetur. Esse
          adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
          Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
          incididunt enim magna id est    title: "Le Début de l'Écriture Burkinabè",
    description: <TextGenerateEffectDemo1 />,
    badge: "Historique et Contexte de Création",
    image: "/DSC_1792.jpg",
  },
  {
    title: "Notre Engagement Industriel et Qualité",
    description: <TextGenerateEffectDemo2 />,
    badge: "Engagement et Qualité",
    image: "/usine2.jpg",
  },
  {
    title: "Vision et Ambitions Panafricaines",
    description: <TextGenerateEffectDemo3 />,
    badge: "Vision à Long Terme",
    image: "/usine3.jpg",
"/usine3.jpg",
"/usine3.jpg",
"/usine3.jpg",
"/usine3.jpg",
  },
];


// text reaveal ........................


export function TextRevealDemo() {
  return <TextReveal>FASO CRAIE est plus qu&apos;une entreprise : c&apos;est une usine au service de
l&apos;éducation et de l&apos;économie locale Structure et Investissement .Notre entité est enregistrée au Registre de commerce et du crédit Immobilier
(RCCM : BF BBD 2021 A0802 ; IFU: 00158617V). Nous sommes stratégiquement
localisés dans la zone industrielle, sur la route de Banfora, à 200m du Port Sec
de Bobo-Dioulasso.
</TextReveal>
}






export function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 }); // 👈 se rejoue à chaque fois

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9, y: 60 }}
      animate={
        isInView
          ? { opacity: 1, scale: 1, y: 0 }
          : { opacity: 0.4, scale: 0.9, y: 40 }
      }
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex justify-center items-center py-10 gap-x-6"
    >
      <PixelImage
        src="/d9a2f9a6-bc25-48b8-b978-c4e3f7277f2c.jpg"
        customGrid={{ rows: 4, cols: 6 }}
        grayscaleAnimation
      />
      <PixelImage
        src="/d9a2f9a6-bc25-48b8-b978-c4e3f7277f2c.jpg"
        customGrid={{ rows: 4, cols: 6 }}
        grayscaleAnimation
      />
      <PixelImage
        src="/d9a2f9a6-bc25-48b8-b978-c4e3f7277f2c.jpg"
        customGrid={{ rows: 4, cols: 6 }}
        grayscaleAnimation
      />
    </motion.div>
  );
}


// marqueee 

/* eslint-disable @next/next/no-img-element */


const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)
const thirdRow = reviews.slice(0, reviews.length / 2)
const fourthRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-fit cursor-pointer overflow-hidden rounded-xl border p-4 sm:w-36",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[0.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  )
}

export function Marquee3D() {
  return (
    <div className="relative flex h-96 w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px]">
      <div
        className="flex flex-row items-center gap-4"
        style={{
          transform:
            "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
        }}
      >
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
          {thirdRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:20s]" vertical>
          {fourthRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
      </div>

      <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b"></div>
      <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  )
}





const valeurs = [
  {
    icon: Heart,
    title: "Fierté Nationale",
    description: "Nous sommes fiers de contribuer au développement du Burkina Faso en produisant localement des craies de qualité internationale.",
    color: "from-green-400 to-green-600",
    bgColor: "bg-green-50",
    iconBg: "bg-green-500"
  },
  {
    icon: Lightbulb,
    title: "Innovation Locale",
    description: "Notre approche innovante nous permet de créer des produits adaptés aux besoins spécifiques de nos écoles.",
    color: "from-yellow-400 to-yellow-600",
    bgColor: "bg-yellow-50",
    iconBg: "bg-yellow-500"
  },
  {
    icon: GraduationCap,
    title: "Engagement Jeunesse",
    description: "Nous soutenons l'éducation et l'entrepreneuriat des jeunes pour construire l'avenir du Burkina Faso.",
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-blue-50",
    iconBg: "bg-blue-500"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delay  hidden: { opacity: 0, y: 40 },
const cardVariants = {
  hidden: { opacity:     transition: { duration: 0.7, ease: easeOut } // <-- use imported easeOut u  },tn};,.;,export  function NosValeurs() { r  return ({    <section className="py-20 px-6 bg-white">(       <div className="max-w-7xl mx-auto">>x        {/* En-tête */}>v        <motion.div}l          initial={{ opacity: 0, y: -30 }}v           whileInView={{ opacity: 1, y: 0 }}},          viewport={{ once: true }}}           transition={{ duration: 0.6 }}}{          className="text-center mb-16"}d        >".          <h2 className="text-5xl font-bold text-gray-900 mb-4">>             Nos Valeurs>l          </h2>sg          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">>t            Faso Craie incarne la fierté nationale, l&apos;innovation locale et l&apos;engagement pour la jeunesse burkinabè>o          </p>èp        </motion.div>>j>u        {/* Grille des cartes */}n         <motion.div}          variants={containerVariants}v           initial="hidden"}           whileInView="visible""           viewport={{ once: true, amount: 0.2 }}"i          className="grid md:grid-cols-3 gap-8"}:        >"           {valeurs.map((valeur, index) => {>"            const Icon = valeur.icon;al            return (                <motion.divur                key={index}(                 variants={cardVariants}                  whileHover={{                     y: -10,                    transition: { duration: 0.3 }y                 }}                  className={`${valeur.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden group`}i               >o                 {/* Effet de fond au survol */}                  <div className={`absolute inset-0 bg-gradient-to-br ${valeur.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />o                 5                 {/* Icône */}0                 <motion.div                    initial={{ scale: 0, rotate: -180 }}                    whileInView={{ scale: 1, rotate: 0 }}                    viewport={{ once: true }}                    transition={{                       duration: 0.6,                      delay: index * 0.2 + 0.5,                      type: "spring",                      stiffness: 200                    }}                    className="mb-6 flex justify-center"                  >                    <div className={`${valeur.iconBg} w-20 h-20 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>                      <Icon className="w-10 h-10 text-white" strokeWidth={2.5} />                    </div>                  </motion.div>                    {/* Contenu */}                  <div className="relative z-10 text-center">                    <h3 className="text-2xl font-bold text-gray-900 mb-4">                      {valeur.title}                    </h3>                    <p className="text-gray-700 leading-relaxed text-base">                      {valeur.description}                    </p>                  </div>                    {/* Décoration */}                  <motion.div                    initial={{ scale: 0 }}                    whileInView={{ scale: 1 }}                    viewport={{ once: true }}                    transition={{ delay: index * 0.2 + 0.7, duration: 0.8 }}                    className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${valeur.color} rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500`}                  />                </motion.div>              );            })}          </motion.div>  m         {/* Citation ou CTA optionnel */}          <motion.div            initial={{ opacity: 0, y: 30 }}            whileInView={{ opacity: 1, y: 0 }}            viewport={{ once: true }}            transition={{ duration: 0.6, delay: 0.8 }}            className="mt-16 text-center"          >            <div className="inline-block bg-gradient-to-r from-green-600 via-yellow-500 to-blue-600 p-1 rounded-2xl">              <div className="bg-white px-8 py-4 rounded-2xl">                <p className="text-xl font-semibold bg-gradient-to-r from-green-600 via-yellow-500 to-blue-600 bg-clip-text text-transparent">                  « Une craie 100% burkinabè, pour écrire l&apos;avenir »                </p>              </div>            </div>          </motion.div>        </div>      </section>    );  }}  </motion.di}eexport  function ConsommonsBurkinabe() {xp  return ( r    <section className="relative py-24 px-6 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 overflow-hidden">        {/* Effet de fond avec cercles décoratifs animés */}        <div className="absolute inset-0 overflow-hidden">          <motion.div            animate={{              scale: [1, 1.3, 1],              rotate: [0, 180, 360],              x: [0, 100, 0],              y: [0, -50, 0]            }}            transition={{              duration: 25,              repeat: Infinity,              ease: "easeInOut"            }}:           className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-yellow-400/20 to-pink-500/20 rounded-full blur-3xl"f         />4         <motion.div            animate={{"             scale: [1.2, 1, 1.2],
             rotate: [360, 180, 0],c             x: [0, -100, 0],              y: [0, 50, 0]
           }}:           transition={{              duration: 20,              repeat: Infinity,
             ease: "easeInOut"            }}t:          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-blue-400/20 to-purple-500/20 rounded-full blur-3xl" f        />00        <motion.div0           animate={{l"            scale: [1, 1.5, 1],iv            opacity: [0.3, 0.6, 0.3]sc          }},           transition={{y:            duration: 8,              repeat: Infinity,
            ease: "easeInOut"            }}t:          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-cyan-400/10 via-fuchsia-400/10 to-orange-400/10 rounded-full blur-3xl"ia        />00      </div>e-40      {/* Particules flottantes */}        {[...Array(20)].map((_, i) => (le        <motion.div            key={i}].          className="absolute w-2 h-2 bg-white/40 rounded-full"            style={{ut            left: `${Math.random() * 100}%`,              top: `${Math.random() * 100}%`,()          }}            animate={{th            y: [0, -30, 0],              opacity: [0, 1, 0],              scale: [0, 1.5, 0]            }} [          transition={{sc            duration: 3 + Math.random() * 2,an            repeat: Infinity,on            delay: Math.random() * 5, r          }}it        />        ))}: Ma      <div className="max-w-5xl mx-auto text-center relative z-10"> c        {/* Badge avec effet brillant */}el        <motion.div            initial={{ opacity: 0, scale: 0.8 }}ot          whileInView={{ opacity: 1, scale: 1 }} 0          viewport={{ once: true }}ci          transition={{ duration: 0.5 }}{           className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/30"ur        >py          <Sparkles className="w-5 h-5 text-yellow-300" />            <span className="text-white font-semibold">Mouvement National</span>Na          <Sparkles className="w-5 h-5 text-yellow-300" />          </motion.div>sNam        {/* Titre principal avec effet de brillance */}
        <motion.h2pr          initial={{ opacity: 0, y: 30 }}            whileInView={{ opacity: 1, y: 0 }}0,          viewport={{ once: true }} o          transition={{ duration: 0.6 }}{           className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight"5x        >-7          <motion.spante            animate={{                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],              }}si            transition={{%"              duration: 5,}}              repeat: Infinity,                ease: "linear"              }}:             style={{                backgroundSize: "200% auto",              }}              className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent inline-block"-2          > b            Rejoignez le Mouvemente-          </motion.span>            <br /> l          <span className="inline-block mt-3 text-white drop-shadow-2xl">cl            &quot;Consommons Burkinabè&quot;ha          </span>          </motion.h2> Bur        {/* Sous-titre */}sp        <motion.pti          initial={{ opacity: 0, y: 20 }}            whileInView={{ opacity: 1, y: 0 }}0,          viewport={{ once: true }} o          transition={{ duration: 0.6, delay: 0.2 }} }          className="text-xl md:text-2xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-medium"w-        >to          Choisissez Faso Craie et participez au développement de notre pays. Ensemble,  e          écrivons l&apos;avenir du Burkina Faso.mb        </motion.p>ivon        {/* Boutons CTA avec effets avancés */}io        <motion.div B          initial={{ opacity: 0, y: 20 }}            whileInView={{ opacity: 1, y: 0 }}0,          viewport={{ once: true }} o          transition={{ duration: 0.6, delay: 0.4 }} }          className="flex flex-col sm:flex-row gap-6 justify-center items-center"x         >sm          {/* Bouton Devenir partenaire - Design époustouflant */} {          <motion.buttonai            whileHover={{ scale: 1.08, y: -3 }}n.            whileTap={{ scale: 0.95 }}e:            className="group relative bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white font-bold py-5 px-12 rounded-2xl shadow-2xl transition-all duration-300 flex items-center gap-3 min-w-[260px] justify-center overflow-hidden"en          >in            <motion.diver              className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity"40              animate={{op                x: ["-100%", "100%"],                }}
              transition={{,                 duration: 1.5,                  repeat: Infinity,                  ease: "linear"                }}fi            />              <span className="text-lg relative z-10">Devenir partenaire</span>as            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform relative z-10" />ov          </motion.button>n-tr          {/* Bouton Nous contacter - Design glassmorphism */}            <motion.buttonct            whileHover={{ scale: 1.08, y: -3 }}n.            whileTap={{ scale: 0.95 }}e:            className="group relative bg-white/10 backdrop-blur-md border-2 border-white/40 hover:bg-white/20 hover:border-white text-white font-bold py-5 px-12 rounded-2xl shadow-2xl transition-all duration-300 flex items-center gap-3 min-w-[260px] justify-center"30          >s-            <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />e=            <span className="text-lg">Nous contacter</span>              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" /> o          </motion.button>ty        </motion.div>ty"         {/* Éléments décoratifs avec animation de pulsation */}          <motion.divti          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}={          viewport={{ once: true }}ie          transition={{ duration: 1, delay: 0.6 }}ue          className="mt-16 flex justify-center gap-4"}}        >            {[0, 1, 2].map((i) => (nt            <motion.div                key={i}((              animate={{ti                scale: [1, 1.5, 1],                  opacity: [0.4, 1, 0.4]al              }}
              transition={{}4                duration: 2,{                 repeat: Infinity,,                 delay: i * 0.3,               }}3f              className="w-3 h-3 bg-white rounded-full shadow-lg"}             />""          ))}>t        </motion.div>}l      </div>> >       {/* Ligne décorative animée en bas */}/       <motion.div}{        initial={{ scaleX: 0 }}vs        whileInView={{ scaleX: 1 }}}t        viewport={{ once: true }}}I        transition={{ duration: 1.5, delay: 0.8 }}}u        className="absolute bottom-0 left-0 right-0 h-1.5"}       >"a        <motion.div>t          animate={{v-            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],{           }},P          transition={{}%            duration: 3,{             repeat: Infinity,,            ease: "linear",           }}"p          style={{}             backgroundSize: "200% auto",{           }},{          className="w-full h-full bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400"g-        />o-      </motion.div>ia    </section>ya  );0"}
}   const navigationLinks = [ >  { name: 'Accueil', href: '#accueil' },ga  { name: 'À propos', href: '#apropos' }, '  { name: 'Contact', href: '#contact' },: ];aproconst socialLinks = [on  { icon: Facebook, href: '#', label: 'Facebook' }, =  { icon: Linkedin, href: '#', label: 'LinkedIn' },'   { icon: Instagram, href: '#', label: 'Instagram' },},];  { export  function Footer() { l  return (ta    <footer className="bg-slate-900 text-gray-300">rn      <div className="max-w-7xl mx-auto px-6 py-12">0"        <div className="grid md:grid-cols-3 gap-12 mb-8">            {/* Colonne 1 - Logo et Description */}mb          <motion.divol            initial={{ opacity: 0, y: 20 }} <            whileInView={{ opacity: 1, y: 0 }} y            viewport={{ once: true }}pa            transition={{ duration: 0.6 }}on          >
            {/* Logo */}{             <div className="flex items-center gap-3 mb-6">                <img src="/OIP.jpg" alt="Faso Craie Logo" className="w-12 h-12 object-contain" />je            </div>assN            {/* Description */}/>            <p className="text-gray-400 leading-relaxed mb-6">                La fierté du Burkina Faso à chaque trait de craie. Nous produisons des craies scolaires de haute qualité pour soutenir l&apos;éducation et promouvoir le &quot;Consommons burkinabè&quot;.ca            </p>ir l            {/* Réseaux sociaux */}
            <div className="flex gap-4">au              {socialLinks.map((social, index) => {-4                const Icon = social.icon;l,                return (                    <motion.an;                    key={index}                      href={social.href}                      whileHover={{ scale: 1.1, y: -2 }}}                     whileTap={{ scale: 0.95 }}y                     className="w-10 h-10 bg-slate-800 hover:bg-green-500 rounded-lg flex items-center justify-center transition-colors duration-300 group"t                     aria-label={social.label}0                   >                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />x                   </motion.a>i                 );s               })}              </div>            </motion.div>   <          {/* Colonne 2 - Navigation */}/           <motion.div              initial={{ opacity: 0, y: 20 }}<             whileInView={{ opacity: 1, y: 0 }}y             viewport={{ once: true }}a             transition={{ duration: 0.6, delay: 0.2 }}            >              <h3 className="text-white text-lg font-bold mb-6">Navigation</h3>              <ul className="space-y-3">                {navigationLinks.map((link, index) => (                  <li key={index}>                    <motion.a                      href={link.href}                      whileHover={{ x: 5 }}                      className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center gap-2 group"                    >                      <span className="w-0 h-0.5 bg-green-400 group-hover:w-4 transition-all duration-300" />                      {link.name}                    </motion.a>                  </li>                ))}              </ul>            </motion.div>              {/* Colonne 3 - Contact */}            <motion.div              initial={{ opacity: 0, y: 20 }}              whileInView={{ opacity: 1, y: 0 }}              viewport={{ once: true }}              transition={{ duration: 0.6, delay: 0.4 }}            >              <h3 className="text-white text-lg font-bold mb-6">Contact</h3>              <ul className="space-y-4">                <li className="flex items-start gap-3">                  <MapPin className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />                  <span className="text-gray-400">Ouagadougou, Burkina Faso</span>                </li>                <li className="flex items-center gap-3">                  <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />                  <a href="tel:+226XXXXXXXX" className="text-gray-400 hover:text-green-400 transition-colors">                    +226 XX XX XX XX                  </a>                </li>                <li className="flex items-center gap-3">                  <Mail className="w-5 h-5 text-green-400 flex-shrink-0" />                  <a href="mailto:contact@fasocraie.bf" className="text-gray-400 hover:text-green-400 transition-colors">                    contact@fasocraie.bf                  </a>                </li>              </ul>            </motion.div>          </div>            {/* Ligne de séparation */}          <motion.div            initial={{ scaleX: 0 }}            whileInView={{ scaleX: 1 }}            viewport={{ once: true }}            transition={{ duration: 0.8 }}            className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"          />            {/* Bas du footer */}          <div className="flex flex-col md:flex-row justify-between items-center gap-4">            <motion.p              initial={{ opacity: 0 }}              whileInView={{ opacity: 1 }}              viewport={{ once: true }}              transition={{ duration: 0.6 }}              className="text-gray-500 text-sm"            >              © 2024 Faso Craie. Tous droits réservés.            </motion.p>              {/* Widget de chat */}            <motion.div              initial={{ opacity: 0 }}              whileInView={{ opacity: 1 }}              viewport={{ once: true }}              transition={{ duration: 0.6, delay: 0.2 }}              className="flex items-center gap-2 text-sm"            >              <span className="text-gray-500">Discuter avec nous</span>              <div className="flex items-center gap-1">                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">                  <MessageCircle className="w-4 h-4 text-white" />                </div>                <span className="text-gray-400 font-semibold">Whatsapp</span>              </div>            </motion.div>          </div>        </div>          {/* Effet de lumière en haut */}        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />      </footer></  );a-}eaconsconst missions = [t   {
    icon: Factory,
    title: "Production Locale",
    description: "Développer une industrie locale forte et créer des emplois durables pour les jeunes burkinabè.",
    color: "from-green-400 to-green-600",
    bgColor: "bg-green-500",
    iconColor: "text-green-500"
  },
  {
    icon: BookOpen,
    title: "Éducation de Qualité",
    description: "Fournir des outils pédagogiques de qualité pour améliorer les conditions d'apprentissage.",
    color: "from-yellow-400 to-yellow-600",
    bgColor: "bg-yellow-500",
    iconColor: "text-yellow-500"
  },
  {
    icon: Globe2,
    title: "Développement Durable",
    description: "Adopter des pratiques respectueuses de l'environnement et socialement responsables.",
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-blue-500",
    iconColor: "text-blue-500"
  }
];

const missionContainerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7 } // <-- use imported easeOut
  },
};

const missionCardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export  function NotreMission() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Notre Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Promouvoir le &quot;Consommons burkinabè&quot; à travers des produits de qualité
          </p>
        </motion.div>

        {/* Grille des cartes */}
        <motion.div
          variants={missionContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {missions.map((mission, index) => {
            const Icon = mission.icon;
            return (
              <motion.div
                key={index}
                variants={missionCardVariants}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              >
                {/* Effet de fond au survol */}
                <div className={`absolute inset-0 bg-gradient-to-br ${mission.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icône */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6,
                    delay: index * 0.2 + 0.5,
                    type: "spring",
                    stiffness: 200
                  }}
                  className="mb-6 flex justify-center"
                >
                  <div className={`${mission.bgColor} w-20 h-20 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                  </div>
                </motion.div>

                {/* Contenu */}
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {mission.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {mission.description}
                  </p>
                </div>

                {/* Ligne décorative en bas */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.7, duration: 0.6 }}
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${mission.color} origin-left`}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Statistiques ou informations supplémentaires */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <p className="text-gray-700 font-medium">
              Engagés pour un Burkina Faso prospère et durable
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}</motion.div>
      </div>
    </section>
  );
}