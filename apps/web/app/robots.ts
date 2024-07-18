import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
        userAgent: '*',
        allow: '/',
        disallow: [
          "/contact-us",
          "/admin-pannel"
        ],
      },
      sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
  }
}