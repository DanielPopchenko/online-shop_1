import React from 'react';
import styles from './Backdrop.module.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Backdrop = ({ children }) => {
  return (
    <div className={styles.backdrop}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Backdrop;
