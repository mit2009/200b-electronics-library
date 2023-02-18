import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import cx from 'classnames';
import styles from './Sidebar.module.scss';
import Image from 'next/image';
import { kebabToCamel } from '../../utils/format';

interface IPage {
  value: string;
  coming_soon?: boolean;
  is_hidden?: boolean;
}

interface IPages {
  [url: string]: IPage;
}

interface IChapter extends IPage {
  due_date: string;
  location: string;
  whatsDue?: any;
  has_pages: boolean;
  pages?: IPages;
}

interface IChapters {
  [url: string]: IChapter;
}

enum Location {
  AT_HOME = 'Due',
  IN_LAB = 'In Lab',
}

interface ISection extends IPage {
  has_chapters: boolean;
  chapters?: IChapters;
  icon: JSX.Element;
}

const COMING_SOON_URL = '/toobers/coming-soon';

export const PAGES_LAYOUT: { [url: string]: ISection } = {
  '/': {
    value: 'Home',
    has_chapters: false,
    icon: (
      <div>
        <Image src="/images/home-icon.svg" alt="Home Icon" height={50} width={45} />
        <div>Home</div>
      </div>
    ),
  },
  '/toobers': {
    value: 'Toobers',
    has_chapters: true,
    icon: (
      <div>
        <Image src="/images/toobers-icon.svg" alt="Home Icon" height={55} width={55} />
        <div>toobers!</div>
      </div>
    ),
    chapters: {
      '/intro': {
        value: '1. Introduction',
        due_date: 'Before Lab',
        location: Location.AT_HOME,
        has_pages: true,
        whatsDue: {
          '1.1':
            'Read through all of the introduction (3 pages) and familiarize yourself with the terms used when talking about the Toober',
          '1.2':
            'Gain a rough understanding of the Toober architecture (the components inside that make up the Toober)',
          '1.3': 'Install the Arduino IDE 2.0.3 on your laptop',
        },
        pages: {
          '/overview': {
            value: 'Overview & Getting Help',
          },
          '/components-inside': {
            value: 'The Components Inside',
          },
          '/install': {
            value: 'Installing the IDE',
          },
        },
      },
      '/cad': {
        value: '2. Enclosure CAD',
        due_date: 'Feb 17',
        location: Location.AT_HOME,
        has_pages: true,
        is_hidden: true,
        pages: {
          '/intro': {
            value: 'CAD Intro',
          },
          '/base-model': {
            value: 'Getting the Base Model',
          },
          '/case-design': {
            value: 'Designing your own Case',
          },
        },
      },
      '/sugar-cube': {
        value: '3. Sugar Cube',
        due_date: 'Feb 17',
        location: Location.IN_LAB,
        has_pages: true,
        is_hidden: true,
        pages: {
          '/intro': {
            value: 'Hello Sugar Cube!',
          },
          '/assembly': {
            value: 'Sugar Cube Assembly',
          },
        },
      },
      '/battery-charger': {
        value: '4. Battery & Charger',
        due_date: 'Feb 17',
        location: Location.IN_LAB,
        has_pages: true,
        is_hidden: true,
        pages: {
          '/intro': {
            value: 'The Power Circuit',
          },
          '/assembly': {
            value: 'Battery & Charger Assembly',
          },
        },
      },
      '/breadboarding': {
        value: '5. Breadboarding',
        due_date: 'Feb 17',
        location: Location.AT_HOME,
        has_pages: true,
        is_hidden: true,
        pages: {
          '/test': {
            value: 'Test the Microcontroller',
          },
          '/circuit': {
            value: 'The First Circuit',
          },
          '/prototype': {
            value: 'Breadboard Prototype',
          },
        },
      },
      '/pcb': {
        value: '6. PCB Assembly',
        due_date: 'Feb 17',
        location: Location.AT_HOME,
        has_pages: true,
        is_hidden: true,
        pages: {
          '/intro': {
            value: 'PCB Overview',
          },
          '/safety': {
            value: 'Solder & Safety',
          },
          '/parts': {
            value: 'Preparing the Parts',
          },
          '/soldering': {
            value: 'Actually Soldering!',
          },
          '/assembly': {
            value: 'Connect it Together',
          },
        },
      },
      '/final': {
        value: '7. Final Assembly',
        due_date: 'Feb 17',
        location: Location.AT_HOME,
        has_pages: true,
        is_hidden: true,
        pages: {
          '/intro': {
            value: 'Background Info',
          },
          '/prep': {
            value: 'Preparing your Enclosure',
          },
          '/glue': {
            value: 'Glue and Adhesives',
          },
          '/electronics': {
            value: 'Electronics Inside',
          },
        },
      },
    },
  },
  '/electronics-library': {
    value: 'Electronics Library',
    has_chapters: false,
    icon: (
      <div>
        <Image src="/images/electronics-icon.svg" alt="Home Icon" height={55} width={55} />
        <div>
          electronics
          <br />
          library
        </div>
      </div>
    ),
  },
};

// const URL_LIST = Object.keys(PAGES_LAYOUT).map(sectionUrl => {
//   if (PAGES_LAYOUT[sectionUrl].has_chapters) {
//     const chapters = PAGES_LAYOUT[sectionUrl].chapters as IChapters;
//     const chapterURLS =
//   } else {
//     return [sectionUrl, []];
//   }
// })

const PageList = ({ chapterUrl, pages, dirs }: { chapterUrl: string; pages?: IPages; dirs: string[] }) => {
  if (pages) {
    return (
      <ul className={styles.pageList}>
        {Object.keys(pages).map((pageUrl, index) => {
          if (pages[pageUrl].is_hidden) {
            return <></>;
          }

          const url = chapterUrl + pageUrl;
          const selected =
            dirs.join('') === url ||
            (index === 0 && dirs.join('') + pageUrl == url) ||
            ('/toobers/intro/overview' === url && dirs.join('') === '/toobers');
          return (
            <Link key={pageUrl} href={pages[pageUrl].coming_soon ? COMING_SOON_URL : url}>
              <li className={cx({ [styles.selected]: selected })}>{pages[pageUrl].value}</li>
            </Link>
          );
        })}
      </ul>
    );
  } else {
    return <></>;
  }
};

const ChapterContainer = ({ dirs }: { dirs: string[] }) => {
  const currentSection = dirs[0];
  if (Object.hasOwn(PAGES_LAYOUT, currentSection) && PAGES_LAYOUT[currentSection].has_chapters) {
    const chapters = PAGES_LAYOUT[currentSection].chapters as { [url: string]: IChapter };
    return (
      <div className={styles.chapterContainer}>
        {Object.keys(chapters).map((chapterUrl) => {
          if (chapters[chapterUrl].is_hidden) {
            return <></>;
          }
          const chapterPath = `${currentSection}${chapterUrl}`;

          return (
            <div className={cx(styles.chapter, [styles[kebabToCamel(chapterUrl.slice(1))]])} key={chapterUrl}>
              <div
                className={cx(styles.chapterName, {
                  [styles.selected]: dirs[dirs.length - 1] === chapterUrl,
                })}
              >
                {chapters[chapterUrl].value}
              </div>
              <div className={styles.details}>
                <div className={styles.location}>{chapters[chapterUrl].location}</div>
                <div className={styles.dueDate}>{chapters[chapterUrl].due_date}</div>
              </div>
              <PageList chapterUrl={chapterPath} pages={chapters[chapterUrl].pages} dirs={dirs} />
            </div>
          );
        })}
        <div className={cx(styles.chapter, styles.comingSoon)}>more coming soon!</div>
      </div>
    );
  } else {
    return <></>;
  }
};

const getCurrentPage = (dirs: string[]): IPage => {
  return dirs.reduce((acc: any, cur: string) => {
    if (Object.hasOwn(acc, cur)) {
      return acc[cur];
    }
    if (acc.has_chapters && Object.hasOwn(acc.chapters, cur)) {
      return acc.chapters[cur];
    }
    if (acc.has_pages && Object.hasOwn(acc.pages, cur)) {
      return acc.pages[cur];
    }
    return {};
  }, PAGES_LAYOUT);
};

const splitPath = (path: string): string[] => {
  return path
    .split('/')
    .slice(1)
    .map((dir) => `/${dir}`);
};

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
    setTargetUrl(router.pathname);
  }, [router.asPath]); // eslint-disable-line react-hooks/exhaustive-deps
  const [targetUrl, setTargetUrl] = useState(router.pathname);

  const path = router.pathname;
  const dirs = splitPath(path);
  const currentPage = getCurrentPage(dirs);
  const currentPageName = Object.hasOwn(currentPage, 'value') ? currentPage.value : 'Coming Soon!';
  return (
    <div className={styles.sidebar}>
      <div className={styles.topbar}>
        <label htmlFor="hamburger-toggle">
          <div className={styles.hamburgerContainer}>
            <input
              type="checkbox"
              id="hamburger-toggle"
              checked={isOpen}
              onChange={(e) => {
                const opened = e.target.checked;
                setIsOpen(opened);
              }}
            />
            <div className={styles.hamburger} />
          </div>
        </label>
        <div className={styles.pageName}>{currentPageName}</div>
      </div>
      <div className={cx(styles.sidebarContainer, { [styles.hidden]: !isOpen })}>
        <div className={styles.iconContainer}>
          {Object.keys(PAGES_LAYOUT).map((url) => {
            const displayDiv = (
              <div key={url} className={cx(styles.icon, { [styles.selected]: dirs[0] === url })}>
                {PAGES_LAYOUT[url].icon}
              </div>
            );
            return (
              <Link href={url} key={url}>
                {displayDiv}
              </Link>
            );
          })}
        </div>
        <ChapterContainer dirs={dirs} />
      </div>
    </div>
  );
};

const getNthPropertyName = (obj: { [key: string]: any }, position = 0): any => {
  return Object.keys(obj)[position];
};

const getNthProperty = (obj: { [key: string]: any }, position = 0): any => {
  return obj[getNthPropertyName(obj, position)];
};

const getPropertyCount = (obj: { [key: string]: any }) => {
  return Object.keys(obj).length;
};

const DOES_NOT_EXIST_RESULT = { url: '', value: '', nonexistant: true };
const COMING_SOON_RESULT = { url: COMING_SOON_URL, value: 'Coming Soon!', coming_soon: true };
const comingSoonDiv = <div className={cx(styles.navButton, styles.comingSoonLink)}>Coming Soon!</div>;

export const SectionNavigation = () => {
  const router = useRouter();
  const path = router.pathname;
  const dirs = splitPath(path);
  const currentPage = getCurrentPage(dirs);
  if (!Object.hasOwn(currentPage, 'value') || !PAGES_LAYOUT[dirs[0]].has_chapters) {
    return <></>;
  }

  const currentSection = getCurrentPage(dirs.slice(0, 1)) as ISection;
  const chapterIndex = dirs.length < 2 ? 0 : Object.keys(currentSection.chapters as IChapters).indexOf(dirs[1]);
  const currentChapter = getNthProperty(currentSection.chapters as IChapters, chapterIndex);
  const currentIndex = dirs.length < 3 ? 0 : Object.keys(currentChapter.pages).indexOf(dirs[2]);

  let prevPage = DOES_NOT_EXIST_RESULT as any;
  if (currentIndex > 0) {
    const relativeUrl = getNthPropertyName(currentChapter.pages, currentIndex - 1);
    const url = dirs.slice(0, 2).join('') + relativeUrl;
    const val = getNthProperty(currentChapter.pages, currentIndex - 1);
    if (val.coming_soon || val.is_hidden) {
      prevPage = COMING_SOON_RESULT;
    } else {
      prevPage = { url, value: val.value };
    }
  } else if (chapterIndex > 0) {
    const relativeUrl = getNthPropertyName(currentSection.chapters as IChapters, chapterIndex - 1);
    const url = dirs.slice(0, 1) + relativeUrl;
    const val = getNthProperty(currentSection.chapters as IChapters, chapterIndex - 1);
    if (val.coming_soon || val.is_hidden) {
      prevPage = COMING_SOON_RESULT;
    } else {
      prevPage = { url, value: val.value };
    }
  }

  let nextPage = DOES_NOT_EXIST_RESULT as any;
  if (currentIndex + 1 < getPropertyCount(currentChapter.pages)) {
    const relativeUrl = getNthPropertyName(currentChapter.pages, currentIndex + 1);
    const url = dirs.length < 2 ? dirs.slice(0, 1) + '/intro' + relativeUrl : dirs.slice(0, 2).join('') + relativeUrl;
    const val = getNthProperty(currentChapter.pages, currentIndex + 1);
    if (val.coming_soon || val.is_hidden) {
      nextPage = COMING_SOON_RESULT;
    } else {
      nextPage = { url, value: val.value };
    }
  } else if (chapterIndex + 1 < getPropertyCount(currentSection.chapters as IChapters)) {
    const relativeUrl = getNthPropertyName(currentSection.chapters as IChapters, chapterIndex + 1);
    const url = dirs.slice(0, 1) + relativeUrl;
    const val = getNthProperty(currentSection.chapters as IChapters, chapterIndex + 1);
    if (val.coming_soon || val.is_hidden) {
      nextPage = COMING_SOON_RESULT;
    } else {
      nextPage = { url, value: val.value };
    }
  }

  const prevDiv = (
    <Link href={prevPage.url}>
      <div className={cx(styles.navButton, styles.prevLink)}>Back to {prevPage.value}</div>
    </Link>
  );

  const nextDiv = (
    <Link href={nextPage.url}>
      <div className={cx(styles.navButton, styles.nextLink)}>Proceed to {nextPage.value}</div>
    </Link>
  );

  return (
    <div className={styles.sectionNav}>
      {prevPage.nonexistant ? <div></div> : prevPage.coming_soon ? comingSoonDiv : prevDiv}
      {nextPage.nonexistant ? <></> : nextPage.coming_soon ? comingSoonDiv : nextDiv}
    </div>
  );
};
