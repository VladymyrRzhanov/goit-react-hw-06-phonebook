import types from "./items-types";
import initialItems from "../../../components/ContactsList/initialContacts.json";

export const itemsReducer = (state = initialItems, { type, payload }) => {
    switch (type) {

        case types.ADD:
            return (!state.some(({ name }) => name.includes(payload.name))
                ? [payload, ...state]
                : state
                // alert(`${payload.name} is already in contacts`)
            );
        
        case types.DELETE:
            return state.filter(contact => contact.id !== payload);
                
        default:
            return state;
    };
};