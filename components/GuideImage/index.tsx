/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-target-blank */
import styles from './GuideImage.module.scss';
import cx from 'classnames';

type ImageSize = 'NARROW' | 'SMALL' | 'MEDIUM' | 'LARGE' | 'FULL';

const GuideImage = ({
  src,
  size,
  alt,
  caption,
  border,
  href,
  removeMargin,
}: {
  src: string | string[];
  size?: ImageSize;
  alt?: string;
  caption?: string;
  border?: boolean;
  href?: string;
  removeMargin?: boolean;
}) => {
  if (typeof src === 'string') {
    return (
      <div
        className={cx(styles.imageContainer, {
          [styles.noMargin]: removeMargin,
        })}
      >
        <a href={href ? href : src} target="_blank">
          <img
            className={cx({
              [styles.narrow]: size === 'NARROW',
              [styles.small]: size === 'SMALL',
              [styles.medium]: size === 'MEDIUM' || size == undefined,
              [styles.large]: size === 'LARGE',
              [styles.full]: size === 'FULL',
              [styles.hideBorder]: border === false,
            })}
            src={src}
            alt={alt ? alt : caption ? caption : `Image`}
          />
          {caption && <span className={styles.caption}>{caption}</span>}
        </a>
      </div>
    );
  }

  return (
    <div className={styles.allImages}>
      {src.map((image, key) => (
        <div className={styles.imageContainer} key={key}>
          <a href={image} target="_blank">
            <img
              className={cx({
                [styles.hideBorder]: border === false,
              })}
              src={image}
              alt={`${alt} ${key + 1}`}
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default GuideImage;
