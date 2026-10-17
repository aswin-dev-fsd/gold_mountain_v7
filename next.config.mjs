/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/wellness", destination: "/wellness-resort-tiruvannamalai", permanent: true },
      { source: "/ayurveda", destination: "/ayurveda-treatments-tiruvannamalai", permanent: true },
      { source: "/stay", destination: "/rooms-in-tiruvannamalai", permanent: true },
      { source: "/about", destination: "/about-us", permanent: true },
      { source: "/contact", destination: "/contact-us", permanent: true },
      { source: "/ayurveda-treatments-in-tiruvanammalai", destination: "/ayurveda-treatments-tiruvannamalai", permanent: true },
    ];
  },
};

export default nextConfig;
