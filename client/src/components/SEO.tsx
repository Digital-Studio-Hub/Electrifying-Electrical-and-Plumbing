import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  canonical?: string;
}

export function SEO({ 
  title, 
  description, 
  keywords = [], 
  ogImage = "",
  ogType = "website",
  canonical = ""
}: SEOProps) {
  useEffect(() => {
    document.title = title;

    const metaTags: { [key: string]: string } = {
      description,
      "og:title": title,
      "og:description": description,
      "og:type": ogType,
      "twitter:card": "summary_large_image",
      "twitter:title": title,
      "twitter:description": description,
    };

    if (keywords.length > 0) {
      metaTags.keywords = keywords.join(", ");
    }

    if (ogImage) {
      metaTags["og:image"] = ogImage;
      metaTags["twitter:image"] = ogImage;
    }

    if (canonical) {
      metaTags["og:url"] = canonical;
      
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.rel = "canonical";
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.href = canonical;
    }

    Object.entries(metaTags).forEach(([name, content]) => {
      const property = name.startsWith("og:") || name.startsWith("twitter:") ? "property" : "name";
      let meta = document.querySelector(`meta[${property}="${name}"]`) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(property, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    });

    return () => {
    };
  }, [title, description, keywords, ogImage, ogType, canonical]);

  return null;
}
