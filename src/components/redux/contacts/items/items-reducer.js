import initialItems from "../../../ContactsList/initialContacts.json";

export const itemsReducer = (state = initialItems, { type, payload }) => {
    switch (type) {

        case 'contact/addContact':
            return (!state.some(({ name }) => name.includes(payload.name))
                ? [payload, ...state]
                : state
                // alert(`${payload.name} is already in contacts`)
            );
        
        case 'contact/deleteContact':
            return state.filter(contact => contact.id !== payload);
                
        default:
            return state;
    };
};