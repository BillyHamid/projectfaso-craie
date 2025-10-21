"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare, Sparkles } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse de l'usine",
    details: [
      "Zone Industrielle de Kossodo",
      "Secteur 30, Ouagadougou",
      "Burkina Faso"
    ],
    gradient: "from-green-500 to-green-600",
    bgGradient: "from-green-50 to-green-100"
  },
  {
    icon: Phone,
    title: "Téléphone",
    details: [
      "+226 25 36 42 18",
      "+226 70 25 36 42"
    ],
    gradient: "from-green-500 to-green-600",
    bgGradient: "from-green-50 to-green-100"
  },
  {
    icon: Mail,
    title: "Email",
    details: [
      "contact@fasocraie.bf",
      "info@fasocraie.bf"
    ],
    gradient: "from-green-500 to-green-600",
    bgGradient: "from-green-50 to-green-100"
  },
  {
    icon: Clock,
    title: "Horaires d'ouverture",
    details: [
      "Lundi - Vendredi : 7h30 - 17h30",
      "Samedi : 8h00 - 12h00",
      "Dimanche : Fermé"
    ],
    gradient: "from-green-500 to-green-600",
    bgGradient: "from-green-50 to-green-100"
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Message envoyé ! Nous vous contacterons bientôt.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section avec Vert Captivant */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[500px] overflow-hidden"
      >
        {/* Fond dégradé vert captivant */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-green-500 to-teal-500" />
        
        {/* Couches de dégradé supplémentaires pour plus de profondeur */}
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-gradient-to-tl from-lime-500 via-emerald-400 to-green-600 mix-blend-overlay"
        />
        
        {/* Formes géométriques animées en arrière-plan */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-lime-400/30 to-green-500/30 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-teal-400/30 to-emerald-500/30 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-green-400/20 to-emerald-600/20 rounded-full blur-3xl"
        />
        
        {/* Particules flottantes vertes */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: [
                'rgba(255, 255, 255, 0.6)',
                'rgba(163, 230, 53, 0.6)',
                'rgba(34, 197, 94, 0.6)',
                'rgba(16, 185, 129, 0.6)',
              ][Math.floor(Math.random() * 4)]
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Contenu principal */}
        <div className="relative h-full flex flex-col items-center justify-center text-white px-6 z-10">
          {/* Badge animé en haut */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <div className="bg-white/20 backdrop-blur-md border-2 border-white/30 px-6 py-3 rounded-full flex items-center gap-3">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-3 h-3 bg-lime-400 rounded-full"
              />
              <span className="text-white font-bold text-lg">Disponible 24/7</span>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-3 h-3 bg-emerald-300 rounded-full"
              />
            </div>
          </motion.div>

          {/* Titre principal avec effet brillant */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 text-center"
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
              className="bg-gradient-to-r from-white via-lime-200 via-emerald-200 to-white bg-clip-text text-transparent inline-block drop-shadow-2xl"
            >
              Contactez-nous
            </motion.span>
          </motion.h1>

          {/* Sous-titre avec effet de brillance */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl md:text-2xl lg:text-3xl text-center max-w-4xl font-medium drop-shadow-lg mb-8"
          >
            Nous sommes là pour répondre à toutes vos questions sur nos craies de qualité supérieure. 
            <span className="block mt-2 text-lime-200 font-bold">
              Contactez Faso Craie dès aujourd&apos;hui !
            </span>
          </motion.p>

          {/* Boutons d'action rapide */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-600 font-bold px-8 py-4 rounded-xl shadow-2xl flex items-center gap-2 hover:shadow-white/50 transition-all"
            >
              <Phone className="w-5 h-5" />
              Appeler maintenant
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-lime-400 to-emerald-500 text-white font-bold px-8 py-4 rounded-xl shadow-2xl flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Envoyer un email
            </motion.button>
          </motion.div>
        </div>

        {/* Ligne décorative animée en bas */}
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
          className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-lime-400 via-green-500 via-emerald-400 to-lime-400"
        />
      </motion.section>

      {/* Informations de contact */}
      <section className="py-16 px-6 relative overflow-hidden bg-white">
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-2 rounded-full mb-4">
              <Sparkles className="w-5 h-5" />
              <span className="font-bold">Nos Coordonnées</span>
            </div>
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              Informations de contact
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`bg-gradient-to-br ${info.bgGradient} rounded-3xl p-6 hover:shadow-2xl transition-all duration-300 border-2 border-white/50 relative overflow-hidden group`}
                >
                  {/* Effet de brillance au survol */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className={`bg-gradient-to-br ${info.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-700 font-medium">
                        {detail}
                      </p>
                    ))}
                  </div>
                  
                  {/* Ligne décorative en bas */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${info.gradient}`} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Formulaire de contact et carte */}
      <section className="py-16 px-6 bg-gray-50 relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulaire */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-purple-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Envoyez-nous un message
                </h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Nom complet *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Téléphone
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                      placeholder="+226 XX XX XX XX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors resize-none"
                      placeholder="Votre message..."
                    />
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Envoyer le message</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Carte et informations supplémentaires */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-3xl p-6 shadow-2xl border-2 border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    Notre emplacement
                  </h3>
                </div>
                
                {/* Carte Google Maps */}
                <div className="rounded-2xl overflow-hidden shadow-lg h-96 bg-gray-100 flex items-center justify-center border-2 border-gray-200">
                  <div className="text-center p-8">
                    <MapPin className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <p className="text-gray-700 font-semibold text-lg">
                      Zone Industrielle de Kossodo
                    </p>
                    <p className="text-gray-600">
                      Secteur 30, Ouagadougou, Burkina Faso
                    </p>
                  </div>
                </div>
              </div>

              {/* Section Suivez-nous */}
              <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-gray-100">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  Suivez-nous
                </h4>
                <p className="text-gray-700 mb-4 font-medium">
                  Restez connectés avec nous sur les réseaux sociaux pour suivre nos actualités et innovations.
                </p>
                <div className="flex gap-3">
                  {[
                    { name: 'Facebook', color: 'bg-blue-600 hover:bg-blue-700' },
                    { name: 'LinkedIn', color: 'bg-blue-700 hover:bg-blue-800' },
                    { name: 'Instagram', color: 'bg-pink-600 hover:bg-pink-700' }
                  ].map((social, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex-1 ${social.color} text-white font-semibold py-3 rounded-xl transition-all shadow-lg hover:shadow-xl`}
                    >
                      {social.name}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}