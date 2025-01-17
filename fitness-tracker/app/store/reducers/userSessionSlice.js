import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {},
};

export const userSessionSlice = createSlice({
    name: 'userSession',
    initialState,
    reducers: {
        setUserSession: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.user = action.payload.user;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setUserSession } = userSessionSlice.actions;

export default userSessionSlice.reducer;
