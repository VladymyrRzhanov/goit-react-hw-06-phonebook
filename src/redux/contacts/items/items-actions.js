import types from "./items-types";

export const addContact = data => ({
    type: types.ADD,
    payload: data
});

export const deleteContact = id => ({
    type: types.DELETE,
    payload: id
})