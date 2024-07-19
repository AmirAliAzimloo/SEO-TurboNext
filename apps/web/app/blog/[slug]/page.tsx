import { FC } from "react";

const getData = async (inp: string) => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${inp}`,
    { cache: "no-store" }
  );
  return data.json();
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post_data = await getData(params.slug);

  const siteURL = process.env.NEXT_PUBLIC_BASE_URL;

  if (post_data.title == undefined) {
    return {
      title: `پست یافت نشد`,
      robots: {
        index: false,
        follow: false,
        nocache: true,
      },
    };
  } else {
    return {
      title: `پست ${post_data.title}`,
      description: `دیسکریپشن : ${post_data.body}`,
      alternates: {
        canonical: `${siteURL}/blog/${params.slug}`,
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
      },
    };
  }
}

// return {
//    title: `پست ${post_data.title}`,
//    description: `دیسکریپشن : ${post_data.body}`,
//    alternates: {
//       canonical: `${siteURL}/blog/${params.slug}`,
//    },
//    robots: {
//       index: true,
//       follow: true,
//       nocache: true,
//    },

//    generator: 'Next.js',
//    applicationName: 'Next.js',
//    referrer: 'origin-when-cross-origin',
//    keywords: ['Next.js', 'React', 'JavaScript'],
//    authors: [{ name: 'Seb' }, { name: 'Josh', url: 'https://nextjs.org' }],
//    creator: 'Jiachi Liu',
//    publisher: 'Sebastian Markbåge',
//    alternates: {
//       canonical: '/',
//       languages: {
//          'en-US': '/en-US',
//          'de-DE': '/de-DE',
//       },
//    },
//    icons: {
//       icon: '/icon.png',
//       shortcut: '/shortcut-icon.png',
//       apple: '/apple-icon.png',
//       other: {
//          rel: 'apple-touch-icon-precomposed',
//          url: '/apple-touch-icon-precomposed.png',
//       },
//    },
//    twitter: {
//       card: 'summary_large_image',
//       title: 'Next.js',
//       description: 'The React Framework for the Web',
//       siteId: '1467726470533754880',
//       creator: '@nextjs',
//       creatorId: '1467726470533754880',
//       images: ['https://nextjs.org/og.png'], // Must be an absolute URL
//    },
//    openGraph: {
//       title: 'Next.js',
//       description: 'The React Framework for the Web',
//       url: 'https://nextjs.org',
//       siteName: 'Next.js',
//       images: [
//          {
//             url: 'https://nextjs.org/og.png',
//             width: 800,
//             height: 600,
//          },
//          {
//             url: 'https://nextjs.org/og-alt.png',
//             width: 1800,
//             height: 1600,
//             alt: 'My custom alt',
//          },
//       ],
//       locale: 'en_US',
//       type: 'website',
//       publishedTime: '2023-01-01T00:00:00.000Z',
//       authors: ['Seb', 'Josh'],
//    },
// };

interface ISingleBlogProps {
  params: {
    slug: string;
  };
}

const SingleBlog: FC<ISingleBlogProps> = async ({ params }) => {
  const post_data = await getData(params.slug);
  console.log(post_data);

  return <div>Enter</div>;
};

export default SingleBlog;
