/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

import { google } from 'googleapis';
import styles from '../styles/Page.module.scss';
import cx from 'classnames';

interface IElectronicsComponent {
  name?: string;
  category?: string;
  shortDescription?: string;
  tags?: string[];
  shownTo?: string;
  productPhoto?: string[];
  description?: string;
  purchaseLink?: string;
  leadTime?: string;
  dataSheet?: string;
  tutorialLinks?: string[];
  additionalLinks?: string[];
}

// given a background color, determine whether the font color should be black or white for readability
const pickTextColorBasedOnBgColorSimple = (bgColor: string) => {
  var color = bgColor.charAt(0) === '#' ? bgColor.substring(1, 7) : bgColor;
  var r = parseInt(color.substring(0, 2), 16); // hexToR
  var g = parseInt(color.substring(2, 4), 16); // hexToG
  var b = parseInt(color.substring(4, 6), 16); // hexToB
  return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000000' : '#ffffff';
};

const backgroundColorFromCategory = (category: string) => {
  switch (category?.toLowerCase()) {
    case 'microcontroller':
      return { backgroundColor: '#04c2a8' };
    case 'power':
      return { backgroundColor: '#3107eb' };
    case 'communication':
      return { backgroundColor: '#f5a623' };
    case 'sensor':
      return { backgroundColor: '#813222' };
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
    range: 'Website Data!A2:M999',
  };

  const data = await gsapi.spreadsheets.values.get(opt);
  const electronicComponents = data?.data?.values?.map((item) => {
    return removeEmpty({
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
    });
  });

  return {
    props: {
      electronicComponents,
    },
    revalidate: 10,
  };
}

const Home = ({
  electronicComponents,
}: {
  electronicComponents: IElectronicsComponent[];
}) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [activeProduct, setActiveProduct] =
    useState<IElectronicsComponent | null>(null);

  return (
    <div>
      <h1>2.00b Electronics Library!</h1>
      <h2>Recommended Electronic Components</h2>
      <div className={styles.electronicsContainer}>
        {electronicComponents.map((item: any) => (
          <div
            key={item.name}
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
      <div
        className={cx(styles.fullOverlay, {
          [styles.showOverlay]: showOverlay,
        })}
        onClick={() => {
          setShowOverlay(false);
        }}
      >
        <div
          className={styles.overlayContent}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <h2>{activeProduct?.name}</h2>
          <p>{activeProduct?.description}</p>
          <p>Placeholder</p>
        </div>
      </div>
    </div>
  );
};

const ComingSoon = () => {
  return (
    <>
      <h1>2.00b Electronics Library!</h1>
      <h2>Coming Soon</h2>
      <p>
        In the future, this is where you will find our recommendations for
        different electrical components to use. These will include
        microcontrollers, communication devices like NFC (Near Field
        Communication), sensors, etc. Don't worry if you are not familiar with
        these parts just yet! The staff will have expertise in these specific
        parts and will be happy to assist you if you want to delve deeper into
        electronics.
      </p>
    </>
  );
};

export default ComingSoon;
