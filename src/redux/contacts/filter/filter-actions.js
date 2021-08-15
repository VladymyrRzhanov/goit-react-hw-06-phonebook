import types from "./filter-types";

export const filterContacts = value => ({
    type: types.FILTER,
    payload: value
});