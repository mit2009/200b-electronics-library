/* eslint-disable react/jsx-no-target-blank */
import cx from 'classnames';

import styles from './GuideVideo.module.scss';

const GuideVideo = ({ src }: { src: string }) => {
  return (
    <div className="video-container">
      <video controls={true}>
        <source
          src={`/images/toobers/${src}`}
          type={`video/${src.split('.')[1]}`}
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default GuideVideo;
