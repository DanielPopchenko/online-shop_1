import React from 'react';
import Item from './Item';
import { Link } from 'react-router-dom';

const Items = ({ data }) => {
  return (
    <ul className="catalogList">
      {data ? (
        data.map((item) => (
          <Link to={`/catalog/${item.id}`} key={item.id}>
            <Item itemData={item} />
          </Link>
        ))
      ) : (
        <p>Elements are not found!</p>
      )}
    </ul>
  );
};

export default Items;
