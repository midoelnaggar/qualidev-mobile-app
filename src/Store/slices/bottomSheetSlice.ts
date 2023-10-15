import { createSlice } from "@reduxjs/toolkit";

interface StateType {
    loading: boolean
    open: boolean
    component: JSX.Element | null
}


const initialState: StateType = {
    loading: false,
    open: false,
    component: null
}


const bottomSheetSlice = createSlice({
    name: "bottomSheet",
    initialState,
    reducers: {
        openBottomSheet: (state, { payload }) => {
            state.open = true
            state.component = payload
        },
        closeBottomSheet: (state) => {
            state.open = false
            state.component = null
        },
    }
})

export default bottomSheetSlice 