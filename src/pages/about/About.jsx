import React from 'react';
import styles from './About.module.css';
import ContentWrapper from '../../UI/content/ContentWrapper';

const About = () => {
  return (
    <ContentWrapper>
      <div className={styles.about}>
        <h2>About</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime aperiam nihil, eum hic veniam tenetur!
          Inventore consectetur quae voluptatem facilis porro ea, eum ducimus doloribus, autem in laudantium repellendus
          provident? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati cupiditate beatae, dicta animi
          ducimus, possimus ipsam repellat iusto mollitia laboriosam eveniet harum ea. Voluptates fugiat ullam amet
          dolores, necessitatibus dolore! Inventore unde dignissimos, error at eius exercitationem eaque praesentium?
          Impedit, perspiciatis! Veritatis nisi odio illum explicabo eveniet, asperiores quis dolor impedit assumenda,
          necessitatibus accusantium quo aliquam accusamus atque magnam doloribus? Facilis nisi, aut libero quisquam
          similique architecto, quibusdam placeat, odit velit vero maxime dolores quam ipsa itaque voluptates quia magni
          ipsum rem delectus? Odit quae vel molestiae, illo dolore quaerat.P
        </p>
      </div>
    </ContentWrapper>
  );
};

export default About;
