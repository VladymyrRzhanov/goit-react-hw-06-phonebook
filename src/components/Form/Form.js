import { useState } from 'react';
import { useDispatch } from "react-redux";
import * as itemsActions from "../../redux/contacts/items/items-actions";
import { v4 as uuidv4 } from 'uuid';
import s from './Form.module.css';

const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  
  const onSubmitContact = data => dispatch(itemsActions.addContact(data));

  const handleSubmit = e => {
    e.preventDefault();
    onSubmitContact({ id: uuidv4(), name, number });
    reset();
  };


  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.inputContainer}>
        <span className={s.subtitle}>Name</span>
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleInputChange}
        />
      </label>
      <label className={s.inputContainer}>
        <span className={s.subtitle}>Number</span>
        <input
          className={s.input}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleInputChange}
        />
      </label>
      <button className={s.button} type="submit"></button>
    </form>
  );
};

export default Form;
