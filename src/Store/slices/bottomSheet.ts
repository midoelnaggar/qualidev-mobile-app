import { createSlice } from "@reduxjs/toolkit";

interface StateType {
    loading: boolean
    open: boolean
}


const initialState: StateType = {
    loading: false,
    open: false
}


const bottomSheetSlice = createSlice({
    name: "bottomSheet",
    initialState,
    reducers: {
        openBottomSheet: (state) => {
            state.open = true
        },
        closeBottomSheet: (state) => {
            state.open = false
        },
    }
})

export default bottomSheetSlice 