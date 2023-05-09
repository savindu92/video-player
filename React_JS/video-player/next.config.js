/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DB_URI: "mongodb://localhost:27017/loginNext-auth",
    NEXTAUTH_SECRET: "fdhfdgdmq$raré-(è=)àrypper$âlrehrth",
  },
}

module.exports = nextConfig;
