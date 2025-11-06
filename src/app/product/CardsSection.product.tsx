"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Toaster, toast } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

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

interface ProductCardProps {
  id: number;
  image: string;
  name: string;
  description: string;
  price: string;
  onViewDetails: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, image, name, description, price, onViewDetails }) => {
  return (
    <div
      onClick={() => onViewDetails(id)}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group flex flex-col sm:flex-row h-auto"
    >
      <div className="overflow-hidden sm:w-2/5 flex-shrink-0 relative h-56 sm:h-auto sm:min-h-[280px]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-8 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">{name}</h3>
          <p className="text-gray-600 text-base mb-4 leading-relaxed">
            {description}
          </p>
        </div>
        <div className="flex items-center justify-between mt-6">
          <span className="text-3xl font-bold text-emerald-600">{price}</span>
          <button className="px-6 py-3 bg-emerald-500 text-white rounded-full text-base font-semibold hover:bg-emerald-600 transition-colors shadow-md">
            Voir détails
          </button>
        </div>
      </div>
    </div>
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
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`rounded-xl overflow-hidden transition-all relative h-20 ${
                      selectedImage === index ? 'ring-4 ring-emerald-500' : 'ring-2 ring-gray-200 hover:ring-gray-300'
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
                  {product.benefits.map((benefit, index) => (
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
          className={`w-full bg-emerald-600 text-white py-2 rounded-lg font-semibold transition-colors ${
            isSending ? "opacity-50 cursor-not-allowed" : "hover:bg-emerald-700"
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
      image: "/craieblanche.jpg",
      images: [
        "/craieblanche.jpg",
        "/craieblanche.jpg",
        "/craieblanche.jpg",
        "/craieblanche.jpg"
      ],
      name: "Craie Kaolin Blanche",
      category: "Craie Naturelle",
      description: "Craie naturelle pure extraite de carrières traditionnelles. Texture douce et agréable, parfaite pour une consommation quotidienne.",
      fullDescription: "Notre craie Kaolin blanche est extraite directement de carrières naturelles et soigneusement sélectionnée pour sa qualité exceptionnelle. Sa texture fine et sa pureté en font un produit très apprécié.",
      price: "1 500 FCFA",
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
      image: "/craiecouleur.jpg",
      images: [
        "/craiecouleur.jpg",
        "/craiecouleur.jpg",
        "/craiecouleur.jpg",
        "/craiecouleur.jpg"
      ],
      name: "Craie Calabar Rouge",
      category: "Craie Premium",
      description: "Craie rouge d'origine africaine, réputée pour sa richesse en fer et sa texture unique. Produit authentique et traditionnel.",
      fullDescription: "La craie Calabar rouge est un trésor de la nature, extraite selon des méthodes traditionnelles. Sa couleur rouge distinctive provient de sa haute teneur en oxyde de fer.",
      price: "2 000 FCFA",
      benefits: [
        "Riche en fer naturel",
        "Texture croquante unique",
        "Produit traditionnel authentique",
        "Source naturelle de minéraux"
      ],
      ingredients: "Argile rouge naturelle, oxyde de fer, minéraux essentiels"
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
    return <ProductDetails product={selectedProduct} onBack={handleBack} 
    />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Nos Craies Naturelles
          </h1>
          <p className="text-gray-600 text-lg">
            Découvrez notre sélection de craies authentiques
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-10 max-w-5xl mx-auto">
          {products.map(product => (
            <ProductCard key={product.id} {...product} onViewDetails={handleViewDetails} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppCard;