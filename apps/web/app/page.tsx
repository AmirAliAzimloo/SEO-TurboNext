import Image from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

export async function generateMetadata({ }) {
  const siteURL = process.env.NEXT_PUBLIC_BASE_URL;
  
  return {
     title: `متا تایتبل`,
     description: `متا دیسکریپشن`,
     alternates: {
        canonical: `${siteURL}`,
     },
     robots: {
        index: true,
        follow: true,
        nocache: true,
     },
  };
}

export default function Home() {
  function addSiteJsonLd() {
    return {
      __html: `
       {
          "@context": "http://schema.org",
          "@graph": [
             {
                "@type": "Organization",
                "@id": "https://url/#organization",
                "name": "Next js",
                "url": "https://url/",
                "sameAs": [
                   "https://twitter.com/account",
                   "https://www.linkedin.com/in/account",
                   "https://www.instagram.com/account"
                ],
                "logo": {
                   "@type": "ImageObject",
                   "@id": "https://url/#logo",
                   "url": "https://url/logo.png",
                   "width": 350,
                   "height": 350,
                   "caption": "کپشن"
                }}]}
       `,
    };
  }

  function addBreadCrumbsJsonLd() {
    return {
      __html: `
       {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement":
          [
           {
            "@type": "ListItem",
            "position": 1,
            "item":
            {
             "@id": "https://url",
             "name": "خانه"
             }
           },
           {
            "@type": "ListItem",
           "position": 2,
           "item":
            {
              "@id": "https://url/nextjs",
              "name": "Next js"
            }
           }
          ]
         }
       `,
    };
  }

  function addProductJsonLd() {
    return {
      __html: `
       {
          "@context": "https://schema.org",
          "@type": "Product",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.25",
            "reviewCount": "10"
          },
          "name": "product name",
          "description": "this is page discription",
          "image": "product image url",
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "price": "5000",
            "priceCurrency": "IRR"
          }
       }
       `,
    };
  }

  return (
    <>
      {/* SEO Meta Tags */}
      <>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://url" />

        <title>this is page title</title>
        <meta name="description" content="this is page discrption" />

        <meta property="og:site_name" content="site_name" />
        <meta property="og:title" content="this is page title" />
        <meta property="og:description" content="this is page discrption" />
        <meta property="og:url" content="https://url" />

        <meta name="twitter:title" content="this is page title" />
        <meta name="twitter:description" content="this is page discrption" />
        <meta name="twitter:image" content="https://url.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="twitter-site" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addSiteJsonLd()}
          key="site-jsonld"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addBreadCrumbsJsonLd()}
          key="breadcrumbs-jsonld"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addProductJsonLd()}
          key="product-jsonld"
        />
      </>

      {/* HTML 5 Structure */}
      <div>
        <main>
          <h1></h1>
          <section>
            <header>
              <h2></h2>
            </header>
            <p></p>
            <h3></h3>
            <img />
            <p></p>
            <h3></h3>
            <p></p>
            <ul></ul>
            <p></p>
            <div>
              <article></article>
              <article></article>
              <article></article>
              <article></article>
            </div>
          </section>
        </main>
        <aside>
          <article></article>
          <article></article>
          <article></article>
          <article></article>
        </aside>
      </div>

      <div className={styles.page}>
        <div className="!bg-green-500 !text-red-500">Test Tailwind Config</div>
        <main className={styles.main}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <ol>
            <li>
              Get started by editing <code>app/page.tsx</code>
            </li>
            <li>Save and see your changes instantly.</li>
          </ol>

          <div className={styles.ctas}>
            <a
              className={styles.primary}
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.logo}
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Deploy now
            </a>
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              Read our docs
            </a>
          </div>
          <Button
            appName="web"
            className="mx-auto rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          >
            Open alert
          </Button>
        </main>
        <footer className={styles.footer}>
          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file-text.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
      </div>
    </>
  );
}
