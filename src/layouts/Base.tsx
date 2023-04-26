import config from '@/config/config.json';
import { plainify } from '@/lib/utils';
import { Footer, Header } from '@/partials';
import { BaseLayoutProps } from '@/types';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const BaseLayout: React.FC<BaseLayoutProps> = ({
  title,
  meta_title,
  description,
  image,
  noindex,
  canonical,
  children,
}) => {
  const { meta_image, meta_author, meta_description } = config.metadata;
  const { base_url } = config.site;
  const router = useRouter();

  useEffect(() => {
    // Scroll to top on navigation
    const handleRouteChange = () => window.scrollTo(0, 0);
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router]);

  return (
    <React.Fragment>
      <Head>
        {/* title */}
        <title>
          {plainify(
            meta_title ? meta_title : title ? title : config.site.title
          )}
        </title>

        {/* canonical url */}
        {canonical && <link rel="canonical" href={canonical} itemProp="url" />}

        {/* noindex robots */}
        {noindex && <meta name="robots" content="noindex,nofollow" />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* meta-description */}
        <meta
          name="description"
          content={
            plainify(description ? description : meta_description) as string
          }
        />

        {/* author from config.json */}
        <meta name="author" content={meta_author} />

        {/* og-title */}
        <meta
          property="og:title"
          content={
            plainify(
              meta_title ? meta_title : title ? title : config.site.title
            ) as string
          }
        />

        {/* og-description */}
        <meta
          property="og:description"
          content={
            plainify(description ? description : meta_description) as string
          }
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${base_url}/${router.asPath.replace('/', '')}`}
        />

        {/* twitter-title */}
        <meta
          name="twitter:title"
          content={
            plainify(
              meta_title ? meta_title : title ? title : config.site.title
            ) as string
          }
        />

        {/* twitter-description */}
        <meta
          name="twitter:description"
          content={
            plainify(description ? description : meta_description) as string
          }
        />

        {/* og-image */}
        <meta
          property="og:image"
          content={`${base_url}${image ? image : meta_image}`}
        />

        {/* twitter-image */}
        <meta
          name="twitter:image"
          content={`${base_url}${image ? image : meta_image}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      {/* main site */}
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default BaseLayout;
