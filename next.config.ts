/** @type {import('next').NextConfig} */
const nextConfig = {
  // Plus besoin de "experimental.turbopack"
  // Tu peux simplement ajouter d'autres options ici si besoin

  // Facultatif : pour éviter le warning de "Cross origin"
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://172.24.208.1:3000",
  ],
};

module.exports = nextConfig;
