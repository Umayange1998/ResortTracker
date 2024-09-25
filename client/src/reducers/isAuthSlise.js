import { createSlice } from "@reduxjs/toolkit";

const isAuthSlise = createSlice({
    name: "isAuth",

    initialState:{
        authStatus: false,

    },
    reducers:{
        setIsAuth:(state, action) =>{
            state.authStatus= action.payload.isAuth;
        }
    }
});

export const {setIsAuth}=
isAuthSlise.actions;
export default isAuthSlise.reducer;