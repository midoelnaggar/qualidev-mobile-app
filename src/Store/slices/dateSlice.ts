import { createSlice } from "@reduxjs/toolkit";

export type DateType = {
    open: boolean;
    value: Date;
};

const initialState: DateType = {

    open: false,
    value: new Date(),

}

const dateSlice = createSlice({
    name: "date",
    initialState,
    reducers: {
        openDateModal: (state) => {
            state.open = true
        },
        closeDateModal: (state) => {
            state.open = false
        },
        setDate: (state, { payload }) => {
            state.value = payload
            state.open = false
        }
    }
})

export default dateSlice 