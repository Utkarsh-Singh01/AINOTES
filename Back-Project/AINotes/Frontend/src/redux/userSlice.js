import { createSlice } from "@reduxjs/toolkit";

const savedToken = localStorage.getItem("token")

const userSlice = createSlice({
    name: "user",
    initialState: {
        userData: null,
        token: savedToken || null  
    },
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload;
            if(action.payload?.token) {
                state.token = action.payload.token
                localStorage.setItem("token", action.payload.token) 
            }
            if(action.payload === null) {
                state.token = null
                localStorage.removeItem("token") 
            }
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
