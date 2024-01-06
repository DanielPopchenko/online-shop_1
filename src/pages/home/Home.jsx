import React from 'react';
import styles from './Home.module.css';
import Gallery from '../../UI/gallery/Gallery';
import ContentWrapper from '../../UI/content/ContentWrapper';

const Home = () => {
  return (
    <ContentWrapper isExtended>
      <main className={styles.home}>
        <div className={styles.slogan}>
          <h1>“And let the whole world know that you are unique.”</h1>
        </div>

        <Gallery />
      </main>
    </ContentWrapper>
  );
};

export default Home;
