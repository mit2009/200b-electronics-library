import React from 'react';
import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import styles from './GoogleParser.module.scss';

const LineBreakManager = ({ element }: any) => {
  // given a text string, replace all the /n with <br /> and return a jsx element
  if (element === undefined) {
    return <></>;
  }

  const textArray = element.split('\v');
  return textArray.map((text: string, key: number) => {
    if (key !== textArray.length - 1)
      return (
        <React.Fragment key={key}>
          {text}
          <br />
        </React.Fragment>
      );
    return <>{text}</>;
  });
};

const TextRunParser = ({ data }: any) => {
  if (!data) return null;
  const { red, green, blue } = data?.textStyle?.foregroundColor?.color?.rgbColor || {};
  const textStyle = data?.textStyle?.link?.url
    ? {}
    : {
        color: `rgba(${[
          Math.floor((red ? red : 0) * 255),
          Math.floor((green ? green : 0) * 255),
          Math.floor((blue ? blue : 0) * 255),
          1,
        ].join(',')})`,
      };
  return (
    <span
      className={cx({
        [styles.bold]: data.textStyle.bold,
        [styles.underline]: data.textStyle.underline,
        [styles.italic]: data.textStyle.italic,
      })}
      style={textStyle}
    >
      <LineBreakManager element={data.content} />
    </span>
  );
};

const ParagraphParser = ({ data, inlineObjects }: { data: any; inlineObjects?: any }) => {
  return data
    .map((item: any) => item.textRun || item?.inlineObjectElement)
    .map((item: any, key: any) => {
      if (item?.inlineObjectId) {
        const embeddedObject = inlineObjects[item.inlineObjectId].inlineObjectProperties.embeddedObject;
        return (
          <span className={styles.embeddedImage} key={key}>
            <Link href={embeddedObject.imageProperties.contentUri}>
              <Image
                className={styles.embeddedImageSrc}
                alt={'Refresh to see image'}
                src={embeddedObject.imageProperties.contentUri}
                height={embeddedObject.size.height.magnitude}
                width={embeddedObject.size.width.magnitude}
              />
            </Link>
          </span>
        );
      }

      if (item?.textStyle.link) {
        return (
          <a href={item.textStyle.link?.url} key={key}>
            <TextRunParser data={item} />
          </a>
        );
      }

      return (
        <span key={key}>
          <TextRunParser data={item} />
        </span>
      );
    });
};

let bulletSection = 'NO_BULLET';
let bulletSections: any = [];
let thisListStyle = 'ul';

const GoogleParser = ({ rawData }: any) => {
  const data = rawData?.body?.content;
  const inlineObjects = rawData?.inlineObjects;

  const cleanedData = data
    ?.filter((section: any) => section.paragraph || section.table)
    .map((section: any) => (section.paragraph ? section.paragraph : section.table));
  const elementList = [];

  for (let i = 0; i < cleanedData?.length; i++) {
    const paragraph = cleanedData[i];

    if (paragraph.tableRows) {
      const tableRows = paragraph.tableRows.map((tableRow: any, row: number) => {
        return (
          <tr key={'row' + row}>
            {tableRow.tableCells.map((tableCell: any, cell: number) => {
              return (
                <td key={'cell' + cell}>
                  {tableCell.content
                    .map((c: any) => c.paragraph.elements)
                    .map((elem: any, k: number) => (
                      <React.Fragment key={'p' + k}>
                        {React.createElement(`span`, { className: styles.paragraph }, <ParagraphParser data={elem} />)}
                      </React.Fragment>
                    ))}
                </td>
              );
            })}
          </tr>
        );
      });
      elementList.push(
        <table className={styles.parsedTable}>
          <tbody>{tableRows}</tbody>
        </table>
      );
    } else {
      const paragraphStyle = paragraph?.paragraphStyle?.namedStyleType;

      if (paragraph?.bullet?.listId) {
        if (rawData.lists[paragraph?.bullet?.listId]?.listProperties?.nestingLevels?.[0].glyphType === 'DECIMAL') {
          thisListStyle = `ol`;
        }
      }

      if (paragraphStyle?.includes('HEADING')) {
        if (bulletSection !== 'NO_BULLET') {
          elementList.push(React.createElement(thisListStyle, null, bulletSections));
          bulletSections = [];
          thisListStyle = `ul`;
        }
        const headingLevel = paragraphStyle.split('_')[1];
        elementList.push(
          React.createElement(
            `h${headingLevel}`,
            null,
            <ParagraphParser inlineObjects={inlineObjects} data={paragraph.elements} />
          )
        );
      } else if (paragraph?.bullet) {
        if (bulletSection === 'NO_BULLET') {
          bulletSections = [];
          thisListStyle = `ul`;
          bulletSection = 'MID_BULLET';
        }
        bulletSections.push(
          React.createElement(
            `li`,
            { key: `bullet-${i}` },
            <ParagraphParser inlineObjects={inlineObjects} data={paragraph.elements} />
          )
        );
      } else if (bulletSection === 'MID_BULLET') {
        bulletSection = 'NO_BULLET';
        elementList.push(React.createElement(thisListStyle, null, bulletSections));
        elementList.push(
          React.createElement(
            `span`,
            { className: styles.paragraph },
            <ParagraphParser inlineObjects={inlineObjects} data={paragraph.elements} />
          )
        );
      } else {
        elementList.push(
          React.createElement(
            `span`,
            { className: styles.paragraph },
            <ParagraphParser inlineObjects={inlineObjects} data={paragraph.elements} />
          )
        );
      }

      // last element in list
      if (i === cleanedData?.length - 1 && bulletSection !== 'NO_BULLET') {
        elementList.push(React.createElement(thisListStyle, null, bulletSections));
      }
    }
  }

  return <div className={styles.googleParser}>{elementList}</div>;
};

export default GoogleParser;
