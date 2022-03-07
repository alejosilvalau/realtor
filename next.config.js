/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["bayut-production.s3.eu-central-1.amazonaws.com"],
	},
	env: {
		BASE_URL: process.env.BASE_URL,
	},
};

module.exports = nextConfig;
