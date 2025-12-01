"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useRouter, useParams } from 'next/navigation';
import { Calendar, Clock, ChevronRight, ChevronLeft, User, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import NavbarDemo from "../../homesPage";

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

interface RelatedArticle {
  id: number;
  category: string;
  image: string;
  title: string;
  excerpt: string;
}

// Données des articles (normalement viendraient d'une API)
const news: Article[] = [
  {
    id: 1,
    category: 'Événements',
    categoryColor: 'bg-green-600',
    images: [
      '/actu1.jpg',
      '/essaie.jpg',
      '/actu1-1-2.jpg'
    ],
    date: '28 Novembre 2025',
    readTime: '5 min',
    title: "Faso Craie obtient le haut patronage de Son Excellence Monsieur Rimtalba Jean Emmanuel Ouédraogo, Premier ministre, Chef du Gouvernement.",
    excerpt: "Notre entreprise a été honorée lors de la cérémonie annuelle des Prix de l'Innovation Durable pour notre approche unique de...",
    author: 'Direction Faso Craie',
    fullContent: `une délégation de FASO CRAIE SARL, conduite par son premier responsable, Monsieur Rabin GORO, a eu l’insigne honneur d’être reçue ce jour par Son 𝐄𝐱𝐜𝐞𝐥𝐥𝐞𝐧𝐜𝐞 𝐌𝐨𝐧𝐬𝐢𝐞𝐮𝐫 𝐑𝐢𝐦𝐭𝐚𝐥𝐛𝐚 𝐉𝐞𝐚𝐧 𝐄𝐦𝐦𝐚𝐧𝐮𝐞𝐥 𝐎𝐮𝐞́𝐝𝐫𝐚𝐨𝐠𝐨, 𝐏𝐫𝐞𝐦𝐢𝐞𝐫 𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐞, 𝐂𝐡𝐞𝐟 𝐝𝐮 𝐆𝐨𝐮𝐯𝐞𝐫𝐧𝐞𝐦𝐞𝐧𝐭, dans le cadre des préparatifs de la 5ᵉ édition du 𝐅𝐨𝐫𝐮𝐦 𝐝𝐞𝐬 𝐉𝐞𝐮𝐧𝐞𝐬 𝐄𝐧𝐭𝐫𝐞𝐩𝐫𝐞𝐧𝐞𝐮𝐫𝐬 𝐞𝐭 𝐈𝐧𝐯𝐞𝐬𝐭𝐢𝐬𝐬𝐞𝐮𝐫𝐬 𝐝𝐮 𝐁𝐮𝐫𝐤𝐢𝐧𝐚 𝐅𝐚𝐬𝐨, 𝐩𝐫𝐞́𝐯𝐮 𝐥𝐞 𝟎𝟕 𝐟𝐞́𝐯𝐫𝐢𝐞𝐫 𝟐𝟎𝟐𝟔 𝐚̀ 𝐁𝐨𝐛𝐨-𝐃𝐢𝐨𝐮𝐥𝐚𝐬𝐬𝐨.
L’objet principal de cette audience était de solliciter le 𝐇𝐚𝐮𝐭 𝐩𝐚𝐭𝐫𝐨𝐧𝐚𝐠𝐞  de Son Excellence Monsieur le Premier Ministre pour cette édition, compte tenu de l’importance stratégique du forum pour la jeunesse et l’économie nationale.
Au cours des échanges, nous avons présenté la vision renouvelée, les perspectives et les innovations qui marqueront cette édition, placée sous le thème inspirant :
« 𝐋𝐚 𝐣𝐞𝐮𝐧𝐞𝐬𝐬𝐞 𝐞𝐧𝐭𝐫𝐞𝐩𝐫𝐞𝐧𝐞𝐮𝐫𝐢𝐚𝐥𝐞, 𝐦𝐨𝐭𝐞𝐮𝐫 𝐝𝐞 𝐥𝐚 𝐫𝐞𝐜𝐨𝐧𝐬𝐭𝐫𝐮𝐜𝐭𝐢𝐨𝐧 𝐬𝐨𝐜𝐢𝐚𝐥𝐞 𝐞𝐭 𝐝𝐮 𝐫𝐞𝐝𝐫𝐞𝐬𝐬𝐞𝐦𝐞𝐧𝐭 𝐞́𝐜𝐨𝐧𝐨𝐦𝐢𝐪𝐮𝐞 𝐝𝐮 𝐁𝐮𝐫𝐤𝐢𝐧𝐚 𝐅𝐚𝐬𝐨 ».
Son Excellence Monsieur le Premier Ministre a chaleureusement salué l’initiative et la dynamique portée par FASO CRAIE SARL en faveur d’un entrepreneuriat jeune, ambitieux et résolument tourné vers le développement national.
Il a, par la même occasion, 𝐚𝐜𝐜𝐞𝐩𝐭𝐞́ 𝐝’𝐞̂𝐭𝐫𝐞 𝐥𝐞 𝐇𝐚𝐮𝐭 𝐏𝐚𝐭𝐫𝐨𝐧 𝐝𝐞 𝐥𝐚 𝟓ᵉ 𝐞́𝐝𝐢𝐭𝐢𝐨𝐧 𝐝𝐮 𝐅𝐨𝐫𝐮𝐦, témoignant ainsi de son engagement constant aux côtés de la jeunesse burkinabè.
Ces échanges fructueux renforcent notre conviction et notre détermination à offrir, à travers ce forum, un cadre d’expression, d’inspiration et d’opportunités pour toute la jeunesse, en parfaite harmonie avec la vision du Président du Faso.
FASO CRAIE SARL réaffirme son engagement à promouvoir une jeunesse entreprenante, audacieuse et créative.
Jeunes burkinabès, préparez-vous !
Le rendez-vous approche. 
Affûtez vos idées, renforcez vos projets et soyez prêts à saisir les opportunités du Forum.
C’est votre moment. Ne le manquez pas
Inscription : 20 95 79 79 / 74 71 13 59 / 60 24 33 00
FJEI-BF — Transformer, Inspirer, Élever la jeunesse burkinabè.`
  },
  {
    id: 2,
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
    fullContent: `Nous avons eu l’honneur d’accompagner l’Association Jeunesse Consciente Africaine dans le cadre de la 4ᵉ édition du Young Leader’s Days, une initiative majeure dédiée à la sensibilisation sur la sécurité routière, les IST, la toxicomanie, le civisme et l’entrepreneuriat.Cette édition a regroupé 10 établissements scolaires de la ville de Bobo. 
Chez FASO CRAIE , nous croyons fermement que l’avenir du Burkina Faso repose sur une jeunesse éduquée, responsable et engagée. C’est pourquoi nous soutenons les projets qui renforcent l’éducation, l’intégrité et le leadership au sein des établissements scolaires.
Investir dans la jeunesse, c’est bâtir un Burkina meilleur.
Félicitations à l’AJC/AFRICA pour cette belle initiative et bravo à tous les jeunes participants pour leur engagement exemplaire !
Faso Craie — Au cœur de l’éducation, au service de la Nation.🇧🇫✏️`
  },
  {
    id: 3,
    category: 'Production',
    categoryColor: 'bg-green-600',
    images: [
      '/actu3.jpg',
      '/actu3-1.jpg',
      '/actu3-2.jpg'
    ],
    date: '10 Novembre 2025',
    readTime: '5 min',
    title: '𝐑𝐞𝐧𝐜𝐨𝐧𝐭𝐫𝐞 𝐄́𝐭𝐚𝐭-𝐒𝐞𝐜𝐭𝐞𝐮𝐫 𝐏𝐫𝐢𝐯𝐞́ : 𝐅𝐚𝐬𝐨𝐜𝐫𝐚𝐢𝐞 𝐫𝐞𝐜̧𝐨𝐢𝐭 𝐥𝐞 𝐂𝐡𝐞𝐟 𝐝𝐮 𝐆𝐨𝐮𝐯𝐞𝐫𝐧𝐞𝐦𝐞𝐧𝐭 𝐝𝐚𝐧𝐬 𝐬𝐨𝐧 𝐒𝐭𝐚𝐧𝐝',
    excerpt: " FASO CRAIE  𝐚 𝐞𝐮 𝐥𝐞 𝐩𝐫𝐢𝐯𝐢𝐥𝐞̀𝐠𝐞 𝐝𝐞 𝐫𝐞𝐜𝐞𝐯𝐨𝐢𝐫 𝐥𝐚 𝐯𝐢𝐬𝐢𝐭𝐞 ...",
    author: 'Département Production',
    fullContent: "Dans le cadre de la 22e édition des rencontres entre le gouvernement et le secteur privé, FASO CRAIE  𝐚 𝐞𝐮 𝐥𝐞 𝐩𝐫𝐢𝐯𝐢𝐥𝐞̀𝐠𝐞 𝐝𝐞 𝐫𝐞𝐜𝐞𝐯𝐨𝐢𝐫 𝐥𝐚 𝐯𝐢𝐬𝐢𝐭𝐞 𝐞𝐭 𝐥𝐞𝐬 𝐟𝐞́𝐥𝐢𝐜𝐢𝐭𝐚𝐭𝐢𝐨𝐧𝐬 𝐝𝐮 𝐏𝐫𝐞𝐦𝐢𝐞𝐫 𝐌𝐢𝐧𝐢𝐬𝐭𝐫𝐞 𝐒𝐄𝐌 𝐉𝐞𝐚𝐧 𝐄𝐦𝐦𝐚𝐧𝐮𝐞𝐥 𝐎𝐮𝐞𝐝𝐫𝐚𝐨𝐠𝐨 qui a encouragé l'équipe FasoCraie pour sa forte contribution pour une éducation de qualité au Burkina Faso. Le Directeur Général Monsieur Rabin Goro  a traduit toute sa gratitude ainsi que celles de l'ensemble des acteurs du secteur privé du GUIRIKO à son hôte exceptionnel du jour pour son engagement constant à l'endroit du secteur privé. "
  },
  {
    id: 4,
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
    fullContent: "Cette année, FASO CRAIE a l’honneur d’être partenaire officiel de cet événement exceptionnel qui réunira humour, culture et convivialité. En tant que partenaire 🇧🇫, FASO CRAIE soutient pleinement la promotion du talent burkinabè et l’essor de notre scène artistique. Ce spectacle s’annonce grandiose, riche en émotions et promet de faire vibrer le public avec l’énergie inimitable de More GAWA. Ne manquez pas ce moment unique ! 12 décembre • Maison de la Culture Humour, créativité et fierté nationale seront au rendez-vous."
  },
  {
    id: 5,
    category: 'Événements',
    categoryColor: 'bg-green-600',
    images: [
      '/actu5.jpg',
      '/actu5-1.jpg',
      '/actu5-2.jpg'
    ],
    date: '07 Novembre 2025',
    readTime: '4 min',
    title: 'Le Président Directeur Général de FASO CRAIE, Monsieur Rabin Goro, a eu l’honneur d’accueillir Paul Daumont, Maillot Jaune de la 36ᵉ édition du Tour du Faso',
    excerpt: "FASO CRAIE se réjouit d’honorer l’excellence, le mérite et l’engagement...",
    author: 'Équipe Communication',
    fullContent: `Le Président Directeur Général de FASO CRAIE, Monsieur Rabin Goro, a eu l’honneur d’accueillir Paul Daumont, Maillot Jaune de la 36ᵉ édition du Tour du Faso, entouré de ses collaborateurs.
À cette occasion, Monsieur Goro lui a adressé ses chaleureuses félicitations et a réaffirmé tout son soutien à ce digne représentant de la jeunesse burkinabè.

Il a rappelé que Paul Daumont incarne la détermination, l’effort, la persévérance et la fierté nationale, des valeurs que FASO CRAIE porte et encourage au quotidien.

FASO CRAIE se réjouit d’honorer l’excellence, le mérite et l’engagement patriotique. 🇧🇫
Une rencontre inspirante qui témoigne de la volonté de l’entreprise d’accompagner les champions d’aujourd’hui et de demain.`
  },
  {
    id: 6,
    category: 'Innovation',
    categoryColor: 'bg-green-600',
    images: [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=1200&h=600&fit=crop'
    ],
    date: '8 Janvier 2024',
    readTime: '5 min',
    title: 'Lancement de notre nouvelle gamme de craies colorées',
    excerpt: "Faso Craie innove avec une nouvelle gamme de craies colorées fabriquées à partir de matériaux 100% naturels et respectueux de l'environnement...",
    author: 'Département R&D',
    fullContent: "Après deux ans de recherche et développement, Faso Craie est fier de présenter sa nouvelle gamme de craies colorées. Cette innovation marque une étape importante dans notre mission d'offrir des produits éducatifs de qualité tout en respectant l'environnement.\n\nNotre gamme comprend 12 couleurs vives, toutes fabriquées à partir de pigments naturels. Nous avons travaillé avec des botanistes locaux pour identifier des plantes et minéraux qui peuvent produire des colorants durables et non toxiques. Le résultat est une palette de couleurs éclatantes qui ravira les enseignants et les élèves.\n\nChaque craie colorée possède la même qualité d'écriture que nos craies blanches traditionnelles. Elles sont résistantes, ne produisent pas trop de poussière et durent longtemps. Les tests menés dans 50 écoles pilotes ont montré un taux de satisfaction de 95%.\n\nLe lancement officiel aura lieu le mois prochain avec une distribution gratuite dans 100 écoles. Nous espérons que ces craies colorées rendront l'apprentissage encore plus ludique et stimulant pour les élèves."
  }
];

const relatedArticles: RelatedArticle[] = [
  {
    id: 101,
    category: 'Environnement',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop',
    title: 'Certification ISO 14001 pour notre gestion environnementale',
    excerpt: "Faso Craie obtient la certification ISO 14001, reconnaissant l'excellence de notre système de..."
  },
  {
    id: 102,
    category: 'Environnement',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&h=400&fit=crop',
    title: "Lancement du programme 'Une craie, un arbre'",
    excerpt: "Faso Craie lance son initiative 'Une craie, un arbre' : pour chaque boîte de craies vendue, nous plantons..."
  }
];

export default function ArticleDetailPage() {
  const router = useRouter();
  const params = useParams();
  const articleId = parseInt(params?.id as string);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const article = news.find((item) => item.id === articleId);
  const images = article?.images ?? [];
  const totalImages = images.length;
  const activeImage = images[currentImageIndex] ?? images[0] ?? '/banner4.jpg';

  useEffect(() => {
    if (!article && articleId) {
      router.push('/actuality');
    }
  }, [article, articleId, router]);

  const nextImage = useCallback(() => {
    if (totalImages === 0) return;
    setCurrentImageIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  }, [totalImages]);

  const prevImage = useCallback(() => {
    if (totalImages === 0) return;
    setCurrentImageIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  }, [totalImages]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        router.back();
        return;
      }

      if (totalImages > 1 && event.key === 'ArrowRight') {
        nextImage();
      } else if (totalImages > 1 && event.key === 'ArrowLeft') {
        prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [nextImage, prevImage, router, totalImages]);

  if (!article) {
    return null;
  }

  return (
    <div className="fixed inset-0 w-full h-full bg-white overflow-y-auto">
      {/* Navbar */}
      <NavbarDemo />

      {/* Hero Banner avec titre de l'article - Sans photo */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative py-20 w-full overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800"
      >
        {/* Contenu centré */}
        <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl"
          >
            <span className={`inline-block ${article.categoryColor} text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6`}>
              {article.category}
            </span>
            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
              {article.title}
            </h1>

            {/* Méta-données dans la bannière */}
            <div className="flex items-center justify-center gap-6 text-white/90 text-sm sm:text-base flex-wrap">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{article.readTime} de lecture</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contenu principal style "Card" */}
      <main className="max-w-5xl mx-auto px-4 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Image principale (Carousel) */}
          <div className="relative w-full aspect-video max-h-[500px] bg-gray-100">
            <Image
              src={activeImage}
              alt={article.title}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />

            {/* Background flouté pour l'esthétique */}
            <Image
              src={activeImage}
              alt=""
              fill
              className="object-cover blur-2xl opacity-30 -z-10"
            />

            {totalImages > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white rounded-full p-3 transition-all"
                  aria-label="Image précédente"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white rounded-full p-3 transition-all"
                  aria-label="Image suivante"
                >
                  <ChevronRight size={24} />
                </button>
                <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium">
                  {currentImageIndex + 1} / {totalImages}
                </div>
              </>
            )}
          </div>

          {/* Miniatures */}
          {totalImages > 1 && (
            <div className="w-full bg-gray-50 px-6 py-4 border-b border-gray-100 overflow-x-auto">
              <div className="flex gap-3">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${idx === currentImageIndex
                      ? 'border-green-600 shadow-md scale-105'
                      : 'border-transparent opacity-60 hover:opacity-100 hover:border-gray-300'
                      }`}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={img}
                        alt={`Miniature ${idx + 1}`}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Texte de l'article */}
          <div className="px-6 md:px-12 py-10">
            <div className="prose prose-lg max-w-none text-gray-700">
              {article.fullContent.split('\n\n').filter(Boolean).map((paragraph: string, idx: number) => (
                <p key={idx} className="leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </main>

      {/* Articles similaires */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="w-full bg-gray-50 border-t border-gray-100"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Articles similaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedArticles.map((relatedArticle) => (
              <div
                key={relatedArticle.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => router.push(`/actuality/${relatedArticle.id}`)}
              >
                <div className="relative w-full h-48">
                  <Image
                    src={relatedArticle.image}
                    alt={relatedArticle.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    {relatedArticle.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {relatedArticle.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {relatedArticle.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

    </div >
  );
}

