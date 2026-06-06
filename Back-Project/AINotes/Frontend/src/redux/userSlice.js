import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        userData: null,
        token: null  
    },
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload;
            state.token = action.payload?.token || null
        },
        updateCredits: (state, action) => {
            if (state.userData) {
                state.userData.credits = action.payload;
            }
        },
    },
});

export const { setUserData, updateCredits } = userSlice.actions;
export default userSlice.reducer;
