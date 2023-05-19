import React, { useEffect, useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';

import { hasOwn, kebabToCamel } from '../../utils/format';

import styles from './Sidebar.module.scss';

interface IPage {
  value: string;
}

interface IPages {
  [url: string]: IPage;
}

interface IChapter extends IPage {
  due_date?: string;
  location?: string;
  whatsDue?: { [key: string]: string };
  has_pages: boolean;
  pages?: IPages;
}

interface IChapters {
  [url: string]: IChapter;
}

enum Location {
  AT_HOME = 'Due',
  IN_LAB = 'In Lab 2',
}

interface IChapterVisibility {
  [url: string]: boolean;
}

interface ISection extends IPage {
  has_chapters: boolean;
  chapters?: IChapters;
  chapter_visibility?: IChapterVisibility;
  chapter_state?: IChapterVisibility;
  icon: JSX.Element;
}

const COMING_SOON_URL = '/toobers/coming-soon';

export const PAGES_LAYOUT: { [url: string]: ISection } = {
  '/': {
    value: 'Home',
    has_chapters: false,
    icon: (
      <div>
        <Image
          src="/images/home-icon.svg"
          alt="Home Icon"
          height={50}
          width={45}
        />
        <div>Home</div>
      </div>
    ),
  },
  '/toobers': {
    value: 'Toobers',
    has_chapters: true,
    icon: (
      <div>
        <Image
          src="/images/toobers-icon.svg"
          alt="Home Icon"
          height={55}
          width={55}
        />
        <div>toobers!</div>
      </div>
    ),
    chapter_visibility: {
      '/intro': true,
      '/breadboarding': true,
      '/soldering': true,
      '/power': true,
      '/prototype': true,
      '/cad': true,
      '/preassembly': true,
      '/assembly': true,
      '/suger-cube': false,
      '/pcb': false,
    },
    chapter_state: {
      '/intro': false,
      '/breadboarding': false,
      '/soldering': false,
      '/power': false,
      '/prototype': false,
      '/preassembly': true,
      '/assembly': true,
      '/cad': true,
      '/suger-cube': false,
      '/pcb': false,
    },
    chapters: {
      '/intro': {
        value: '1. Introduction',
        due_date: 'Before Lab 1',
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
      '/breadboarding': {
        value: '2. Breadboarding',
        location: Location.IN_LAB,
        has_pages: true,
        whatsDue: {
          '2.1':
            'Assemble your individual electronics kit as a team, ensuring you have everything to prototype your Toober',
          '2.2': 'Have 4 WS2812b LEDs and 4 buttons wired up to the Arduino',
          '2.3':
            'Have the WS2812b LEDs change when their respective buttons are pressed',
          '2.4':
            'Play a sample audio file off the DFPlayer, triggered by the Arduino',
        },
        pages: {
          '/lab2-intro': {
            value: 'Ingredients for Lab 2',
          },
          '/breadboard-intro': {
            value: 'The Breadboard',
          },
          '/test-microcontroller': {
            value: 'Test the Microcontroller',
          },
          '/first-circuit': {
            value: 'The First Circuit',
          },
          '/buttons-and-lights': {
            value: 'Buttons and Lights',
          },
          '/audio': {
            value: 'Audio',
          },
        },
      },
      '/soldering': {
        value: '3. Soldering',
        location: Location.IN_LAB,
        has_pages: true,
        whatsDue: {
          '3.1': 'Get experience soldering',
          '3.2': 'Solder the JST-XH connector for the charging circuit',
          '3.3': 'Solder the JST-XH connector for the power toggle switch',
        },
        pages: {
          '/overview': {
            value: 'Overview',
          },
          '/safety': {
            value: 'Soldering Safety',
          },
          '/soldering': {
            value: 'Connecting your Components',
          },
        },
      },
      '/power': {
        value: '4. Battery & Charging',
        location: Location.IN_LAB,
        has_pages: true,
        whatsDue: {
          '4.1': 'Get a high-level understanding of Li-ion batteries',
          '4.2': 'Assemble your power module',
        },
        pages: {
          '/overview': {
            value: 'Li-ion Battery',
          },
          '/assembly': {
            value: 'Assemble your Power Module',
          },
        },
      },
      '/prototype': {
        value: '5. The Prototype',
        location: Location.AT_HOME,
        due_date: 'Feb 27',
        has_pages: true,
        whatsDue: {
          '5.1': 'Wire the power module up to the rest of your circuit',
          '5.2': 'Have a working Toober prototype!',
        },
        pages: {
          '/altogether': {
            value: 'Altogether Now',
          },
          '/final': {
            value: 'Code, Test, & Play!',
          },
        },
      },
      '/cad': {
        value: '6. Housing CAD',
        due_date: 'Mar 4',
        location: Location.AT_HOME,
        has_pages: true,
        whatsDue: {
          '7.1': 'Understand the J55 Polyjet Printer',
          '7.2': 'Understand the unique features of the base model Toober',
          '7.3': 'Understand the sugar cube buttons and how to mount them',
          '7.4': 'CAD your own Toober housing from the base housing!',
          '7.5':
            'Submit your design to Slack following the submission guidelines',
        },
        pages: {
          '/intro': {
            value: 'Installing Fusion 360',
          },
          '/3dprinting': {
            value: '3D Printing',
          },
          '/base-model': {
            value: 'Getting the Base Model',
          },
          '/base-model-features': {
            value: 'Base Model Features',
          },
          '/sugar-cube': {
            value: 'The Sugar Cube',
          },
          '/mount-sugar-cube': {
            value: 'Moving the Sugar Cubes',
          },
          '/sweat-the-details': {
            value: 'Sweat the Details',
          },
          '/designing-your-own': {
            value: 'Designing your own!',
          },
        },
      },
      '/preassembly': {
        value: '7. Pre-Assembly',
        due_date: 'Before Lab 6',
        location: Location.AT_HOME,
        has_pages: true,
        // whatsDue: {
        // },
        pages: {
          '/things-to-bring': {
            value: 'Pre-lab Prep',
          },
          '/background': {
            value: 'Background Info',
          },
        },
      },
      '/assembly': {
        value: '8. Final Assembly',
        due_date: 'Mar 24',
        location: Location.AT_HOME,
        has_pages: true,
        // Be careful when adding todos here
        // Due to the fact we used 7 above in CAD, probably a remenant of having two separate CAD chapters
        // Be sure to use something unique from the the above todos
        // Ideally not 8 so we can back on track
        // We canot just modify the above since the students already have those values saved in localstorage
        whatsDue: {
          '8.1': 'Assemble your Toober Toy',
          '8.2': 'Test your Toober Toy to make sure everything still works!',
          '8.3':
            'Get a product photo of your Toober Toy with the course photographer!',
          '8.4': 'Optional: show it off :)',
        },
        pages: {
          '/prep': {
            value: 'Preparing your Housing',
          },
          '/sugar-cube': {
            value: 'Assemble the Sugar Cubes',
          },
          '/electronic-insides': {
            value: 'Electronic Insides',
          },
          '/sugar-cube-connect': {
            value: 'Connecting the Cubes',
          },
          '/testing': {
            value: 'Testing and Troubleshooting',
          },
          '/customize': {
            value: 'Customizing the Cubes',
          },
          '/acrylic': {
            value: 'Acrylic Light Channel',
          },
          '/glue': {
            value: 'Glue and Adhesives',
          },
          '/close-it-up': {
            value: 'Close it up',
          },
        },
      },
      '/sugar-cube': {
        value: '4. Sugar Cube',
        due_date: 'Feb 17',
        location: Location.IN_LAB,
        has_pages: true,
        pages: {
          '/intro': {
            value: 'Hello Sugar Cube!',
          },
          '/assembly': {
            value: 'Sugar Cube Assembly',
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
        <Image
          src="/images/electronics-icon.svg"
          alt="Electronics"
          height={55}
          width={55}
        />
        <div>
          electronics
          <br />
          library
        </div>
      </div>
    ),
  },
  '/casting-library': {
    value: 'Casting Library',
    has_chapters: false,
    icon: (
      <div>
        <Image
          src="/images/casting-icon.svg"
          alt="Casting"
          height={55}
          width={55}
        />
        <div>
          casting
          <br />
          library
        </div>
      </div>
    ),
  },
};

const SIDEBAR_LOCAL_STORAGE_PREFIX = 'sidebar-chapter-visible';

const PageList = ({
  chapterUrl,
  pages,
  dirs,
}: {
  chapterUrl: string;
  pages?: IPages;
  dirs: string[];
}) => {
  if (pages) {
    return (
      <ul className={styles.pageList}>
        {Object.keys(pages).map((pageUrl, index) => {
          const url = chapterUrl + pageUrl;
          const selected =
            dirs.join('') === url ||
            (index === 0 && dirs.join('') + pageUrl == url) ||
            ('/toobers/intro/overview' === url && dirs.join('') === '/toobers');
          return (
            <Link key={pageUrl} href={url}>
              <li className={cx({ [styles.selected]: selected })}>
                {pages[pageUrl].value}
              </li>
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
  const router = useRouter();
  const currentSection = dirs[0];
  const [enteringUnlockPhrase, setEnteringUnlockPhrase] = useState(false);
  const [pageStates, setPageStates] = useState<IChapterVisibility>({});
  const [unlockPhrase, setUnlockPhrase] = useState('');
  const [confettiColor, setConfettiColor] = useState<string[]>([]);
  const [chapterState, setChapterState] = useState<IChapterVisibility>({});

  useEffect(() => {
    setConfettiColor([]);
    const defaultState = (
      hasOwn(PAGES_LAYOUT, currentSection) &&
        hasOwn(PAGES_LAYOUT[currentSection], 'chapter_state')
        ? PAGES_LAYOUT[currentSection].chapter_state
        : {}
    ) as IChapterVisibility;
    setChapterState(defaultState);
  }, []);

  useEffect(() => {
    Object.keys(pageStates).map((page) => {
      if (pageStates[page]) {
        window.localStorage.setItem(
          `${SIDEBAR_LOCAL_STORAGE_PREFIX}${page}`,
          'true'
        );
      }
    });
  }, [pageStates]);

  useEffect(() => {
    const defaultState = (
      hasOwn(PAGES_LAYOUT, currentSection) &&
        hasOwn(PAGES_LAYOUT[currentSection], 'chapter_visibility')
        ? PAGES_LAYOUT[currentSection].chapter_visibility
        : {}
    ) as IChapterVisibility;
    Object.keys(defaultState)
      .filter((page) => {
        return (
          window.localStorage.getItem(
            `${SIDEBAR_LOCAL_STORAGE_PREFIX}${page}`
          ) === 'true'
        );
      })
      .map((page) => {
        defaultState[page] = true;
      });
    setPageStates(defaultState);
    setChapterState((cur) => {
      return { ...cur, [dirs[1]]: true };
    });
  }, [router.asPath]);
  const chapters = PAGES_LAYOUT[currentSection].chapters as {
    [url: string]: IChapter;
  };
  let unlockAudio: HTMLAudioElement | undefined = undefined;
  if (typeof Audio != 'undefined') {
    unlockAudio = new Audio('/sounds/unlockLetsDoThisTrimmed.m4a');
  }

  const handleSubmit = () => {
    const phrase = unlockPhrase.toLocaleLowerCase().replace(/[^a-z]/g, '');
    switch (phrase) {
      case 'bready':
        if (!pageStates['/breadboarding']) {
          if (typeof unlockAudio != 'undefined') {
            unlockAudio.play();
          }
          setPageStates((current) => {
            return {
              ...current,
              '/breadboarding': true,
              '/soldering': true,
              '/power': true,
              '/prototype': true,
            };
          });
          router.push(`${dirs[0]}/breadboarding`);
          setUnlockPhrase('');
          setEnteringUnlockPhrase(false);
          setConfettiColor(['#c73030']);
        }
        break;
      case 'cadlab':
        if (!pageStates['/cad']) {
          setPageStates((current) => {
            return {
              ...current,
              '/breadboarding': true,
              '/soldering': true,
              '/power': true,
              '/prototype': true,
              '/cad': true,
            };
          });
          router.push(`${dirs[0]}/cad`);
          setUnlockPhrase('');
          setEnteringUnlockPhrase(false);
          setConfettiColor(['#a600a6']);
        }
        break;
      case 'toobersassemble':
        if (!pageStates['/assembly']) {
          setPageStates((current) => {
            return {
              ...current,
              '/breadboarding': true,
              '/soldering': true,
              '/power': true,
              '/prototype': true,
              '/cad': true,
              '/assembly': true,
            };
          });
          router.push(`${dirs[0]}/assembly`);
          setUnlockPhrase('');
          setEnteringUnlockPhrase(false);
          setConfettiColor(['#ff9100']);
        }
        break;
      default:
        setUnlockPhrase('');
        break;
    }
  };
  return (
    <div className={styles.chapterContainer}>
      <Link href="/toobers/all-toobers">
        <div className={styles.allToobersButton}>
          <div>
            Check out the&nbsp;<strong>Toobers&nbsp;of&nbsp;2023</strong>!
          </div>
        </div>
      </Link>
      {Object.keys(chapters).map((chapterUrl) => {
        if (!pageStates[chapterUrl]) {
          return <React.Fragment key={chapterUrl}></React.Fragment>;
        }
        const chapterPath = `${currentSection}${chapterUrl}`;

        return (
          <div
            className={cx(styles.chapter, [
              styles[kebabToCamel(chapterUrl.slice(1))],
            ])}
            key={chapterUrl}
          >
            <div
              className={cx(styles.chapterName, {
                [styles.selected]: dirs[dirs.length - 1] === chapterUrl,
                [styles.rotated]: chapterState[chapterUrl],
              })}
              onClick={() => {
                setChapterState((current) => {
                  return { ...current, [chapterUrl]: !current[chapterUrl] };
                });
              }}
            >
              {chapters[chapterUrl].value}
            </div>
            <div className={styles.details}>
              <div className={styles.location}>
                {chapters[chapterUrl].location}
              </div>
              {chapters[chapterUrl].due_date && (
                <div className={styles.dueDate}>
                  {chapters[chapterUrl].due_date}
                </div>
              )}
            </div>
            {chapterState[chapterUrl] && (
              <PageList
                chapterUrl={chapterPath}
                pages={chapters[chapterUrl].pages}
                dirs={dirs}
              />
            )}
          </div>
        );
      })}
      <div
        className={cx(styles.chapter, styles.comingSoon)}
        onClick={() => {
          setEnteringUnlockPhrase(true);
          setConfettiColor([]);
        }}
      >
        {/* {!enteringUnlockPhrase && (
          <div className={styles.moreComingSoon}>more coming soon?</div>
        )} */}
        {enteringUnlockPhrase && (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              onChange={(e) => {
                const phrase = e.target.value;
                setUnlockPhrase(phrase);
              }}
              placeholder={'coming soon?'}
              onKeyDown={(e) => {
                if (e.code == 'Enter') {
                  handleSubmit();
                }
              }}
              autoFocus
            />
          </form>
        )}
      </div>
      {confettiColor.length > 0 && (
        <div className={styles.confettiContainer}>
          <ConfettiExplosion
            particleCount={100}
            width={2000}
            height={'300vh'}
            colors={confettiColor}
            duration={6000}
            force={0.8}
          />
        </div>
      )}
    </div>
  );
};

const getCurrentPage = (dirs: string[]): IPage => {
  return dirs.reduce((acc: any, cur: string) => {
    if (hasOwn(acc, cur)) {
      return acc[cur];
    }
    if (acc.has_chapters && hasOwn(acc.chapters, cur)) {
      return acc.chapters[cur];
    }
    if (acc.has_pages && hasOwn(acc.pages, cur)) {
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
  }, [router.asPath]);
  const [targetUrl, setTargetUrl] = useState(router.pathname);

  const path = router.pathname;
  const dirs = splitPath(path);
  const currentPage = getCurrentPage(dirs);
  const currentPageName = hasOwn(currentPage, 'value')
    ? currentPage.value : '';

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
      <div
        className={cx(styles.sidebarContainer, { [styles.hidden]: !isOpen })}
      >
        <div className={styles.iconContainer}>
          {Object.keys(PAGES_LAYOUT).map((url) => {
            const displayDiv = (
              <div
                key={url}
                className={cx(styles.icon, {
                  [styles.selected]: dirs[0] === url,
                })}
              >
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
        {hasOwn(PAGES_LAYOUT, dirs[0]) &&
          PAGES_LAYOUT[dirs[0]].has_chapters && (
            <ChapterContainer dirs={dirs} />
          )}
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
const COMING_SOON_RESULT = {
  url: COMING_SOON_URL,
  value: 'Coming Soon!',
  coming_soon: true,
};
const comingSoonDiv = (
  <div className={cx(styles.navButton, styles.comingSoonLink)}>
    Coming Soon!
  </div>
);

export const SectionNavigation = () => {
  const router = useRouter();
  const path = router.pathname;
  const dirs = splitPath(path);
  const currentPage = getCurrentPage(dirs);

  const defaultState = (
    hasOwn(PAGES_LAYOUT, dirs[0]) &&
      hasOwn(PAGES_LAYOUT[dirs[0]], 'chapter_visibility')
      ? PAGES_LAYOUT[dirs[0]].chapter_visibility
      : {}
  ) as IChapterVisibility;
  const [pageStates, setPageStates] =
    useState<IChapterVisibility>(defaultState);

  useEffect(() => {
    let defaultState = (
      hasOwn(PAGES_LAYOUT, dirs[0]) &&
        hasOwn(PAGES_LAYOUT[dirs[0]], 'chapter_visibility')
        ? PAGES_LAYOUT[dirs[0]].chapter_visibility
        : {}
    ) as IChapterVisibility;
    Object.keys(defaultState)
      .filter((page) => {
        return (
          window.localStorage.getItem(
            `${SIDEBAR_LOCAL_STORAGE_PREFIX}${page}`
          ) === 'true'
        );
      })
      .map((page) => {
        defaultState = { ...defaultState, [page]: true };
      });
    setPageStates(defaultState);
  }, [router.asPath]);

  if (!hasOwn(currentPage, 'value') || !PAGES_LAYOUT[dirs[0]].has_chapters) {
    return <></>;
  }

  const currentSection = getCurrentPage(dirs.slice(0, 1)) as ISection;
  const chapterIndex =
    dirs.length < 2
      ? 0
      : Object.keys(currentSection.chapters as IChapters).indexOf(dirs[1]);
  const currentChapter = getNthProperty(
    currentSection.chapters as IChapters,
    chapterIndex
  );
  const currentIndex =
    dirs.length < 3 ? 0 : Object.keys(currentChapter.pages).indexOf(dirs[2]);

  let prevPage = DOES_NOT_EXIST_RESULT as any;
  if (currentIndex > 0) {
    const relativeUrl = getNthPropertyName(
      currentChapter.pages,
      currentIndex - 1
    );
    const url = dirs.slice(0, 2).join('') + relativeUrl;
    const val = getNthProperty(currentChapter.pages, currentIndex - 1);
    if (val.coming_soon || val.is_hidden) {
      prevPage = COMING_SOON_RESULT;
    } else {
      prevPage = { url, value: val.value };
    }
  } else if (chapterIndex > 0) {
    const relativeUrl = getNthPropertyName(
      currentSection.chapters as IChapters,
      chapterIndex - 1
    );
    const url = dirs.slice(0, 1) + relativeUrl;
    const val = getNthProperty(
      currentSection.chapters as IChapters,
      chapterIndex - 1
    );
    if (val.coming_soon || val.is_hidden) {
      prevPage = COMING_SOON_RESULT;
    } else {
      prevPage = { url, value: val.value };
    }
  }

  let nextPage = DOES_NOT_EXIST_RESULT as any;
  if (currentIndex + 1 < getPropertyCount(currentChapter.pages)) {
    const relativeUrl = getNthPropertyName(
      currentChapter.pages,
      currentIndex + 1
    );
    const url =
      dirs.length < 2
        ? dirs.slice(0, 1) + '/intro' + relativeUrl
        : dirs.slice(0, 2).join('') + relativeUrl;
    const val = getNthProperty(currentChapter.pages, currentIndex + 1);
    if (val.coming_soon || val.is_hidden) {
      nextPage = COMING_SOON_RESULT;
    } else {
      nextPage = { url, value: val.value };
    }
  } else if (
    chapterIndex + 1 <
    getPropertyCount(currentSection.chapters as IChapters)
  ) {
    const relativeUrl = getNthPropertyName(
      currentSection.chapters as IChapters,
      chapterIndex + 1
    );
    const url = dirs.slice(0, 1) + relativeUrl;
    const val = getNthProperty(
      currentSection.chapters as IChapters,
      chapterIndex + 1
    );
    if (!pageStates[relativeUrl]) {
      nextPage = COMING_SOON_RESULT;
    } else {
      nextPage = { url, value: val.value };
    }
  }

  const prevDiv = (
    <Link href={prevPage.url}>
      <div className={cx(styles.navButton, styles.prevLink)}>
        Back to {prevPage.value}
      </div>
    </Link>
  );

  const nextDiv = (
    <Link href={nextPage.url}>
      <div className={cx(styles.navButton, styles.nextLink)}>
        Proceed to {nextPage.value}
      </div>
    </Link>
  );

  return (
    <div className={styles.sectionNav}>
      {prevPage.nonexistant ? (
        <div></div>
      ) : prevPage.coming_soon ? (
        comingSoonDiv
      ) : (
        prevDiv
      )}
      {currentPage.value === 'Close it up' ? (
        // Hi, please don't look too closely
        <></>
      ) : nextPage.nonexistant ? (
        <></>
      ) : nextPage.coming_soon ? (
        comingSoonDiv
      ) : (
        nextDiv
      )}
    </div>
  );
};
