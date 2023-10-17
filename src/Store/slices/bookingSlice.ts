import { createSlice } from "@reduxjs/toolkit";

interface StateType {
    loading: boolean
    bookingInfo: Booking | null
}

interface Booking {
    doctor: {
        name: string
        position: string
        about: string
    }
    date: string
    time: string
    location: string
}

const initialState: StateType = {
    loading: false,
    bookingInfo: null
}


const bookingSlice = createSlice({
    name: "booking",
    initialState,
    reducers: {
        setBooking: (state, { payload }: { payload: Booking }) => {
            state.bookingInfo = payload
        },
        cancelBooking: (state) => {
            state.bookingInfo = null
        }
    }
})

export default bookingSlice 