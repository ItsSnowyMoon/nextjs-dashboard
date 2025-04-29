/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/nextjs-dashboard', // match your GitHub repo name
    trailingSlash: true, // required for static hosting
  }
  
  module.exports = nextConfig

  