import { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';
import { GuideLink } from '../GuideLink';
import {
  IElectronicsComponent,
  categoryObject,
  CategoryTags,
} from '../../pages/electronics-library';
interface ModalProps {
  show: boolean;
  closeModal: () => void;
  component: IElectronicsComponent | null;
}

const buildLinkText = (link?: string): string => {
  if (link?.toLowerCase().search(/\S*arduino\S*/) !== -1) {
    return 'Arduino Website';
  } else if (link?.toLowerCase().search(/\S*adafruit\S*/) !== -1) {
    return 'Adafruit Website';
  } else if (link?.toLowerCase().search(/\S*grainger\S*/) !== -1) {
    return 'Grainger Website';
  } else {
    return link ? link : 'check with a TA';
  }
};

const Modal = ({ show, closeModal, component }: ModalProps) => {
  const [error, setError] = useState<string>('');

  const [isBrowser, setIsBrowser] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleCloseClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    closeModal();
    setError('');
  };

  const overlayClickHandler = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (overlayRef.current == e.target) {
      closeModal();
      setError('');
    }
  };

  useEffect(() => {
    setIsBrowser(true);
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  useEffect(() => {
    const body = document.body;
    if (show) {
      body.style.overflowY = 'hidden';
    } else {
      body.style.overflowY = 'auto';
    }
  }, [show]);

  return isBrowser
    ? ReactDOM.createPortal(
        show && (
          <div
            className={`${styles.overlay} ${show && styles.animateEnterFadeIn}`}
            ref={overlayRef}
            onClick={(e) => overlayClickHandler(e)}
          >
            <button
              onClick={handleCloseClick}
              aria-label="close pop-up"
              title="close pop-up button"
              className={`${styles.close} ${
                show && styles.animateEnterTranslateUp
              }`}
            >
              Close
              <img
                src="/images/exit.svg"
                decoding="async"
                width="23"
                height="23"
                alt=""
              />
            </button>
            <div
              className={`${styles.card} ${
                show && styles.animateEnterTranslateUp
              }`}
            >
              <h1 className={styles.componentTitle}>{component?.name}</h1>
              <p className={styles.componentSubtitle}>
                {component?.shortDescription}
              </p>
              <span
                className={styles.categoryTag}
                style={{
                  background: CategoryTags[component?.category as CategoryTags]
                    ? categoryObject[component?.category as CategoryTags].color
                    : '#000000',
                }}
              >
                {component?.category}
              </span>

              <div className={styles.sectionImage}>
                <img
                  className={styles.product}
                  src={component?.productPhoto[0]}
                />
                <img
                  className={styles.badge}
                  src="./images/Recommended.png"
                  width="99.84"
                  height="89.35"
                />
              </div>

              <p className={styles.sectionDescription}>
                {component?.description}
              </p>

              <h2 className={styles.sectionTitle}>Sourcing Information</h2>
              <p className={styles.sectionText}>
                Below is where we recommend buying these parts! Please note the
                lead time - that means the number of days you can expect to wait
                before receiving your part.
              </p>
              <div className={styles.linkLeadInfo}>
                <a
                  className={styles.purchaseLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={component?.purchaseLink}
                >
                  {buildLinkText(component?.purchaseLink)}
                </a>
                <p className={styles.leadTime}>
                  Lead Time: <strong>{component?.leadTime}</strong>
                </p>
              </div>
              <p>
                Do we have extras of this in the 2.00b Vault?{' '}
                <strong>{component?.inVault}</strong>
              </p>

              <h2 className={styles.sectionTitle}>2.00b Staff Help?</h2>
              <p className={styles.sectionText}>
                You can reach out to the following staff for help using this
                component!
              </p>
              <ul className={styles.staffList}>
                <li>
                  <GuideLink
                    href="https://toyproductdesign2023.slack.com/archives/C04PDTGS60J"
                    target="_blank"
                  >
                    #ask-the-tas
                  </GuideLink>
                </li>
                {component?.helpStaff.map((staff) => (
                  <li key={staff} className={styles.staffName}>
                    {staff}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ),
        document.getElementById('modal-root')!
      )
    : null;
};
export default Modal;
