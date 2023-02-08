import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import cx from 'classnames';
import styles from './Sidebar.module.scss';

interface IPage {
  value: string;
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
          }
        },
      },
      "/CAD": {
        value: "Toober Enclosure CAD",
        due_date: "Feb 17",
        location: Location.AT_HOME,
        has_pages: true,
        pages: {
          "/intro": {
            value: "CAD Intro",
          },
          "/base-model": {
            value: "Getting the Base Model",
          },
          "/case-design": {
            value: "Designing your own Case",
          }
        },
      },
      "/sugar-cube": {
        value: "Sugar Cube",
        due_date: "Feb 17",
        location: Location.IN_LAB,
        has_pages: true,
        pages: {
          "/intro": {
            value: "Getting to know your sugar cube",
          },
          "/assembly": {
            value: "Sugar Cube Assembly",
          }
        },
      },
      "/battery-charger": {
        value: "Battery & Charger",
        due_date: "Feb 17",
        location: Location.IN_LAB,
        has_pages: true,
        pages: {
          "/intro": {
            value: "Getting to know your Battery & Charger",
          },
          "/assembly": {
            value: "Battery & Charger Assembly",
          }
        },
      },
      "/breadboarding": {
        value: "Breadboarding",
        due_date: "Feb 17",
        location: Location.AT_HOME,
        has_pages: true,
        pages: {
          "/install": {
            value: "Installing the IDE",
          },
          "/test": {
            value: "Test the Microcontroller",
          },
          "/circuit": {
            value: "The First Circuit",
          },
          "/prototype": {
            value: "Breadboard Prototype",
          }
        },
      },
      "/pcb": {
        value: "PCB Assembly",
        due_date: "Feb 17",
        location: Location.AT_HOME,
        has_pages: true,
        pages: {
          "/intro": {
            value: "PCB Overview",
          },
          "/safety": {
            value: "Solder & Safety",
          },
          "/parts": {
            value: "Preparing the Parts",
          },
          "/soldering": {
            value: "Actually Soldering!",
          },
          "/assembly": {
            value: "Connect it Together",
          }
        },
      },
      "/final": {
        value: "Final Assembly",
        due_date: "Feb 17",
        location: Location.AT_HOME,
        has_pages: true,
        pages: {
          "/intro": {
            value: "Background Info",
          },
          "/prep": {
            value: "Preparing your Enclosure",
          },
          "/glue": {
            value: "Glue and Adhesives",
          },
          "/electronics": {
            value: "Electronics Inside",
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
          return <li key={pageUrl}><Link href={chapterUrl + pageUrl}>{pages[pageUrl].value}</Link></li>
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
              <Link href={chapterPath}><div className={styles.chapterName}>{chapters[chapterUrl].value}</div></Link>
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