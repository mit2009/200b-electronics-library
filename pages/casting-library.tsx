import { google } from 'googleapis';
import GuideImage from '../components/GuideImage';
import { GuideLink } from '../components/GuideLink';

import styles from '../styles/CastingLibrary.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export async function getStaticProps() {
  const spreadsheetId = '1oy8CSaAVCUW85ui_FAuW0YxfaDJNwehxXqTTWuVQkZo';
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

  return {
    props: {
      data: data.data.values,
    },
    revalidate: 10,
  };
}

// convert the text s to seconds, m to minutes, h to hours if it is the last character, and the second to last character is a number. 
const convertToDurationString = (s: string) => {
  const lastChar = s[s.length - 1];
  const secondToLastChar = s[s.length - 2];
  const everythingButLastChar = s.slice(0, s.length - 1);
  if (lastChar === 's' && !isNaN(Number(secondToLastChar))) {
    return `${everythingButLastChar} second${secondToLastChar === '1' ? '' : 's'}`;
  } else if (lastChar === 'm' && !isNaN(Number(secondToLastChar))) {
    return `${everythingButLastChar} minute${secondToLastChar === '1' ? '' : 's'}`;
  } else if (lastChar === 'h' && !isNaN(Number(secondToLastChar))) {
    return `${everythingButLastChar} hour${secondToLastChar === '1' ? '' : 's'}`;
  } else {
    return s;
  }
}

const Page = ({ data }: any) => {
  return (
    <div>
      <h1>2.00b Resins & Plastics Library</h1>
      <h2>Recommended Materials for Casting!</h2>
      <p>
        Looking to get your feet wet in casting? Below are some materials the
        2.00b staff recommend if you'd like to try out casting in your toy
        design process!
      </p>
      <p>
        The primary brand of materials we use for casting is{' '}
        <GuideLink href="https://www.smooth-on.com/">Smooth-on</GuideLink>, a
        company that has been around for over a century and is known to provide
        safe and easy-to-use materials, with lots of guides and support online.
      </p>
      <GuideImage
        src="/images/casting/smooth-on.png"
        size="SMALL"
        alt="Casting Library"
        border={false}
      />
      <p>
        You can buy the majority of their catalog at{' '}
        <GuideLink href="https://www.reynoldsam.com/">
          Reynolds Advanced Materials
        </GuideLink>
        , 25 minutes by bus or 10 minutes by car from MIT. (It's an insanely
        cool shop especially if you're into prop-making, special effects, and
        more!)
      </p>
      <h2>I'd like to make...</h2>
      <p><strong>Click on one of the examples below</strong>, and we'll recommend something with similar material hardness/qualities! Of course, the smooth-on products have <GuideLink href="https://www.smooth-on.com/assets/pdf/catalogs/CATALOG-SO.pdf" target="_BLANK">hundreds of products</GuideLink> for you to choose from- hopefully this helps get you started!</p>
      <div className={styles.castingSelections}>
        {data.map((row: any, id: number) => {
          return (
            <Link key={id} href={`/casting-library#${row[0]
              .toLowerCase()
              .split(" ")
              .join("-")}`}><div className={styles.castingSelection}>
                <h4>{row[0]}</h4>
                <div className={styles.imageContainer}>
                  <Image src={`/images/casting/${row[2]}`} layout="fill" objectFit='contain' />
                </div>
                <p>
                  <span className={styles.dem}>Recommend:</span><br />
                  <span className={styles.recommendationText}>{row[1]}</span>
                </p>
              </div>
            </Link>
          )
        })}
      </div>
      <div className={styles.longResponses}>
        {data.map((row: any, id: number) => {
          return (
            <div key={id} className={styles.longResponse}>
              <div className={styles.longResponseText} id={row[0].toLowerCase().split(" ").join("-")}>
                <h2>{row[0]}</h2>
                <h4><span className={styles.recommendationText}>{row[1]}</span>{" "}</h4>
                <p>Great for <strong>{row[4].toLowerCase()}</strong>! This material is comparable to the texture/hardness of <strong>{row[3].toLowerCase()}</strong>. Learn more about this on the <GuideLink href={row[12]} target={"_BLANK"}>Smooth-on website</GuideLink>.</p>
                <h4>Properties to Note:</h4>
                <div className={styles.propertyGrid}>
                  {["Durometer/Density", "Pot Life", "Cure Time", "Color", "Mix"].map((property: string, id: number) => {
                    return (
                      <div key={id} className={styles.property}>
                        <div className={styles.propertyName}>{property}</div>
                        <div className={styles.value}>{convertToDurationString(row[id + 5])}</div>
                      </div>
                    )
                  })}
                </div>

                <h4>Notes about this Material</h4>
                <p>{row[13]}</p>
                <p>Reach out to <GuideLink
                  href="https://toyproductdesign2023.slack.com/archives/C04PDTGS60J"
                  target="_blank"
                >
                  #ask-the-tas
                </GuideLink> if you have questions!</p>
              </div>
              <div className={styles.longResponseImage}>
                <Image src={`/images/casting/${row[2]}`} layout="fill" objectFit='contain' />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Page;
