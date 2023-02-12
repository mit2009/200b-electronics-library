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
        <title>MIT 2.00b Electronics Library</title>
        <meta name="description" content="MIT 2.00b Electronics Library" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="MIT 2.00b Electronics Library" />
        <meta property="og:description" content="Product Design Processes" />
        {/* <meta property="og:image" content="/images/move.png" /> */}
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ND6J62XYXW"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-ND6J62XYXW');`,
          }}
        ></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <Sidebar />
      <div className={cx('page-content', sidebarStyles[kebabToCamel(paths[1]) ?? 'intro'])}>
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
        {isDev && <div className="dev-marker">development</div>}
        <Component {...pageProps} />
        <SectionNavigation />
      </div>
    </div>
  );
}

export default MyApp;
