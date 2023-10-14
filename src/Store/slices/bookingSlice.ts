import { createSlice } from "@reduxjs/toolkit";

interface StateType {
    loading: boolean
    bookings: Booking[]
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
    bookings: []
}


const bookingSlice = createSlice({
    name: "booking",
    initialState,
    reducers: {
        addBooking: (state, { payload }) => {
            state.bookings.push(payload)
        }
    }
})

export default bookingSlice 