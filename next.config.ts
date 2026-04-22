import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enable static export for GitHub Pages
  basePath: "/rachwist-flightdeck", // Set the base path to your repo name
  trailingSlash: true, // Add trailing slashes to URLs
};

export default nextConfig;
