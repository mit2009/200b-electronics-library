import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import cx from 'classnames';
import styles from './Sidebar.module.scss';

interface IPage {
  value: string;
  coming_soon?: boolean;
}

interface IPages {
  [url: string]: IPage;
}

interface IChapter extends IPage {
  due_date: string;
  location: string;

  has_pages: boolean;
  pages?: IPages;
}

enum Location {
  AT_HOME = "At Home",
  IN_LAB = "In Lab",
}

interface ISection extends IPage {
  has_chapters: boolean;
  chapters?: { [url: string]: IChapter };
  icon: JSX.Element;
}

const COMING_SOON_URL = "/toobers/coming-soon";

const PAGES_LAYOUT: { [url: string]: ISection } = {
  "/": {
    value: "Home",
    has_chapters: false,
    icon: <div>HOME</div>,
  },
  "/toobers": {
    value: "Toobers",
    has_chapters: true,
    icon: <div>Toober</div>,
    chapters: {
      "/intro": {
        value: "1. Introduction",
        due_date: "Feb 17",
        location: Location.AT_HOME,
        has_pages: true,
        pages: {
          "/overview": {
            value: "Overview",
          },
          "/components-inside": {
            value: "The Components Inside",
            coming_soon: true,
          }
        },
      },
      "/cad": {
        value: "2. Enclosure CAD",
        due_date: "Feb 17",
        location: Location.AT_HOME,
        has_pages: true,
        pages: {
          "/intro": {
            value: "CAD Intro",
          },
          "/base-model": {
            value: "Getting the Base Model",
            coming_soon: true,
          },
          "/case-design": {
            value: "Designing your own Case",
            coming_soon: true,
          }
        },
      },
      "/sugar-cube": {
        value: "3. Sugar Cube",
        coming_soon: true,
        due_date: "Feb 17",
        location: Location.IN_LAB,
        has_pages: true,
        pages: {
          "/intro": {
            value: "Getting to know your sugar cube",
            coming_soon: true,
          },
          "/assembly": {
            value: "Sugar Cube Assembly",
            coming_soon: true,
          }
        },
      },
      "/battery-charger": {
        value: "4. Battery & Charger",
        coming_soon: true,
        due_date: "Feb 17",
        location: Location.IN_LAB,
        has_pages: true,
        pages: {
          "/intro": {
            value: "Getting to know your Battery & Charger",
            coming_soon: true,
          },
          "/assembly": {
            value: "Battery & Charger Assembly",
            coming_soon: true,
          }
        },
      },
      "/breadboarding": {
        value: "5. Breadboarding",
        due_date: "Feb 17",
        location: Location.AT_HOME,
        has_pages: true,
        pages: {
          "/install": {
            value: "Installing the IDE",
          },
          "/test": {
            value: "Test the Microcontroller",
            coming_soon: true,
          },
          "/circuit": {
            value: "The First Circuit",
            coming_soon: true,
          },
          "/prototype": {
            value: "Breadboard Prototype",
            coming_soon: true,
          }
        },
      },
      "/pcb": {
        value: "6. PCB Assembly",
        coming_soon: true,
        due_date: "Feb 17",
        location: Location.AT_HOME,
        has_pages: true,
        pages: {
          "/intro": {
            value: "PCB Overview",
            coming_soon: true,
          },
          "/safety": {
            value: "Solder & Safety",
            coming_soon: true,
          },
          "/parts": {
            value: "Preparing the Parts",
            coming_soon: true,
          },
          "/soldering": {
            value: "Actually Soldering!",
            coming_soon: true,
          },
          "/assembly": {
            value: "Connect it Together",
            coming_soon: true,
          }
        },
      },
      "/final": {
        value: "7. Final Assembly",
        coming_soon: true,
        due_date: "Feb 17",
        location: Location.AT_HOME,
        has_pages: true,
        pages: {
          "/intro": {
            value: "Background Info",
            coming_soon: true,
          },
          "/prep": {
            value: "Preparing your Enclosure",
            coming_soon: true,
          },
          "/glue": {
            value: "Glue and Adhesives",
            coming_soon: true,
          },
          "/electronics": {
            value: "Electronics Inside",
            coming_soon: true,
          }
        },
      },
    }
  },
  "/electronic-library": {
    value: "Electronics Library",
    has_chapters: false,
    icon: <div>Electronics</div>,
  }
}
const PageList = ({ chapterUrl, pages, dirs }: { chapterUrl: string, pages?: IPages, dirs: string[] }) => {
  if (pages) {
    return (
      <ul className={styles.pageList}>
        {Object.keys(pages).map((pageUrl, index) => {
          const url = chapterUrl + pageUrl;
          const selected = dirs.join("") === url || index === 0 && dirs.join("") + pageUrl == url || "/toobers/intro/overview" === url && dirs.join("") === "/toobers"; 
          return <li key={pageUrl} className={cx({ [styles.selected]: selected })}><Link href={pages[pageUrl].coming_soon ? COMING_SOON_URL : url}>{pages[pageUrl].value}</Link></li>
        })}
      </ul>
    )
  } else {
    return <></>
  }
}

const ChapterContainer = ({ dirs }: { dirs: string[] }) => {
  const currentSection = dirs[0];
  if (Object.hasOwn(PAGES_LAYOUT, currentSection) && PAGES_LAYOUT[currentSection].has_chapters) {
    const chapters = PAGES_LAYOUT[currentSection].chapters as { [url: string]: IChapter }
    return (
      <div className={styles.chapterContainer}>
        {Object.keys(chapters).map(chapterUrl => {

          const chapterPath = `${currentSection}${chapterUrl}`;
          return (
            <div className={styles.chapter} key={chapterUrl}>
              <Link href={chapters[chapterUrl].coming_soon ? COMING_SOON_URL : chapterPath}><div className={cx(styles.chapterName, { [styles.selected]: dirs[dirs.length - 1] === chapterUrl })}>{chapters[chapterUrl].value}</div></Link>
              <div className={styles.details}>
                <div className={styles.location}>{chapters[chapterUrl].location}</div>
                <div className={styles.dueDate}>{chapters[chapterUrl].due_date}</div>
              </div>
              <PageList chapterUrl={chapterPath} pages={chapters[chapterUrl].pages} dirs={dirs} />
            </div>
          )
        })}
      </div>
    );
  } else {
    return <></>
  }
}

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [router.asPath]); // eslint-disable-line react-hooks/exhaustive-deps

  const path = router.pathname;
  const dirs = path.split("/").slice(1).map(dir => `/${dir}`);
  const currentPage = dirs.reduce((acc: any, cur: string) => {
    if (Object.hasOwn(acc, cur)) {
      return acc[cur];
    }
    if (acc.has_chapters && Object.hasOwn(acc.chapters, cur)) {
      return acc.chapters[cur];
    }
    if (acc.has_pages && Object.hasOwn(acc.pages, cur)) {
      return acc.pages[cur];
    }
    return {}
  }, PAGES_LAYOUT);
  const currentPageName = Object.hasOwn(currentPage, "value") ? currentPage.value : "Coming Soon!";
  return (
    <div className={styles.sidebar}>
      <div className={styles.topbar}>
        <label htmlFor="hamburger-toggle">
          <div className={styles.hamburgerContainer}>
            <input type="checkbox" id="hamburger-toggle" checked={isOpen} onChange={(e) => {
              const opened = e.target.checked;
              setIsOpen(opened);
            }} />
            <div className={styles.hamburger} />
          </div>
        </label>
        <div>{currentPageName}</div>
      </div>
      <div className={cx(styles.sidebarContainer, { [styles.hidden]: !isOpen })}>
        <div className={styles.iconContainer}>
          {Object.keys(PAGES_LAYOUT).map(url => {
            return <Link href={url} key={url}><div className={cx(styles.icon, { [styles.selected]: dirs[0] === url })}>{PAGES_LAYOUT[url].icon}</div></Link>
          })}
        </div>
        <ChapterContainer dirs={dirs} />
      </div>
    </div>
  )
}