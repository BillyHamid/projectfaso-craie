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
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import React from "react";
import { ImagesSlider } from "../components/ui/images-slider";
import { cn } from "@/lib/utils";

import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import {
  IconArrowLeft,
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
import { easeOut } from "framer-motion";

import { Heart } from 'lucide-react';

import { Factory, BookOpen, Globe2 } from 'lucide-react';

import { Facebook, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { Marquee } from "../components/ui/marquee";
import { Sparkles, Rocket, Leaf, Award, Zap } from 'lucide-react';
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { HeroVideoDialog } from "../components/ui/hero-video-dialog";
import { VideoText } from "@/components/ui/video-text";

import {  AnimatePresence } from 'framer-motion';





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
      name: "Nos Produits",
      link: "/product",
    },
    {
      name: "Contactez-nous",
      link: "/contact",
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
      <ScrollToTopButton />
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
    <ImagesSlider className="h-[20rem] md:h-[35rem] lg:h-[50rem]" images={images}>
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
        className="text-2xl px-0 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
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
  const [showMasonry, setShowMasonry] = useState(false);

  if (showMasonry) {
    return <Masonary onBack={() => setShowMasonry(false)} />;
  }

  return (
    <BentoGrid className="max-w-5xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <div
          key={i}
          onClick={() => {
            if (item.title === "Présentation de l'usine") {
              setShowMasonry(true);
            }
          }}
          className={item.title === "Présentation de l'usine" ? "cursor-pointer" : ""}
        >
          <BentoGridItem
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
          />
        </div>
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
    href: "/contact",
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
          width={300}
          height={300}
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
      Sans <ColourfulText text=" Craie" /> rien est écrit <br />  rien n’est <ColourfulText text=" transmis" />  <br /> 
      </h1>
    </div>
  );
}



export function FollowingPointerDemo() {
  return (
    <div className="mx-auto w-full max-w-3xl p-4 sm:p-6 md:p-30">
      <FollowerPointerCard
        title={
          <TitleComponent
            title={blogContent.author}
            avatar={blogContent.authorAvatar}
          />
        }
      >
        <div className="group relative h-full overflow-hidden rounded-2xl border border-zinc-100 bg-white transition duration-200 hover:shadow-xl">
          {/* ✅ Image adaptée au mobile */}
          <div className="relative w-full h-60 sm:h-64 md:aspect-[16/10] overflow-hidden rounded-tl-lg rounded-tr-lg bg-gray-100">
            <Image
              src={blogContent.image}
              alt="thumbnail"
              fill
              className="object-cover transition duration-200 group-hover:scale-95 group-hover:rounded-2xl"
            />
          </div>

          {/* ✅ Texte avec marges ajustées sur mobile */}
          <div className="p-4 sm:p-6">
            <h2 className="my-3 text-lg sm:text-xl font-bold text-zinc-700">
              {blogContent.title}
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              {blogContent.description}
            </p>
            <div className="mt-6 flex flex-row items-center justify-between text-xs sm:text-sm text-gray-500">
              <span>{blogContent.date}</span>
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
  date: "20 septembre 2025",
  title: "Promoteur : GORO Kaho Abdel Rabin",
  description:
    "Rabin Goro est un entrepreneur burkinabè visionnaire, originaire de Bobo-Dioulasso. Très engagé dans la promotion de la jeunesse entreprenante, il est co-promoteur du Forum National de l’Étudiant Entrepreneur (FN2E). Il préside l’AJDS et coordonne plusieurs initiatives, dont le projet Faso Tomate et l’APEC des Hauts-Bassins.",
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
      height={28}
      width={28}
      alt="Auteur"
      className="rounded-full border-2 border-white shadow-md"
    />
    <p className="text-sm sm:text-base font-semibold text-gray-700">{title}</p>
  </div>
);

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};
const words1 = `L’histoire de FASO CRAIE, fondée en 2021, repose sur une volonté profonde de
contribuer au développement du Burkina Faso en réduisant sa dépendance
aux importations. Le constat de départ était clair : malgré les milliers d'écoles
dans le pays, il y avait une absence d'unité industrielle locale capable de
produire la craie nécessaire à l'éducation.

Aujourd’hui, FASO CRAIE se dresse comme la première usine de production de
craie scolaire 100% burkinabè et la seule unité industrielle de production de
craie au Burkina Faso.

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
                    className="object-cover"
                  />
                </div>
              </motion.div>
            )}

            {/* TEXTE */}
            <motion.div
              variants={fadeUp}
              className="flex-1 space-y-5 text-left"
            >
              <span className="inline-block bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 text-sm px-4 py-1 rounded-full">
                {item.badge}
              </span>

              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {item.title}
              </h2>

              <div className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                {item.description}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Le Début de l'Écriture Burkinabè",
    description: <TextGenerateEffectDemo1 />,
    badge: "Historique et Contexte de Création",
    image: "/DSC_1792.jpg",
  },
  {
    title: "Notre Engagement Industriel et Qualité",
    description: <TextGenerateEffectDemo2 />,
    badge: "Engagement et Qualité",
    image: "/DSC_1927.jpg",
  },
  {
    title: "Vision et Ambitions Panafricaines",
    description: <TextGenerateEffectDemo3 />,
    badge: "Vision à Long Terme",
    image: "/DSC_1278.jpg",
  },
];


// mission


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { duration: 0.7, ease: easeOut } // <-- use imported easeOut
  },
};






///////

const valeursContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const valeursCardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const nosValeursData = [
  {
    icon: Sparkles,
    title: "Excellence",
    description: "Une qualité irréprochable dans chaque craie produite, reflétant le savoir-faire burkinabè et notre engagement envers l'éducation.",
    bgColor: "bg-gradient-to-br from-amber-50 to-yellow-100",
    color: "from-amber-400 to-yellow-600",
    iconBg: "bg-gradient-to-br from-amber-500 to-yellow-600"
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "Nous repoussons les limites avec des solutions créatives et modernes pour réinventer la production locale.",
    bgColor: "bg-gradient-to-br from-blue-50 to-indigo-100",
    color: "from-blue-400 to-indigo-600",
    iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600"
  },
  {
    icon: Heart,
    title: "Engagement Social",
    description: "Au cœur de notre mission : créer des opportunités pour la jeunesse et contribuer au développement du Burkina Faso.",
    bgColor: "bg-gradient-to-br from-rose-50 to-pink-100",
    color: "from-rose-400 to-pink-600",
    iconBg: "bg-gradient-to-br from-rose-500 to-pink-600"
  },
  {
    icon: Leaf,
    title: "Durabilité",
    description: "Une production éco-responsable qui préserve notre environnement pour les générations futures.",
    bgColor: "bg-gradient-to-br from-emerald-50 to-green-100",
    color: "from-emerald-400 to-green-600",
    iconBg: "bg-gradient-to-br from-emerald-500 to-green-600"
  },
  {
    icon: Zap,
    title: "Impact Local",
    description: "Chaque craie produite contribue à l'économie locale et renforce l'autonomie du Burkina Faso.",
    bgColor: "bg-gradient-to-br from-purple-50 to-violet-100",
    color: "from-purple-400 to-violet-600",
    iconBg: "bg-gradient-to-br from-purple-500 to-violet-600"
  },
  {
    icon: Award,
    title: "Fierté Nationale",
    description: "Faso Craie incarne l'excellence burkinabè et la capacité de notre pays à produire des produits de classe mondiale.",
    bgColor: "bg-gradient-to-br from-orange-50 to-red-100",
    color: "from-orange-400 to-red-600",
    iconBg: "bg-gradient-to-br from-orange-500 to-red-600"
  }
];

export  function NosValeurs() {
  return (
    <section className="py-20 px-6 bg-white">
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
            Nos Valeurs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Faso Craie incarne la fierté nationale, l&apos;innovation locale et l&apos;engagement pour la jeunesse burkinabè
          </p>
        </motion.div>

        {/* Grille desktop / Scroll horizontal mobile */}
        <motion.div
          variants={valeursContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="md:grid md:grid-cols-3 md:gap-8 flex md:flex-none overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide pb-4 -mx-6 px-6 md:mx-0 md:px-0"
        >
          {nosValeursData.map((valeur, index) => {
            const Icon = valeur.icon;
            return (
              <motion.div
                key={index}
                variants={valeursCardVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className={`${valeur.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden group min-w-[85vw] md:min-w-0 snap-center mr-4 md:mr-0`}
              >
                {/* Effet de fond au survol */}
                <div className={`absolute inset-0 bg-gradient-to-br ${valeur.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
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
                  <div className={`${valeur.iconBg} w-20 h-20 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                    <Icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                  </div>
                </motion.div>

                {/* Contenu */}
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {valeur.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-base">
                    {valeur.description}
                  </p>
                </div>

                {/* Décoration */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.7, duration: 0.8 }}
                  className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${valeur.color} rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500`}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Indicateur de scroll sur mobile */}
        <div className="md:hidden text-center mt-6">
          <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
            <span>← Glissez pour voir plus →</span>
          </p>
        </div>

        {/* Citation ou CTA optionnel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-green-600 via-yellow-500 to-blue-600 p-1 rounded-2xl">
            <div className="bg-white px-8 py-4 rounded-2xl">
              <p className="text-xl font-semibold bg-gradient-to-r from-green-600 via-yellow-500 to-blue-600 bg-clip-text text-transparent">
                « Une craie 100% burkinabè, pour écrire l&apos;avenir »
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}


const missions = [
  {
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
          variants={containerVariants}
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
                variants={cardVariants}
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
}




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
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

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
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image className="rounded-full" width="32" height="32" alt="" src={img} />
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

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden my-20">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  )
}






/// Footer
const navigationLinks = [
  { name: 'Accueil', href: '/' },
  { name: 'À propos', href: '/about' },
  { name: 'Nos produits', href: '/product' },
  { name: 'Contact', href: '/contact' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export  function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Colonne 1 - Logo et Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <Image src="/OIP.jpg" alt="Faso Craie Logo" width={48} height={48} />
            </div>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed mb-6">
              La fierté du Burkina Faso à chaque trait de craie. Nous produisons des craies scolaires de haute qualité pour soutenir l&apos;éducation et promouvoir le &quot;Consommons burkinabè&quot;.
            </p>

            {/* Réseaux sociaux */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-slate-800 hover:bg-green-500 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Colonne 2 - Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white text-lg font-bold mb-6">Navigation</h3>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-green-400 group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Colonne 3 - Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-white text-lg font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Ouagadougou, Burkina Faso</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <a href="tel:+226XXXXXXXX" className="text-gray-400 hover:text-green-400 transition-colors">
                  +226 54 53 52 25
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-400 flex-shrink-0" />
                <a href="mailto:contact@fasocraie.bf" className="text-gray-400 hover:text-green-400 transition-colors">
                  contact@fasocraie.bf
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Ligne de séparation */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"
        />

        {/* Bas du footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gray-500 text-sm"
          >
            © 2025 Faso Craie. Tous droits réservés.
          </motion.p>

          
        </div>
      </div>

      {/* Effet de lumière en haut */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
    </footer>
  );
}





export function ContainerTextFlipDemo() {
  const words = ["témoignages", "commentaires", "feedback", "avis"];
  return (
    <div className="flex justify-center mt-50 mb-0">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className={cn(
          "text-center text-4xl md:text-7xl font-bold text-zinc-700 dark:text-zinc-100 leading-tight tracking-tight"
        )}
        layout
      >
        <span className="inline-block">
          Découvrir nos <ContainerTextFlip words={words} />
        </span>
      </motion.h1>
    </div>
  );
}


export function HeroVideoDialogDemo() {
  return (
    <div className="relative flex justify-center items-center gap-6 pb-10">
      {/* Première vidéo */}
      <div className="flex flex-col items-center">
        <HeroVideoDialog
          className="block dark:hidden"
          animationStyle="from-center"
  videoSrc="/faso.mp4"
  thumbnailSrc="/47e004f1-a06e-4be1-a9be-b1de8e17bd5c.jpg"
  thumbnailAlt="Hero Video"

        />
        <HeroVideoDialog
          className="hidden dark:block"
          animationStyle="from-center"
          videoSrc="/faso.mp4"
          thumbnailSrc="/47e004f1-a06e-4be1-a9be-b1de8e17bd5c.jpg"
          thumbnailAlt="Hero Video"
        />
      </div>

      {/* Deuxième vidéo */}
      <div className="flex flex-col items-center">
        <HeroVideoDialog
          className="block dark:hidden"
          animationStyle="from-center"
          videoSrc="/FASO2.mp4"
          thumbnailSrc="/tof.jpg"
          thumbnailAlt="Hero Video"
        />
        <HeroVideoDialog
          className="hidden dark:block"
          animationStyle="from-center"
          videoSrc="/FASO2.mp4"
          thumbnailSrc="/tof.jpg"
          thumbnailAlt="Hero Video"
        />
      </div>
    </div>
  );
}


export function VideoTextDemo() {
  const [fontSize, setFontSize] = useState(8)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setFontSize(8)     // mobile
      else if (window.innerWidth < 1024) setFontSize(8) // tablette
      else setFontSize(10)                             // desktop
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="relative w-full overflow-hidden flex items-center justify-center h-[150px] sm:h-[200px] md:h-[250px]">
      <VideoText
        src="https://cdn.magicui.design/ocean-small.webm"
        fontSize={fontSize}
        fontWeight="900"
        fontFamily="Poppins, sans-serif"
      >
        FASO CRAIE
      </VideoText>
    </div>
  )
}


// --- TypeScript Interfaces ---
interface MasonryItem {
  id: number;
  imageUrl: string;
  title: string;
}

interface GridItemProps {
  item: MasonryItem;
}

interface MasonryGridProps {
  items: MasonryItem[];
}

// --- Données images ---
const initialItems: MasonryItem[] = [
  { id: 1, imageUrl: "/usine/DSC_1537.jpg", title: "Misty Mountain Valley" },
  { id: 2, imageUrl: "/usine/DSC_1476.jpg", title: "Lakeside Cabin" },
  { id: 3, imageUrl: "/usine/DSC_1464.jpg", title: "Sunlight Through Forest" },
  { id: 4, imageUrl: "/usine/DSC_1277.jpg", title: "Dramatic Mountain Peak" },
  { id: 5, imageUrl: "/usine/DSC_1408.jpg", title: "Golden Hour on River" },
  { id: 6, imageUrl: "/usine/DSC_1449.jpg", title: "Green Rolling Hills" },
  { id: 7, imageUrl: "/usine/DSC_1384.jpg", title: "Waterfall Oasis" },
  { id: 8, imageUrl: "/usine/DSC_1654.jpg", title: "Crashing Ocean Waves" },
  { id: 9, imageUrl: "/usine/DSC_1640.jpg", title: "Beach Sunset" },
  { id: 10, imageUrl: "/usine/DSC_1469.jpg", title: "Path in the Woods" },
  { id: 11, imageUrl: "/usine/DSC_2122.jpg", title: "Colorful Hot Air Balloons" },
  { id: 12, imageUrl: "/usine/DSC_1516.jpg", title: "Starry Night Sky" },
];

// --- Composants Masonary ---
const GridItem: React.FC<GridItemProps> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      className="mb-4 break-inside-avoid relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Image
        src={item.imageUrl}
        alt={item.title}
        width={400}
        height={300}
        className="w-full h-auto rounded-xl shadow-lg object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = `https://placehold.co/400x300/fecaca/333333?text=Image+Not+Found`;
        }}
      />
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"
          >
            <div className="p-4 h-full flex flex-col justify-end">
              <p className="text-white font-bold text-base truncate">
                {item.title}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const MasonryGrid: React.FC<MasonryGridProps> = ({ items }) => (
  <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4">
    {items.map((item) => (
      <GridItem key={item.id} item={item} />
    ))}
  </div>
);
function Masonary({ onBack }: { onBack: () => void }) {
  return (
    <div className="font-sans transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <motion.button
            onClick={onBack}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-violet-500 text-white px-4 py-2 rounded-full shadow-md"
          >
            <IconArrowLeft size={18} />
            <span>Retour</span>
          </motion.button>
          <h2 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
            Présentation de l’usine
          </h2>
        </div>
        <main>
          <MasonryGrid items={initialItems} />
        </main>
      </div>
    </div>
  );
}


export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 rounded-full shadow-2xl flex items-center justify-center group hover:shadow-cyan-500/50 transition-shadow duration-300"
          aria-label="Retour en haut"
        >
          <svg
            className="w-6 h-6 text-white transform group-hover:-translate-y-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
          
          {/* Cercle animé autour du bouton */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-white/30"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}