import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        getContacts: (state, action) => {
            return action.payload;
        },
    },
});

export const { getContacts } = contactsSlice.actions;
export default contactsSlice.reducer;
