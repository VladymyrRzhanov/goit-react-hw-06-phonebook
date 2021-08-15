export const addContact = data => ({
    type: 'contact/addContact',
    payload: data
});

export const deleteContact = id => ({
    type: 'contact/deleteContact',
    payload: id
})