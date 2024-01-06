import React from 'react';
import { currencyFormatter } from '../../../formatting';

const Item = ({ itemData: { name, id, price, image, quantity } }) => {
  const classIsAvailable = quantity > 10 ? 'inStock' : 'lowStock';
  return (
    <li className="catalogItem">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <p className="price">{currencyFormatter.format(price)}</p>
      <span className={classIsAvailable}>{quantity > 10 ? 'Available' : 'Low in stock'}</span>
    </li>
  );
};

export default Item;
