import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
    alertType: "error" | "warning" | "info" | "success" | null
    message: string | null;
}


const initialState: IInitialState = {
    alertType: null,
    message: null,
}


const alertSlice = createSlice({
    name: "alert",
    initialState,
    reducers: {
        setAlert(state, action) {
            state.alertType = action.payload.alertType;
            state.message = action.payload.message;
            return state
        },
        removeAlert(state) {
            return initialState;
        },
    },

})

export const { setAlert, removeAlert } = alertSlice.actions;

export default alertSlice;