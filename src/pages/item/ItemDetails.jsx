import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchShowDetails } from '../../util/fetchData';
import './itemDetails.css';
import { currencyFormatter } from '../../../formatting';
import Select from '../../UI/selectElement/Select';

const ItemDetails = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchShowDetails(id, setItem);
  }, [id]);

  console.log(item);

  return (
    <div className="itemDetails">
      <img src={item.image} alt={item.name} />

      <div className="itemDescriptionWrapper">
        <div className="itemDescription">
          <p className="itemName">{item.name}</p>
          <p className="itemPrice">{currencyFormatter.format(item.price)}</p>
        </div>

        <Select
          options={
            <>
              <option value="Option 1">XS</option>
              <option value="Option 2">S</option>
              <option value="Option 3">M</option>
              <option value="Option 4">XL</option>
            </>
          }
        />

        <div className="buttons">
          <button>Add to cart</button>
          <button>Buy now</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
