import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import * as filterActions from "../../redux/contacts/filter/filter-actions";
import { getFilter } from "../../redux/contacts/filter/filter-selector";
import s from './Filter.module.css';

const Filter = () => {
 const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  
  return (
  <label className={s.label}>
    <span className={s.title}>Find contacts by name:</span>
    <input
      className={s.input}
      type="text"
      value={filter}
      onChange={({ target: { value } }) => dispatch(filterActions.filterContacts(value))}
    />
  </label>
);
}

export default Filter;
