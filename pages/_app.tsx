/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/next-script-for-ga */

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';

import cx from 'classnames';
import '../styles/globals.scss';
import sidebarStyles from '../components/Sidebar/Sidebar.module.scss';

import { isDev } from '../lib/devHelper';

import { PAGES_LAYOUT, SectionNavigation, Sidebar } from '../components/Sidebar';
import { DevBar } from '../components/DevBar';
import { kebabToCamel, splitPath } from '../utils/format';

function MyApp({ Component, pageProps }: AppProps) {
  const color = new Date().getDay() + 1;
  const colorList = ['red', 'green', 'blue', 'pink', 'purple', 'gold', 'orange'];
  const colorClass = colorList[color - 1];

  const router = useRouter();
  const paths = splitPath(router.pathname);

  return (
    <div className={cx('app-container', colorClass)}>
      <Head>
        <title>MIT 2.00b Resources Website</title>
        <meta name="description" content="MIT 2.00b Resources Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="MIT 2.00b Resources Website" />
        <meta property="og:description" content="Helpful tips and tricks for building your toy!" />
        <meta property="og:image" content="/images/og.jpg" />
        <link rel="icon" href="/favicon/favicon.ico" />{' '}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <link rel="manifest" href="/favicon/site.webmanifest"></link>
        <meta name="theme-color" content="#ffffff" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-DZWKXN9YW1"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-DZWKXN9YW1');`,
          }}
        ></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <Sidebar />
      <div className={cx('page-content', paths[0] ?? 'home', sidebarStyles[kebabToCamel(paths[1]) ?? 'intro'])}>
        {paths[0] === 'toobers' && (
          <div className="breadcrumbs">
            <span className="chapter">
              {PAGES_LAYOUT?.['/toobers']?.chapters?.[`/${paths[1]}`]?.value ?? `1. Introduction`}
            </span>{' '}
            <span className="separator">&gt;</span>{' '}
            <span className="page">
              {PAGES_LAYOUT?.['/toobers']?.chapters?.[`/${paths[1]}`]?.pages?.[`/${paths[2]}`]?.value ?? `Overview`}
            </span>
          </div>
        )}
        {isDev && <DevBar />}
        <Component {...pageProps} />
        <SectionNavigation />
      </div>
    </div>
  );
}

export default MyApp;
