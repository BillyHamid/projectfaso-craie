"use client";
import Image from "next/image";
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Sparkles } from 'lucide-react';

export default function HeroSaaS2() {
  const features = [
    " Production automatisée de craies",
    " Craies écologiques et sans poussière",
    " Formation assistée à la production",
    " Contrôle qualité",
  ];

  return (
    <section className="relative w-full h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-black dark:via-zinc-900 dark:to-blue-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* TEXTE : toujours en premier sur mobile */}
          <div className="w-full lg:w-1/2 order-1 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Découvrons <br />
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-600 bg-clip-text text-transparent">
  nos produits
</span> <br />
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                ensemble
              </span>
              <br />
              
            </h1>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                >
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE : suit le texte sur mobile */}
          <div className="w-full lg:w-1/2 order-2 lg:order-2 relative">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <Image
                  src="/miki-fath-1v1zjqxldmc-unsplash.jpg"
                  alt="Dashboard Preview"
                  width={600}
                  height={400}
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export  function ConsommonsBurkinabe() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 overflow-hidden">
      {/* Effet de fond avec cercles décoratifs animés */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-yellow-400/20 to-pink-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            x: [0, -100, 0],
            y: [0, 50, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-blue-400/20 to-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-cyan-400/10 via-fuchsia-400/10 to-orange-400/10 rounded-full blur-3xl"
        />
      </div>

      {/* Particules flottantes */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Badge avec effet brillant */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/30"
        >
          <Sparkles className="w-5 h-5 text-yellow-300" />
          <span className="text-white font-semibold">Mouvement National</span>
          <Sparkles className="w-5 h-5 text-yellow-300" />
        </motion.div>

        {/* Titre principal avec effet de brillance */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight"
        >
          <motion.span
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: "200% auto",
            }}
            className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent inline-block"
          >
            Rejoignez le Mouvement
          </motion.span>
          <br />
          <span className="inline-block mt-3 text-white drop-shadow-2xl">
            &quot;Consommons Burkinabè&quot;
          </span>
        </motion.h2>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-medium"
        >
          Choisissez Faso Craie et participez au développement de notre pays. Ensemble, 
          écrivons l&apos;avenir du Burkina Faso.
        </motion.p>

        {/* Boutons CTA avec effets avancés */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          {/* Bouton Devenir partenaire - Design époustouflant */}
          <motion.button
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white font-bold py-5 px-12 rounded-2xl shadow-2xl transition-all duration-300 flex items-center gap-3 min-w-[260px] justify-center overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <span className="text-lg relative z-10">Devenir partenaire</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform relative z-10" />
          </motion.button>

          {/* Bouton Nous contacter - Design glassmorphism */}
          <motion.button
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-white/10 backdrop-blur-md border-2 border-white/40 hover:bg-white/20 hover:border-white text-white font-bold py-5 px-12 rounded-2xl shadow-2xl transition-all duration-300 flex items-center gap-3 min-w-[260px] justify-center"
          >
            <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span className="text-lg">Nous contacter</span>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        </motion.div>

        {/* Éléments décoratifs avec animation de pulsation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 flex justify-center gap-4"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 1, 0.4]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3
              }}
              className="w-3 h-3 bg-white rounded-full shadow-lg"
            />
          ))}
        </motion.div>
      </div>

      {/* Ligne décorative animée en bas */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 h-1.5"
      >
        <motion.div
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundSize: "200% auto",
          }}
          className="w-full h-full bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400"
        />
      </motion.div>
    </section>
  );
}