import React from 'react';
import styles from './Content.module.css';

const ContentWrapper = ({ isExtended, children }) => {
  const classes = isExtended ? `${styles.contentWrapperExtended}` : `${styles.contentWrapper}`;
  return <div className={classes}>{children}</div>;
};

export default ContentWrapper;
