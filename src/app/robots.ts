import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  if (process.env.NEXT_PUBLIC_SITE_ENV !== "live") {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://goldmountainwellnessresort.com/sitemap.xml",
  };
}
