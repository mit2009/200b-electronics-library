import { useState } from 'react';

import CopyLinkSvg from "./CopyLinkSvg";

import styles from './CopyLink.module.scss';

const CopyLinkButton = ({ componentName }: { componentName: string }) => {
  const [linkText, setLinkText] = useState<string>(`Copy Link to ${componentName}`);

  const writeClipboardHandler = async () => {
    try {
      await navigator.clipboard.writeText(typeof window !== "undefined" ? window.location.href : "")
      setLinkText("Copied!")
    } catch (err) {
      setLinkText("Unable to copy link")
    }
  }

  return (
    <p>
      <span
        className={styles.copyLinkToClipboard}
        onClick={() => writeClipboardHandler()}
      >
        <CopyLinkSvg />
        {linkText}
      </span>
    </p>
  )
}


export default CopyLinkButton;
