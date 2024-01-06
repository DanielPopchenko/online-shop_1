import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contacts}>
        <p>
          Email: <span>txs.store@gmail.com</span>
        </p>
        <p>
          Phone: <span>+380 63 463 6082</span>
        </p>
        <p>
          Adress: <span>Kyivska street, 98</span>
        </p>
      </div>
      <span>© 2024 TXS | The content of this website is protected by copyright !</span>
    </footer>
  );
};

export default Footer;
