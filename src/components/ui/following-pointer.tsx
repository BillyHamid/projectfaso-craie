import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue } from "motion/react";
import { cn } from "@/lib/utils";

// Classe CSS pour désactiver les effets hover sur mobile
const injectMobileHoverStyles = () => {
  if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.textContent = `
      @media (hover: none) and (pointer: coarse) {
        .no-mobile-hover:hover {
          transform: none !important;
          box-shadow: none !important;
          scale: none !important;
        }
        .no-mobile-hover .group:hover > * {
          transform: none !important;
          scale: none !important;
        }
        .no-mobile-hover:hover .group-hover\\:scale-95 {
          transform: none !important;
          scale: 1 !important;
        }
        .no-mobile-hover:hover .group-hover\\:rounded-2xl {
          border-radius: 0.5rem !important;
        }
        .no-mobile-hover:hover .hover\\:shadow-xl {
          box-shadow: none !important;
        }
      }
    `;
    if (!document.head.querySelector('[data-mobile-hover-fix]')) {
      style.setAttribute('data-mobile-hover-fix', 'true');
      document.head.appendChild(style);
    }
  }
};

// Hook pour détecter si on est sur un appareil mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      // Vérification basée sur la largeur d'écran
      const isMobileScreen = window.innerWidth <= 768;
      
      // Vérification basée sur le user agent
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      
      // Vérification si l'appareil supporte le touch
      const hasTouchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      
      setIsMobile(isMobileScreen || isMobileDevice || hasTouchSupport);
    };

    checkIfMobile();
    injectMobileHoverStyles(); // Injecter les styles pour désactiver hover sur mobile
    
    // Réévaluer lors du redimensionnement de la fenêtre
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return isMobile;
};

export const FollowerPointerCard = ({
  children,
  className,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  title?: string | React.ReactNode;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [isInside, setIsInside] = useState<boolean>(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect());
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Ne pas traiter les événements de souris sur mobile
    if (isMobile) return;
    
    if (rect) {
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      x.set(e.clientX - rect.left + scrollX);
      y.set(e.clientY - rect.top + scrollY);
    }
  };

  const handleMouseLeave = () => {
    // Ne pas traiter les événements de souris sur mobile
    if (isMobile) return;
    setIsInside(false);
  };

  const handleMouseEnter = () => {
    // Ne pas traiter les événements de souris sur mobile
    if (isMobile) return;
    setIsInside(true);
  };

  return (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      style={{
        // Seulement masquer le curseur sur desktop
        cursor: isMobile ? "default" : "none",
      }}
      ref={ref}
      className={cn("relative", isMobile && "no-mobile-hover", className)}
    >
      <AnimatePresence>
        {/* Seulement afficher le pointer sur desktop */}
        {!isMobile && isInside && <FollowPointer x={x} y={y} title={title} />}
      </AnimatePresence>
      {children}
    </div>
  );
};

export const FollowPointer = ({
  x,
  y,
  title,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  x: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  y: any;
  title?: string | React.ReactNode;
}) => {
  const colors = [
    "#0ea5e9",
    "#737373", 
    "#14b8a6",
    "#22c55e",
    "#3b82f6",
    "#ef4444",
    "#eab308",
  ];

  return (
    <motion.div
      className="absolute z-50 h-4 w-4 rounded-full"
      style={{
        top: y,
        left: x,
        pointerEvents: "none",
      }}
      initial={{
        scale: 1,
        opacity: 1,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 0,
        opacity: 0,
      }}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="1"
        viewBox="0 0 16 16"
        className="h-6 w-6 -translate-x-[12px] -translate-y-[10px] -rotate-[70deg] transform stroke-sky-600 text-sky-500"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
      </svg>
      <motion.div
        style={{
          backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        }}
        initial={{
          scale: 0.5,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        exit={{
          scale: 0.5,
          opacity: 0,
        }}
        className={
          "min-w-max rounded-full bg-neutral-200 px-2 py-2 text-xs whitespace-nowrap text-white"
        }
      >
        {title || `William Shakespeare`}
      </motion.div>
    </motion.div>
  );
};