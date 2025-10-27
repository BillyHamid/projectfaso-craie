/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: [
    'http://localhost:3000',   // ton localhost
    'http://127.0.0.1:3000',   // localhost alternatif
    'http://172.18.48.1:3000'  // ton IP réseau local
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
    ],
  },
};

module.exports = nextConfig;
