import { useState, useEffect } from 'react';
import ContentWrapper from '../../UI/content/ContentWrapper';
import Items from './Items';
import './catalog.css';

import { fetchData } from '../../util/fetchData';

const Catalog = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    fetchData(setElements);
    console.log(elements);
  }, []);

  console.log(elements);
  return (
    <ContentWrapper>
      <div className="catalog">
        <h2>Catalog</h2>
        <Items data={elements} />
      </div>
    </ContentWrapper>
  );
};

export default Catalog;
