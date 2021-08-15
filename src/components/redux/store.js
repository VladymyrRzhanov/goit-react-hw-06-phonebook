import { createStore } from "redux";
import initialItems from "../ContactsList/initialContacts.json";

const initialState = {
  contacts: {
    items: initialItems,
    filter: ''
  }
}


const reducer = (state=initialState, { type, payload }) => {
    switch (type) {

        case 'contact/addContact':
            return {
                ...state, 
                contacts: {
                    ...state.contacts,
                    items: [ payload, ...state.contacts.items ]
                }
            }            
        
        case 'contact/deleteContact':
            return {
                ...state, 
                contacts: {
                    ...state.contacts,
                    items: state.contacts.items.filter(contact => contact.id !== payload)
                }
            }
        
        case 'contact/filterContact':
            return {
                ...state,
                contacts: {
                    ...state.contacts,
                    filter: payload
                }
            }
        
        default:
            return state
    };
};

const store = createStore(reducer);

export default store;
