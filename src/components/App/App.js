// import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Form from '../Form';
import Section from '../Section';
import ContactsList from '../ContactsList';
import Filter from '../Filter';
import { useSelector, useDispatch } from "react-redux";
import * as itemsActions from "../../redux/contacts/items/items-actions";
import * as filterActions from "../../redux/contacts/filter/filter-actions";
import s from './App.module.css';

const App = () => {
  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  // const [contacts, setContacts] = useState(
  //   () =>
  //     JSON.parse(window.localStorage.getItem('contacts')) ?? initialContacts,
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const onSubmitHandler = data => {
  //   !contacts.some(({ name }) => name.includes(data.name))
  //     ? setContacts(state => [data, ...contacts])
  //     : alert(`${data.name} is already in contacts`);
  // };

  // const deleteContact = id => {
  //   setContacts(state => state.filter(contact => contact.id !== id));
  // };

  // const onFilterName = ({ currentTarget: { value } }) => {
  //   setFilter(value);
  // };

  const getFilterName = () => {
    const normalizedContact = filter.toLowerCase();
    return items.filter(item =>
      item.name.toLowerCase().includes(normalizedContact),
    );
  };

  return (
    <>
      <Section>
        <h1 className={s.title}>Phonebook</h1>
        <Form onSubmit={(data) => dispatch(itemsActions.addContact(data))} />
      </Section>
      <Section>
        <h2 className={s.subtitle}>Contacts</h2>
        <Filter
          filter={filter}
          onFilterName={({ target: { value } }) => dispatch(filterActions.filterContacts(value))}
        />
        <ContactsList
          contacts={getFilterName()}
          onDelete={(id) => dispatch(itemsActions.deleteContact(id))}
        />
      </Section>
    </>
  );
};

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

export default App;