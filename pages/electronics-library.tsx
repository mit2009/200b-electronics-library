/* eslint-disable @next/next/no-img-element */
import { Searcher } from 'fast-fuzzy';

import { GuideLink } from '../components/GuideLink';
import { useState, useEffect, useRef } from 'react';
import Modal from '../components/Modal';
import { google } from 'googleapis';
import styles from '../styles/Page.module.scss';
import cx from 'classnames';

export interface IElectronicsComponent {
  name: string;
  category: string;
  shortDescription: string;
  tags: string[];
  shownTo: string;
  productPhoto: string[];
  description: string;
  purchaseLink: string;
  leadTime: string;
  dataSheet: string;
  tutorialLinks: string[];
  additionalLinks: string[];
  inVault: string;
  helpStaff: string[];
}

export enum CategoryTags {
  ShowAll = 'ShowAll',
  Microcontroller = 'Microcontroller',
  Power = 'Power',
  Communication = 'Communication',
  Sensor = 'Sensor',
  Display = 'Display',
  Input = 'Input',
  Output = 'Output',
  Actuation = 'Actuation',
}

export const categoryObject: {
  [key in CategoryTags]: { name: string; result: string; color: string };
} = {
  ShowAll: { name: 'Show All', result: 'All Components', color: '#2D2D2D' },
  Microcontroller: {
    name: 'Microcontroller',
    result: 'Microcontrollers',
    color: '#04c2a8',
  },
  Power: { name: 'Power', result: 'Power Components', color: '#f1072b' },
  Communication: {
    name: 'Communication',
    result: 'Communication Components',
    color: '#f5a623',
  },
  Sensor: { name: 'Sensor', result: 'Sensors', color: '#813222' },
  Display: { name: 'Display', result: 'Displays', color: '#12a1f3' },
  Input: { name: 'Input', result: 'Inputs', color: '#12a123' },
  Output: { name: 'Output', result: 'Outputs', color: '#a221a3' },
  Actuation: { name: 'Actuation', result: 'Actuators', color: '#826183' },
};

// given a background color, determine whether the font color should be black or white for readability
const pickTextColorBasedOnBgColorSimple = (bgColor: string) => {
  var color = bgColor.charAt(0) === '#' ? bgColor.substring(1, 7) : bgColor;
  var r = parseInt(color.substring(0, 2), 16); // hexToR
  var g = parseInt(color.substring(2, 4), 16); // hexToG
  var b = parseInt(color.substring(4, 6), 16); // hexToB
  return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000000' : '#ffffff';
};

const backgroundColorFromCategory = (category: string) => {
  if (categoryObject.hasOwnProperty(category)) {
    return { backgroundColor: categoryObject[category as CategoryTags]?.color };
  }
  return { backgroundColor: '#000000' };
};

const styleFromCategory = (category: string) => {
  const style: any = backgroundColorFromCategory(category);
  style.color = pickTextColorBasedOnBgColorSimple(style.backgroundColor);
  return style;
};

const removeEmpty = (obj: any) => {
  Object.keys(obj).forEach(
    (k) =>
      (obj[k] && typeof obj[k] === 'object' && removeEmpty(obj[k])) ||
      (!obj[k] && delete obj[k])
  );
  return obj;
};

const buildResultsHeader = (
  searchField: string,
  searchCategoryTags: CategoryTags[]
): JSX.Element => {
  return (
    <>
      {`${searchField === '' ? 'Showing' : 'Searching all'}`}{' '}
      <span
        style={{
          color: categoryObject[searchCategoryTags[0]].color,
          fontWeight: 700,
        }}
      >
        {categoryObject[searchCategoryTags[0]].result}
      </span>
      {searchField && <span> with "{searchField}"</span>}
    </>
  );
};

const Home = ({
  electronicComponents,
}: {
  electronicComponents: IElectronicsComponent[];
}) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [activeProduct, setActiveProduct] =
    useState<IElectronicsComponent | null>(null);

  const [searchField, setSearchField] = useState<string>('');

  const [timerId, setTimerId] = useState<ReturnType<typeof setTimeout>>();

  const [searchCategoryTags, setSearchCategoryTags] = useState<CategoryTags[]>([
    CategoryTags.ShowAll,
  ]);
  const onSearchChange = (e: React.FormEvent<HTMLInputElement>) => {
    const searchValue = e.currentTarget.value;
    clearTimeout(timerId);
    setTimerId(
      setTimeout(() => {
        setSearchField(searchValue);
      }, 500)
    );
  };
  const onTagSelect = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchCategoryTags([e.currentTarget.value as CategoryTags]);
  };

  const [filteredComponents, setFilteredComponents] =
    useState<IElectronicsComponent[]>(electronicComponents);

  const filterComponents = () => {
    let componentList: IElectronicsComponent[] = electronicComponents;
    if (searchCategoryTags[0] !== CategoryTags.ShowAll) {
      componentList = componentList.filter((component) => {
        return component.category
          ? component.category.toLowerCase() ===
              searchCategoryTags[0].toLowerCase()
          : null;
      });
    }

    if (searchField) {
      const searcher = new Searcher(componentList, {
        keySelector: (obj: IElectronicsComponent) => [
          obj.category,
          obj.name,
          obj.shortDescription,
          obj.description,
          obj.tags?.join(' '),
          obj.shownTo,
          obj.leadTime,
        ],
      });
      setFilteredComponents(searcher.search(searchField));
    } else {
      setFilteredComponents(componentList);
    }
  };

  useEffect(() => {
    filterComponents();
  }, [searchCategoryTags, searchField]);

  const metaTracker = useRef(false);

  useEffect(() => {
    const findHijacker = (e: KeyboardEvent) => {
      if (e.key === 'Meta') {
        metaTracker.current = true;
      }

      if (
        e.keyCode === 114 ||
        ((e.ctrlKey || metaTracker?.current) && e.keyCode === 70)
      ) {
        if (document.getElementById('search') !== document.activeElement) {
          e.preventDefault();
          document.getElementById('search')?.focus();
        } else {
          return true;
        }
      }
    };
    const metaUp = (e: KeyboardEvent) => {
      if (e.key === 'Meta') {
        metaTracker.current = false;
      }
    };
    if (window) {
      window.addEventListener('keydown', findHijacker);
      window.addEventListener('keyup', metaUp);
    }
    return () => {
      if (window) {
        window.removeEventListener('keydown', findHijacker);
        window.removeEventListener('keyup', metaUp);
      }
    };
  }, []);

  return (
    <div>
      <div className={styles.electronicsHeader}>
        <h1>2.00b Electronics Library!</h1>
        <h2>Recommended Electronic Components</h2>
        <div className={styles.textContent}>
          <p>
            Hello! This page is designed to help you select parts as you develop
            your toy product prototype! While you're always free to use any
            components you choose, the parts below have been selected by the
            2.00b staff to be versatile and easy-to-use options.
          </p>
          <p>
            The staff will be able to better support your team if you're using
            these components. Additionally, we'll likely have a lot of these{' '}
            <strong>parts in stock</strong>!
          </p>
        </div>
      </div>

      <div className={styles.searchBar}>
        <label htmlFor="search">Search:</label>
        <input
          aria-label="Search Electronic Components"
          id="search"
          type="search"
          name="search"
          onChange={onSearchChange}
        />
      </div>

      <fieldset className={styles.searchCategoryTags}>
        <legend>Show:</legend>
        {(Object.keys(CategoryTags) as Array<keyof typeof CategoryTags>).map(
          (key) => (
            <label
              className={styles.categoryTag}
              key={CategoryTags[key]}
              htmlFor={CategoryTags[key]}
            >
              <input
                type="radio"
                name={`searchTag`}
                key={CategoryTags[key]}
                id={key}
                value={CategoryTags[key]}
                checked={searchCategoryTags.includes(CategoryTags[key])}
                onChange={onTagSelect}
              />
              <span
                style={{
                  background:
                    searchCategoryTags[0] === CategoryTags.ShowAll ||
                    searchCategoryTags[0] === CategoryTags[key]
                      ? categoryObject[CategoryTags[key]].color
                      : `var(--grey3)`,
                }}
              >
                {categoryObject[CategoryTags[key]].name}
              </span>
            </label>
          )
        )}
      </fieldset>

      <div className={styles.resultsHeader}>
        <h2>{buildResultsHeader(searchField, searchCategoryTags)}</h2>
        <h3>
          {filteredComponents.length} result
          {filteredComponents.length === 1 ? '' : 's'}
        </h3>
      </div>

      <div className={styles.electronicsContainer}>
        {filteredComponents.map((item: any) => (
          <div
            key={item.name + item.shortDescription.substring(0, 30)}
            className={styles.electronicsItem}
            onClick={() => {
              setShowOverlay(true);
              setActiveProduct(item);
            }}
          >
            <div className={styles.productName}>{item.name}</div>
            <img src={item.productPhoto[0]} alt={item.name} />
            <div
              className={styles.category}
              style={styleFromCategory(item.category)}
            >
              {item.category}
            </div>
            <div className={styles.description}>{item.shortDescription}</div>
          </div>
        ))}
      </div>

      {filteredComponents.length === 0 && (
        <p className={styles.askTas}>
          Hmm... we don’t seem to have anything here. Feel free to contact{' '}
          <GuideLink
            href="https://toyproductdesign2023.slack.com/archives/C04PDTGS60J"
            target="_blank"
          >
            #ask-the-tas
          </GuideLink>{' '}
          for questions if you’re looking for a recommendation!
        </p>
      )}
      <Modal
        closeModal={() => setShowOverlay(false)}
        show={showOverlay}
        component={activeProduct}
      />
      <div id="modal-root"></div>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const spreadsheetId = '1jhnVASDZXjMTzNbxUCnfER9W29DtUOn8222eXeTUYKQ';
  const client = new google.auth.JWT({
    email: process.env.CLIENT_EMAIL,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    key: process.env.PRIVATE_KEY,
  });

  await client.authorize();

  const gsapi = google.sheets({ version: 'v4', auth: client });
  const opt = {
    spreadsheetId,
    range: 'Website Data!A2:N999',
  };

  const data = await gsapi.spreadsheets.values.get(opt);
  const electronicComponents = data?.data?.values?.map((item) => {
    const electroncisDataObj = removeEmpty({
      name: item[0],
      category: item[1],
      shortDescription: item[2],
      tags: item[3]?.split(','),
      shownTo: item[4],
      productPhoto: item[5]?.split(','),
      description: item[6],
      purchaseLink: item[7],
      leadTime: item[8],
      dataSheet: item[9],
      tutorialLinks: item[10]?.split(','),
      additionalLinks: item[11]?.split(','),
      inVault: item[12],
      helpStaff: item[13]?.split(','),
    });

    const electronicComponentPlaceholder: IElectronicsComponent = {
      name: '',
      category: '',
      shortDescription: '',
      tags: [''],
      shownTo: '',
      productPhoto: [''],
      description: '',
      purchaseLink: '',
      leadTime: '',
      dataSheet: '',
      tutorialLinks: [''],
      additionalLinks: [''],
      inVault: '',
      helpStaff: [''],
    };

    return { ...electronicComponentPlaceholder, ...electroncisDataObj };
  });

  return {
    props: {
      electronicComponents,
    },
    revalidate: 10,
  };
}
