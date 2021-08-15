import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getFilterName } from "../../redux/contacts/items/items-selector";
import * as itemsActions from "../../redux/contacts/items/items-actions";
import ContactListItem from './ContactListItem';
import s from './ContactsList.module.css';
 
const ContactsList = () => {
  const items = useSelector(getFilterName);
  const dispatch = useDispatch();

  return (
    <ul className={s.list}>
      {items.map(({ id, name, number }) => (
        <ContactListItem
          name={name}
          number={number}
          onDelete={() => dispatch(itemsActions.deleteContact(id))}
          key={id}
        />
      ))}
    </ul>
  );
};

export default ContactsList;
