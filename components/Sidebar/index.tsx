import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

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
}

const COMING_SOON_URL = "/toobers/coming-soon";

const PAGES_LAYOUT: { [url: string]: ISection } = {
  "/": {
    value: "Home Icon",
    has_chapters: false,
  },
  "/toobers": {
    value: "Toober Icon",
    has_chapters: true,
    chapters: {
      "/intro": {
        value: "Introduction",
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
      "/CAD": {
        value: "Toober Enclosure CAD",
        coming_soon: true,
        due_date: "Feb 17",
        location: Location.AT_HOME,
        has_pages: true,
        pages: {
          "/intro": {
            value: "CAD Intro",
            coming_soon: true,
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
        value: "Sugar Cube",
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
        value: "Battery & Charger",
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
        value: "Breadboarding",
        coming_soon: true,
        due_date: "Feb 17",
        location: Location.AT_HOME,
        has_pages: true,
        pages: {
          "/install": {
            value: "Installing the IDE",
            coming_soon: true,
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
        value: "PCB Assembly",
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
        value: "Final Assembly",
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
    value: "Electronic Library Icon",
    has_chapters: false,
  }
}
const PageList = ({chapterUrl, pages}: {chapterUrl: string, pages?: IPages}) => {
  if (pages) {
    return (
      <ul className={styles.pageList}>
        {Object.keys(pages).map(pageUrl => {
          return <li key={pageUrl}><Link href={pages[pageUrl].coming_soon ?  COMING_SOON_URL : chapterUrl + pageUrl}>{pages[pageUrl].value}</Link></li>
        })}
      </ul>
    )
  } else {
    return <></>
  }
}

const ChapterContainer = () => {
  const router = useRouter();
  const path = router.pathname;
  const currentSection = "/" + path.split("/")[1]

  if (Object.hasOwn(PAGES_LAYOUT, currentSection) && PAGES_LAYOUT[currentSection].has_chapters) {
    const chapters = PAGES_LAYOUT[currentSection].chapters as { [url: string]: IChapter }
    return (
      <div className={styles.chapterContainer}>
        {Object.keys(chapters).map(chapterUrl => {

          const chapterPath = `/${currentSection}${chapterUrl}`;
          return (
            <div className={styles.chapter} key={chapterUrl}>
              <Link href={chapters[chapterUrl].coming_soon ? COMING_SOON_URL : chapterPath}><div className={styles.chapterName}>{chapters[chapterUrl].value}</div></Link>
              <div className={styles.details}>
                <div className={styles.location}>{chapters[chapterUrl].location}</div>
                <div className={styles.dueDate}>{chapters[chapterUrl].due_date}</div>
              </div>
              <PageList chapterUrl={chapterPath} pages={chapters[chapterUrl].pages} />
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
  return (
    <div className={styles.sidebar}>
      <div className={styles.iconContainer}>
        {Object.keys(PAGES_LAYOUT).map(url => {
          return <Link href={url} key={url}><div className={styles.icon}>{PAGES_LAYOUT[url].value}</div></Link>
        })}
      </div>
      <ChapterContainer />
    </div>
  )
}