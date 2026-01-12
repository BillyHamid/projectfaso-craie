"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

interface Article {
  id: number;
  category: string;
  categoryColor: string;
  images: string[];
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  author: string;
  fullContent: string;
}

const news: Article[] = [
  {
    id: 1,
    category: 'Événements',
    categoryColor: 'bg-green-600',
    images: [
      '/actu7.jpg',
      '/actu7-1.jpg',
      '/actu7-2.jpg'
    ],
    date: '09 Janvier 2026',
    readTime: '3 min',
    title: "𝐌𝐎𝐍𝐒𝐈𝐄𝐔𝐑 𝐋𝐄 𝐌𝐈𝐍𝐈𝐒𝐓𝐑𝐄 𝐃𝐄𝐒 𝐒𝐏𝐎𝐑𝐓𝐒, 𝐃𝐄 𝐋𝐀 𝐉𝐄𝐔𝐍𝐄𝐒𝐒𝐄 𝐄𝐓 𝐃𝐄 𝐋’𝐄𝐌𝐏𝐋𝐎𝐈, 𝐂𝐎𝐏𝐑𝐄́𝐒𝐈𝐃𝐄𝐍𝐓 𝐃𝐔 𝐅𝐎𝐑𝐔𝐌 𝐃𝐄𝐒 𝐉𝐄𝐔𝐍𝐄𝐒 𝐄𝐍𝐓𝐑𝐄𝐏𝐑𝐄𝐍𝐄𝐔𝐑𝐒 𝐄𝐓 𝐈𝐍𝐕𝐄𝐒𝐓𝐈𝐒𝐒𝐄𝐔𝐑𝐒 𝐃𝐔 𝐅𝐀𝐒𝐎",
    excerpt: "Monsieur Rabin Goro , a été reçue en audience par 𝐌𝐨𝐧𝐬𝐢𝐞𝐮𝐫 𝐥𝐞 𝐌𝐢𝐧𝐢𝐬𝐭𝐫𝐞 𝐝𝐞𝐬 𝐒𝐩𝐨𝐫𝐭𝐬, ...",
    author: 'Direction Faso Craie',
    fullContent: ''
  },
  {
    id: 2,
    category: 'Événements',
    categoryColor: 'bg-green-600',
    images: [
      '/actu1.jpg',
      '/essaie.jpg',
      '/actu1-1.jpg'
    ],
    date: '28 Novembre 2025',
    readTime: '3 min',
    title: "𝐒𝐎𝐍 𝐄𝐗𝐂𝐄𝐋𝐋𝐄𝐍𝐂𝐄 𝐌𝐎𝐍𝐒𝐈𝐄𝐔𝐑 𝐋𝐄 𝐏𝐑𝐄𝐌𝐈𝐄𝐑 𝐌𝐈𝐍𝐈𝐒𝐓𝐑𝐄, 𝐂𝐇𝐄𝐅 𝐃𝐔 𝐆𝐎𝐔𝐕𝐄𝐑𝐍𝐄𝐌𝐄𝐍𝐓,𝐇𝐀𝐔𝐓 𝐏𝐀𝐓𝐑𝐎𝐍 𝐃𝐄 𝐋𝐀 𝟓ᵉ 𝐄́𝐃𝐈𝐓𝐈𝐎𝐍 𝐃𝐔 𝐅𝐎𝐑𝐔𝐌 𝐃𝐄𝐒 𝐉𝐄𝐔𝐍𝐄𝐒 𝐄𝐍𝐓𝐑𝐄𝐏𝐑𝐄𝐍𝐄𝐔𝐑𝐒 𝐄𝐓 𝐈𝐍𝐕𝐄𝐒𝐓𝐈𝐒𝐒𝐄𝐔𝐑𝐒 𝐃𝐔 𝐁𝐔𝐑𝐊𝐈𝐍𝐀 𝐅𝐀𝐒𝐎",
    excerpt: "Une nouvelle dynamique s’amorce ...",
    author: 'Direction Faso Craie',
    fullContent: ''
  },
  {
    id: 3,
    category: 'Partenariats',
    categoryColor: 'bg-green-600',
    images: [
      '/actu2.jpg',
      '/actu2-1.jpg',
      '/actu2-2.jpg'
    ],
    date: '15 Novembre 2025',
    readTime: '4 min',
    title: '𝐅𝐚𝐬𝐨 𝐂𝐫𝐚𝐢𝐞 𝐚𝐜𝐜𝐨𝐦𝐩𝐚𝐠𝐧𝐞 𝐥𝐚 𝐣𝐞𝐮𝐧𝐞𝐬𝐬𝐞 𝐜𝐨𝐧𝐬𝐜𝐢𝐞𝐧𝐭𝐞 !',
    excerpt: "Nous avons eu l’honneur d’accompagner l’Association Jeunesse Consciente Africaine...",
    author: 'Équipe Communication',
    fullContent: ''
  },
  {
    id: 4,
    category: 'Production',
    categoryColor: 'bg-green-600',
    images: [
      '/actu3.jpg'
      
    ],
    date: '10 Novembre 2025',
    readTime: '5 min',
    title: '𝐑𝐞𝐧𝐜𝐨𝐧𝐭𝐫𝐞 𝐄́𝐭𝐚𝐭-𝐒𝐞𝐜𝐭𝐞𝐮𝐫 𝐏𝐫𝐢𝐯𝐞́ : 𝐅𝐚𝐬𝐨𝐜𝐫𝐚𝐢𝐞 𝐫𝐞𝐜̧𝐨𝐢𝐭 𝐥𝐞 𝐂𝐡𝐞𝐟 𝐝𝐮 𝐆𝐨𝐮𝐯𝐞𝐫𝐧𝐞𝐦𝐞𝐧𝐭 𝐝𝐚𝐧𝐬 𝐬𝐨𝐧 𝐒𝐭𝐚𝐧𝐝',
    excerpt: " FASO CRAIE  𝐚 𝐞𝐮 𝐥𝐞 𝐩𝐫𝐢𝐯𝐢𝐥𝐞̀𝐠𝐞 𝐝𝐞 𝐫𝐞𝐜𝐞𝐯𝐨𝐢𝐫 𝐥𝐚 𝐯𝐢𝐬𝐢𝐭𝐞...",
    author: 'Département Production',
    fullContent: ''
  },
  {
    id: 5,
    category: 'Environnement',
    categoryColor: 'bg-green-600',
    images: [
      '/actu4.jpg'
      
    ],
    date: '09 Novembre 2025',
    readTime: '4 min',
    title: 'FASO CRAIE, Partenaire avec l’humoriste More GAWA',
    excerpt: "nous vous donnons rendez-vous le 12 décembre...",
    author: 'Responsable Environnement',
    fullContent: ''
  },
  {
    id: 6,
    category: 'Événements',
    categoryColor: 'bg-green-600',
    images: [
      '/actu5.jpg'
    ],
    date: '07 Novembre 2025',
    readTime: '4 min',
    title: 'Le Président Directeur Général de FASO CRAIE, Monsieur Rabin Goro, a eu l’honneur d’accueillir Paul Daumont, Maillot Jaune de la 36ᵉ édition du Tour du Faso',
    excerpt: "FASO CRAIE se réjouit d’honorer l’excellence, le mérite et l’engagement...",
    author: 'Équipe Communication',
    fullContent: ''
  },
  {
    id: 7,
    category: 'Innovation',
    categoryColor: 'bg-green-600',
    images: [
      '/actu6.jpg',
      '/actu6-1.jpg'
    ],
    date: '11 Novembre 2025',
    readTime: '5 min',
    title: 'FASO CRAIE a eu l’immense honneur d’accueillir au sein de son unité de production : •𝐃𝐫 𝐀𝐛𝐨𝐮𝐛𝐚𝐤𝐚𝐫 𝐍𝐀𝐂𝐀𝐍𝐀𝐁𝐎, 𝐌𝐢𝐧𝐢𝐬𝐭𝐫𝐞 𝐝𝐞 𝐥’𝐄́𝐜𝐨𝐧𝐨𝐦𝐢𝐞 𝐞𝐭 𝐝𝐞𝐬 𝐅𝐢𝐧𝐚𝐧𝐜𝐞𝐬, •𝐉𝐚𝐜𝐪𝐮𝐞𝐬 𝐒𝐨𝐬𝐭𝐡𝐞̀𝐧𝐞 𝐃𝐈𝐍𝐆𝐀𝐑𝐀, 𝐌𝐢𝐧𝐢𝐬𝐭𝐫𝐞 𝐝𝐞 𝐥’𝐄́𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 𝐝𝐞 𝐁𝐚𝐬𝐞, 𝐝𝐞 𝐥’𝐀𝐥𝐩𝐡𝐚𝐛𝐞́𝐭𝐢𝐬𝐚𝐭𝐢𝐨𝐧 𝐞𝐭 𝐝𝐞 𝐥𝐚 𝐏𝐫𝐨𝐦𝐨𝐭𝐢𝐨𝐧 𝐝𝐞𝐬 𝐋𝐚𝐧𝐠𝐮𝐞𝐬 𝐍𝐚𝐭𝐢𝐨𝐧𝐚𝐥𝐞𝐬.',
    excerpt: "Cette visite constitue un moment fort pour notre entreprise, véritable fierté du savoir-faire ...",
    author: 'Département R&D',
    fullContent: ''
  }
];

const formatDateForDisplay = (date: string) => {
  const months: { [key: string]: string } = {
    'Janvier': 'JAN',
    'Février': 'FÉV',
    'Mars': 'MAR',
    'Avril': 'AVR',
    'Mai': 'MAI',
    'Juin': 'JUN',
    'Juillet': 'JUL',
    'Août': 'AOÛ',
    'Septembre': 'SEP',
    'Octobre': 'OCT',
    'Novembre': 'NOV',
    'Décembre': 'DÉC'
  };

  const parts = date.split(' ');
  const day = parts[0];
  const month = months[parts[1]] || parts[1]?.toUpperCase().slice(0, 3) || '';
  const year = parts[2] || '';

  return { day, month, year };
};

export default function Actualite() {
  const router = useRouter();
  const featuredArticle = news[0];
  const otherArticles = news.slice(1);

  const openArticle = (article: Article) => {
    router.push(`/actuality/${article.id}`);
  };

  const { day, month, year } = formatDateForDisplay(featuredArticle.date);

  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      {/* Hero Banner avec grande image et overlay */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-[500px] md:h-[600px] w-full overflow-hidden"
      >
        {/* Image de fond */}
        <div className="absolute inset-0">
          <Image
            src="/baniere.jpg"
            alt="Bannière actualités"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        {/* Overlay sombre */}


        {/* Contenu centré */}
        <div className="relative h-full flex flex-col items-center justify-center px-4">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8 text-white/90 text-sm"
          >
            Accueil &gt;&gt; Actualités/Blog
          </motion.div>

          {/* Titre principal avec bordure dorée */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative"
          >
            <div className="relative border-2 border-yellow-400 px-8 py-4 md:px-12 md:py-6">
              {/* Lignes diagonales dorées */}
              <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-yellow-400" />
              <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-yellow-400" />

              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase tracking-wide">
                Actualités / Blog
              </h1>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contenu principal - Layout deux colonnes */}
      <main className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Colonne gauche - Article principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Article vedette */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              {/* Grande image horizontale */}
              <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden group bg-gray-100">
                {/* Background flouté pour remplir l'espace */}
                <Image
                  src={featuredArticle.images[0]}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover blur-xl opacity-50 scale-110"
                  fill
                />
                {/* Image principale non coupée */}
                <Image
                  src={featuredArticle.images[0]}
                  alt={featuredArticle.title}
                  className="relative w-full h-full object-contain z-10 transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:rotate-1 group-hover:brightness-110"
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out z-20 pointer-events-none" />
              </div>

              {/* Contenu de l'article */}
              <div className="p-6 md:p-8">
                {/* Date en grand format */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-6xl md:text-7xl font-bold text-gray-900">{day}</span>
                    <div className="flex flex-col">
                      <span className="text-xl md:text-2xl font-semibold text-gray-700 uppercase tracking-wide">
                        {month}
                      </span>
                      <span className="text-lg text-gray-500">{year}</span>
                    </div>
                  </div>
                </div>

                {/* Titre */}
                <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  {featuredArticle.title}
                </h2>

                {/* Extrait */}
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                  {featuredArticle.excerpt}
                </p>

                {/* Bouton Lire */}
                <button
                  onClick={() => openArticle(featuredArticle)}
                  className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 font-semibold text-lg uppercase tracking-wide transition-colors group"
                >
                  Lire
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>

            {/* Autres articles */}
            <div className="space-y-8">
              {otherArticles.map((article, index) => {
                const { day: artDay, month: artMonth, year: artYear } = formatDateForDisplay(article.date);
                return (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="bg-white rounded-lg overflow-hidden shadow-lg"
                  >
                    {/* Grande image horizontale */}
                    <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden group bg-gray-100">
                      {/* Background flouté pour remplir l'espace */}
                      <Image
                        src={article.images[0]}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover blur-xl opacity-50 scale-110"
                        fill
                      />
                      {/* Image principale non coupée */}
                      <Image
                        src={article.images[0]}
                        alt={article.title}
                        className="relative w-full h-full object-contain z-10 transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:rotate-1 group-hover:brightness-110"
                        fill
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out z-20 pointer-events-none" />
                    </div>

                    {/* Contenu de l'article */}
                    <div className="p-6 md:p-8">
                      {/* Date en grand format */}
                      <div className="mb-6">
                        <div className="flex items-baseline gap-3">
                          <span className="text-6xl md:text-7xl font-bold text-gray-900">{artDay}</span>
                          <div className="flex flex-col">
                            <span className="text-xl md:text-2xl font-semibold text-gray-700 uppercase tracking-wide">
                              {artMonth}
                            </span>
                            <span className="text-lg text-gray-500">{artYear}</span>
                          </div>
                        </div>
                      </div>

                      {/* Titre */}
                      <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                        {article.title}
                      </h2>

                      {/* Extrait */}
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                        {article.excerpt}
                      </p>

                      {/* Bouton Lire */}
                      <button
                        onClick={() => openArticle(article)}
                        className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 font-semibold text-lg uppercase tracking-wide transition-colors group"
                      >
                        Lire
                        <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>

          {/* Colonne droite - Contenu secondaire */}
          <aside className="lg:col-span-1 space-y-6">
            {/* Magazine Kibaru style */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative w-full h-[500px] bg-gradient-to-b from-[#0B1C34] to-[#142A4C] p-6 flex flex-col items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2 tracking-wide">
                    FASO CRAIE
                  </h3>
                  <p className="text-yellow-300 text-sm uppercase tracking-[0.2em] mb-4">
                    Bulletin trimestriel d&apos;information
                  </p>
                  <div className="text-6xl font-bold text-white mb-4">N°52</div>
                  <p className="text-white/70 text-xs uppercase tracking-wide">
                    Janvier-Mars 2024
                  </p>
                </div>
              </div>
              <div className="p-4 bg-gray-50 text-center">
                <p className="text-sm font-semibold text-gray-900">KIBARU N°52</p>
                <p className="text-xs text-gray-600 mt-1">Bulletin trimestriel d&apos;information</p>
              </div>
            </motion.div>

            {/* Articles récents */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
                Articles récents
              </h3>
              <div className="space-y-4">
                {otherArticles.slice(0, 3).map((article) => {
                  const { day: artDay, month: artMonth } = formatDateForDisplay(article.date);
                  return (
                    <div
                      key={article.id}
                      onClick={() => openArticle(article)}
                      className="cursor-pointer hover:bg-gray-50 p-3 rounded transition-colors border-b border-gray-100 last:border-0"
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-2xl font-bold text-gray-900 min-w-[40px]">{artDay}</div>
                        <div className="flex-1">
                          <p className="text-xs text-gray-500 uppercase mb-1">{artMonth}</p>
                          <h4 className="text-sm font-semibold text-gray-900 line-clamp-2">
                            {article.title}
                          </h4>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </aside>
        </div>
      </main>
    </div>
  );
}
