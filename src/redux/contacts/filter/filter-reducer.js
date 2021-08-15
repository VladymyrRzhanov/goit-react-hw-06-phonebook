import types from "./filter-types";

export const filterReducer = (state = '', { type, payload }) => {
    switch (type) {
        case types.FILTER:
            return payload;
        
        default:
            return state;
    };
};