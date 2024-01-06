import React from 'react';
import styles from './Header.module.css';
import currency from '../../images/logos/currency.png';
import cart from '../../images/logos/cart.png';
import language from '../../images/logos/language.png';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.topHeader}>
        <div className={styles.switchOptions}>
          <button>
            <img src={currency} alt="currency logo" width={27} height={27} />
          </button>
          <button>
            <img src={language} alt="language logo" width={27} height={27} />
          </button>
        </div>

        <p>HOME</p>
        <p>CATALOG</p>

        {/* logo text */}
        <h2>TXS</h2>

        <p>VOTING</p>
        <p>CONTACT</p>
        <img src={cart} alt="language logo" width={30} height={30} />
      </div>
    </div>
  );
};

export default Header;
