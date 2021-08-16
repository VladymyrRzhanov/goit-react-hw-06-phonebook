import Form from '../Form';
import Section from '../Section';
import ContactsList from '../ContactsList';
import Filter from '../Filter';
import s from './App.module.css';

const App = () => (
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

export default App;