export const filterReducer = (state = '', { type, payload }) => {
    switch (type) {
        case 'contact/filterContact':
            return payload;
        
        default:
            return state;
    };
};