import type { MetadataRoute } from "next";

const baseUrl = "https://goldmountainwellnessresort.com";
const lastModified = new Date("2026-10-08");
const paths = [
  "/",
  "/wellness-resort-tiruvannamalai",
  "/ayurveda-treatments-tiruvannamalai",
  "/rooms-in-tiruvannamalai",
  "/about-us",
  "/contact-us",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({ url: `${baseUrl}${path}`, lastModified }));
}
