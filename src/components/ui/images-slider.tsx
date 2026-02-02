"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, Variants } from "motion/react";
import React, { useEffect, useState } from "react";
import NextImage from "next/image";

export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}: {
  images: string[];
  children: React.ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(false);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    loadImages();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadImages = () => {
    setLoading(true);
    const loadPromises = images.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image;
        img.onload = () => resolve(image);
        img.onerror = reject;
      });
    });

    Promise.all(loadPromises)
      .then((loadedImages) => {
        setLoadedImages(loadedImages as string[]);
        setLoading(false);
      })
      .catch((error) => console.error("Failed to load images", error));
  };
  
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // autoplay
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let interval: any;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const slideVariants: Variants = {
    initial: {
      scale: 0,
      opacity: 0,
      rotateX: 45,
    },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut", // Fixed: changed from number array to string
      },
    },
    upExit: {
      opacity: 1,
      y: "-150%",
      transition: {
        duration: 1,
      },
    },
    downExit: {
      opacity: 1,
      y: "150%",
      transition: {
        duration: 1,
      },
    },
  };

  const areImagesLoaded = loadedImages.length > 0;

  return (
    <div
      className={cn(
        "overflow-hidden h-full w-full relative flex items-center justify-center",
        className
      )}
      style={{
        perspective: "1000px",
      }}
    >
      {areImagesLoaded && children}
      {areImagesLoaded && overlay && (
        <div
          className={cn("absolute inset-0 ", overlayClassName)}
        />
      )}

      {areImagesLoaded && (
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial="initial"
            animate="visible"
            exit={direction === "up" ? "upExit" : "downExit"}
            variants={slideVariants}
            className="h-full w-full absolute inset-0"
          >
            <NextImage
              src={loadedImages[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
              priority
              className="object-cover"
              style={{
                objectFit: "cover",
                objectPosition: "center 30%",
              }}
            />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};