"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Toaster, toast } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

interface Product {
  id: number;
  image: string;
  images: string[];
  name: string;
  category: string;
  description: string;
  fullDescription: string;
  price: string;
  benefits: string[];
  ingredients: string;
}

interface PremiumProductCardProps {
  product: Product;
  onViewDetails: (id: number) => void;
}

const PremiumProductCard: React.FC<PremiumProductCardProps> = ({ product, onViewDetails }) => {
  const [showImageModal, setShowImageModal] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [7.5, -7.5]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-7.5, 7.5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / rect.width);
    y.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.02 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
        className="group relative h-[480px] cursor-pointer"
      >
        <div
          className="relative h-full w-full rounded-3xl overflow-hidden"
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Glassmorphism Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/40 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl" />

          {/* Gradient overlay pour plus de profondeur */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />

          {/* Image Container */}
          <div className="relative h-[75%] overflow-hidden rounded-t-3xl">
            <motion.div
              className="relative w-full h-full"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Zoom Button */}
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowImageModal(true);
                }}
                className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-3 rounded-full shadow-lg border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ZoomIn className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>

          {/* Content Container */}
          <div className="relative h-[25%] p-6 flex flex-col justify-between">
            <div>
              <motion.span
                className="inline-block px-3 py-1 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 backdrop-blur-sm text-emerald-700 dark:text-emerald-300 text-xs font-semibold rounded-full mb-2 border border-emerald-300/30"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                {product.category}
              </motion.span>

              <motion.h3
                className="text-xl font-bold text-gray-800 dark:text-white line-clamp-1"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {product.name}
              </motion.h3>
            </div>

            <div className="flex items-center justify-between mt-auto">
              <motion.span
                className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: 'spring' }}
              >
                {product.price}
              </motion.span>

              <motion.button
                onClick={() => onViewDetails(product.id)}
                className="px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-sm font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                Détails
              </motion.button>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-pink-400/10 to-purple-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </motion.div>

      {/* Image Modal */}
      <AnimatePresence>
        {showImageModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setShowImageModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowImageModal(false)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
              >
                <X className="w-8 h-8" />
              </button>
              <div className="relative w-full h-[80vh] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence >
    </>
  );
};

interface ProductDetailsProps {
  product: Product;
  onBack: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onBack }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    quantity: ""
  });
  const [isSending, setIsSending] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      <div className="max-w-6xl mx-auto px-4 py-8 pt-20 sm:pt-8">
        {/* Bouton retour */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors mb-8"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="font-medium">Retour aux produits</span>
        </button>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Galerie d'images */}
            <div className="p-8 bg-gray-50">
              <div className="rounded-2xl overflow-hidden mb-4 shadow-lg relative h-96">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((img: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`rounded-xl overflow-hidden transition-all relative h-20 ${selectedImage === index
                        ? 'ring-4 ring-emerald-500'
                        : 'ring-2 ring-gray-200 hover:ring-gray-300'
                      }`}
                  >
                    <Image src={img} alt={`Vue ${index + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Informations produit */}
            <div className="p-8">
              <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
                {product.category}
              </span>

              <h1 className="text-3xl font-bold text-gray-800 mb-3">{product.name}</h1>

              <div className="flex items-center gap-2 mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-600 text-sm">(127 avis)</span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                {product.fullDescription}
              </p>

              {/* Bienfaits */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Bienfaits</h3>
                <ul className="space-y-2">
                  {product.benefits.map((benefit: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ingrédients */}
              <div className="bg-emerald-50 rounded-xl p-4 mb-6">
                <h3 className="text-sm font-bold text-emerald-800 mb-2">Ingrédients clés</h3>
                <p className="text-sm text-emerald-700">{product.ingredients}</p>
              </div>

              {/* Prix */}
              <div className="border-t border-gray-200 pt-6">
                {/* Bouton Commander */}
                <div className="mt-6">
                  <button
                    onClick={() => setShowModal(true)}
                    className="w-full bg-emerald-600 text-white py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors"
                  >
                    Commander
                  </button>
                </div>

                <span className="text-3xl font-bold text-emerald-600 block mb-4">{product.price}</span>

                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Livraison gratuite </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>En stock - Expédition sous 24h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Toast container */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* Modal Commander */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-emerald-700 mb-4">
              Commander {product.name}
            </h2>

            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setIsSending(true);

                try {
                  await emailjs.send(
                    "service_otp6u0m",       // à remplacer par ton SERVICE ID EmailJS
                    "template_4f7uekp",       // à remplacer par ton TEMPLATE ID EmailJS
                    {
                      product: product.name,
                      name: formData.name,
                      phone: formData.phone,
                      email: formData.email,
                      company: formData.company,
                      quantity: formData.quantity,
                    },
                    "-MbXiIBxYVOOUtkcV"       // à remplacer par ta clé publique EmailJS
                  );

                  toast.success("Commande envoyée avec succès ✅");
                  setFormData({ name: "", phone: "", email: "", company: "", quantity: "" });
                  setShowModal(false);
                } catch (error) {
                  console.error(error);
                  toast.error("Échec de l'envoi. Réessaie plus tard ❌");
                } finally {
                  setIsSending(false);
                }
              }}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Nom complet"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Téléphone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Entreprise (optionnel)"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
              <input
                type="number"
                placeholder="Quantité"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />

              <button
                type="submit"
                disabled={isSending}
                className={`w-full bg-emerald-600 text-white py-2 rounded-lg font-semibold transition-colors ${isSending ? "opacity-50 cursor-not-allowed" : "hover:bg-emerald-700"
                  }`}
              >
                {isSending ? "Envoi en cours..." : "Envoyer la commande"}
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

const AppCard = () => {
  const [currentView, setCurrentView] = useState<'list' | 'details'>('list');
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  const products: Product[] = [
    {
      id: 1,
      image: "/craie-blanche.jpg",
      images: [
        "/craie-blanche.jpg",
        "/craie-blanche.jpg",
        "/craie-blanche.jpg",
        "/craie-blanche.jpg"
      ],
      name: "Craie de couleur blanche",
      category: "Craie Naturelle",
      description: "Craie naturelle pure extraite de carrières traditionnelles. Texture douce et agréable, parfaite pour une consommation quotidienne.",
      fullDescription: "Notre craie Kaolin blanche est extraite directement de carrières naturelles et soigneusement sélectionnée pour sa qualité exceptionnelle. Sa texture fine et sa pureté en font un produit très apprécié.",
      price: "",
      benefits: [
        "100% naturelle et pure",
        "Texture douce et fine",
        "Riche en minéraux naturels",
        "Sans additifs ni conservateurs"
      ],
      ingredients: "Kaolin naturel pur, argile blanche, minéraux naturels"
    },
    {
      id: 2,
      image: "/craie-couleur.jpg",
      images: [
        "/craiecouleur.jpg",
        "/craiecouleur.jpg",
        "/craiecouleur.jpg",
        "/craiecouleur.jpg"
      ],
      name: "Craie de couleur rouge",
      category: "Craie Premium",
      description: "Craie rouge d'origine africaine, réputée pour sa richesse en fer et sa texture unique. Produit authentique et traditionnel.",
      fullDescription: "La craie Calabar rouge est un trésor de la nature, extraite selon des méthodes traditionnelles. Sa couleur rouge distinctive provient de sa haute teneur en oxyde de fer.",
      price: "",
      benefits: [
        "Riche en fer naturel",
        "Texture croquante unique",
        "Produit traditionnel authentique",
        "Source naturelle de minéraux"
      ],
      ingredients: "Argile rouge naturelle, oxyde de fer, minéraux essentiels"
    },
    {
      id: 3,
      image: "/carton.jpg",
      images: [
        "/carton.jpg",
        "/carton.jpg",
        "/carton.jpg",
        "/carton.jpg"
      ],
      name: "Carton de craie  ",
      category: "Craie Premium",
      description: "Craie de qualité supérieure avec une texture ultra-fine. Parfaite pour les connaisseurs qui recherchent l'excellence.",
      fullDescription: "Notre craie naturelle fine est le résultat d'un processus de sélection rigoureux. Chaque morceau est soigneusement choisi pour garantir une qualité premium exceptionnelle.",
      price: "",
      benefits: [
        "Texture ultra-fine",
        "Qualité premium",
        "Sélection rigoureuse",
        "Expérience supérieure"
      ],
      ingredients: "Argile naturelle premium, minéraux essentiels"
    },
    {
      id: 4,
      image: "/craiecouleur.jpg",
      images: [
        "/craiecouleur.jpg",
        "/craiecouleur.jpg",
        "/craiecouleur.jpg",
        "/craiecouleur.jpg"
      ],
      name: "Craie blanche",
      category: "Craie Naturelle",
      description: "Craie traditionnelle africaine, transmise de génération en génération. Un héritage de qualité et d'authenticité.",
      fullDescription: "Cette craie traditionnelle représente un savoir-faire ancestral. Elle est préparée selon des méthodes traditionnelles qui ont traversé les siècles.",
      price: "",
      benefits: [
        "Savoir-faire ancestral",
        "Méthode traditionnelle",
        "Authenticité garantie",
        "Héritage culturel"
      ],
      ingredients: "Argile traditionnelle, méthodes ancestrales"
    },
    {
      id: 5,
      image: "/craieblanche.jpg",
      images: [
        "/craieblanche.jpg",
        "/craieblanche.jpg",
        "/craieblanche.jpg",
        "/craieblanche.jpg"
      ],
      name: "Craie de couleur rouge",
      category: "Craie Bio",
      description: "Première craie certifiée biologique. Produite dans le respect de l'environnement et de votre santé.",
      fullDescription: "Notre craie bio certifiée répond aux normes les plus strictes. Elle est produite sans aucun produit chimique, garantissant une pureté maximale.",
      price: "",
      benefits: [
        "Certification biologique",
        "Respect de l'environnement",
        "Sans produits chimiques",
        "Pureté maximale"
      ],
      ingredients: "Argile bio certifiée, production écologique"
    }
    
  ];

  const handleViewDetails = (productId: number) => {
    setSelectedProductId(productId);
    setCurrentView('details');
  };

  const handleBack = () => {
    setCurrentView('list');
    setSelectedProductId(null);
  };

  const selectedProduct = products.find(p => p.id === selectedProductId);

  if (currentView === 'details' && selectedProduct) {
    return <ProductDetails product={selectedProduct} onBack={handleBack} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-200/20 to-purple-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Nos Craies Naturelles
          </motion.h1>
          <motion.p
            className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Découvrez notre sélection premium de craies authentiques
          </motion.p>
        </motion.div>

        {/* Grid: 3 colonnes sur grand écran, 2 sur tablette, 1 sur mobile */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PremiumProductCard product={product} onViewDetails={handleViewDetails} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AppCard;