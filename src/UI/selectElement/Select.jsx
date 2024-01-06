import React from 'react';
import './select.scss';

const Select = ({ options }) => {
  return (
    <>
      <label htmlFor="standard-select">Select size</label>
      <div className="select">
        <select id="standard-select">
          {options}
          {/* <option value="Option length">Option that has too long of a value to fit</option> */}
        </select>
        <span className="focus"></span>
      </div>
    </>
  );
};

export default Select;
