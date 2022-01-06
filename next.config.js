/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  images: {
    domains: ["storage.googleapis.com", "cdn.fakercloud.com", "placeimg.com"],
    formats: ['image/avif', 'image/webp']
  }
}
