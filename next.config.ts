/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // La propriété 'allowedDevOrigins' n'est pas une configuration Next.js standard
  // et pourrait être liée à un outil spécifique que vous utilisez.
  // Assurez-vous qu'elle est nécessaire.
  allowedDevOrigins: [
    'http://localhost:3000',    // ton localhost
    'http://127.0.0.1:3000',    // localhost alternatif
    'http://172.18.48.1:3000'   // ton IP réseau local
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'startup-template-sage.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos', // ✅ ajouté pour corriger ton erreur
      },
      // 👇 AJOUTEZ CE BLOC pour le domaine 'avatar.vercel.sh'
      {
        protocol: 'https',
        hostname: 'avatar.vercel.sh',
        // Vous pouvez aussi ajouter 'pathname: '/**'' si vous voulez être encore plus précis.
      },
    ],
  },
};

module.exports = nextConfig;