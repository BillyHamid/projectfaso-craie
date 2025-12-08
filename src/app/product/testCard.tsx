import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  categoryColor: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, category, title, description, categoryColor }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="relative h-64 overflow-hidden bg-gray-200">
      <Image 
        src={image} 
        alt={title}
        // MODIFICATION : 
        // J'ai changé 'object-cover' à 'object-contain' pour afficher l'image entière.
        // J'ai aussi retiré le 'w-full h-full' car 'fill' le gère et il n'est pas nécessaire.
        // J'ai conservé le 'hover:scale-110 transition-transform duration-300' pour le zoom au survol.
        className="object-contain hover:scale-110 transition-transform duration-300"
        fill
      />
    </div>
    <div className="p-6">
      <span 
        className={`inline-block px-4 py-1 rounded-full text-white text-sm font-semibold mb-3 ${categoryColor}`}
      >
        {category}
      </span>
      <h3 className="text-2xl font-bold mb-3 text-gray-900">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

export default function ProductCards() {
  const products = [
    {
      image: "/Gemini_Generated_Image_zfnvzqzfnvzqzfnv.png",
      category: "FASO CRAIE",
      categoryColor: "bg-purple-500",
      title: "Paquet de Craies blanches",
      description: ""
    },
    {
      image: "/Pcraieblache-ouvert-removebg-preview.png",
      category: "FASO CRAIE",
      categoryColor: "bg-red-500",
      title: "Paquet de Craies blanches",
      description: ""
    },
    {
      image: "/Gemini_Generated_Image_8wu2e98wu2e98wu2.png",
      category: "FASO CRAIE",
      categoryColor: "bg-pink-500",
      title: "Paquet de Craies blanches",
      description: ""
    },
    {
      image: "/vrai.jpg",
      category: "FASO CRAIE",
      categoryColor: "bg-blue-500",
      title: "Bâtons de craies",
      description: ""
    },
    {
      image: "/craieblanche.jpg",
      category: "FASO CRAIE",
      categoryColor: "bg-green-500",
      title: "Bâtons de craies",
      description: ""
    },
    {
      image: "/craiecouleur.jpg",
      category: "FASO CRAIE",
      categoryColor: "bg-orange-500",
      title: "Bâtons de craies",
      description: ""
    },
    {
      image: "/craie-couleur.jpg",
      category: "FASO CRAIE",
      categoryColor: "bg-orange-500",
      title: "Paquet de Craies colorées",
      description: ""
    },
    {
      image: "/47e004f1-a06e-4be1-a9be-b1de8e17bd5c.jpg",
      category: "FASO CRAIE",
      categoryColor: "bg-orange-500",
      title: "Paquet de Craies colorées",
      description: ""
    },
    {
      image: "/Pcraiecouleur.jpg",
      category: "FASO CRAIE",
      categoryColor: "bg-orange-500",
      title: "Paquet de Craies colorées",
      description: ""
    },
    {
      image: "/carton-vrai-removebg-preview.png",
      category: "FASO CRAIE",
      categoryColor: "bg-orange-500",
      title: "Carton de Craies",
      description: ""
    },
    {
      image: "/encapsule2.jpg",
      category: "FASO CRAIE",
      categoryColor: "bg-orange-500",
      title: "Équipe Support",
      description: ""
    },
    {
      image: "/encapsule.jpg",
      category: "FASO CRAIE",
      categoryColor: "bg-green-500",
      title: "Équipe Support",
      description: ""
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Nos Produits
          </h1>
          <p className="text-xl text-gray-600">
            Découvrez notre sélection exclusive de produits tendance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}