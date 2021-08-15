// import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Form from '../Form';
import Section from '../Section';
import ContactsList from '../ContactsList';
import Filter from '../Filter';
import { connect } from "react-redux";
import * as actions from "../redux/actions";
import s from './App.module.css';

const App = ({ items, onSubmit, onDelete, filter, onFilterName }) => {
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
        <Form onSubmit={onSubmit} />
      </Section>
      <Section>
        <h2 className={s.subtitle}>Contacts</h2>
        <Filter
          filter={filter}
          onFilterName={onFilterName}
        />
        <ContactsList
          contacts={getFilterName()}
          onDelete={onDelete}
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

const mapStateToProps = state => ({
  items: state.contacts.items,
  filter: state.contacts.filter
})

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(actions.addContact(data)),
  onDelete: id => dispatch(actions.deleteContact(id)),
  onFilterName: ({ target: { value } }) => dispatch(actions.filterContacts(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);