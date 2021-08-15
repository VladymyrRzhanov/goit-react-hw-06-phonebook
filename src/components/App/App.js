// import { useState, useEffect } from 'react';
import Form from '../Form';
import Section from '../Section';
import ContactsList from '../ContactsList';
import Filter from '../Filter';
import s from './App.module.css';

const App = () => {
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

  // const getFilterName = () => {
  //   const normalizedContact = filter.toLowerCase();
  //   return items.filter(item =>
  //     item.name.toLowerCase().includes(normalizedContact),
  //   );
  // };

  return (
    <>
      <Section>
        <h1 className={s.title}>Phonebook</h1>
        <Form/>
      </Section>
      <Section>
        <h2 className={s.subtitle}>Contacts</h2>
        <Filter/>
        <ContactsList/>
      </Section>
    </>
  );
};

export default App;