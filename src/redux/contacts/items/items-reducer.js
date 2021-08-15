import { addContact, deleteContact } from "./items-actions";
import { createReducer } from '@reduxjs/toolkit';
import initialItems from "../../../components/ContactsList/initialContacts.json";

export const itemsReducer = createReducer(initialItems, {
    [addContact]: (state, { type, payload }) => (!state.some(({ name }) => name.includes(payload.name))
        ? [payload, ...state]
        : alert(`${payload.name} is already in contacts`)
    ),
    
    [deleteContact]: (state, { type, payload }) => (state.filter(contact => contact.id !== payload))
});