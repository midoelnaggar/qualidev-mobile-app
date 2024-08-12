import { createSlice } from "@reduxjs/toolkit";
import { addBookingThunk, getBookingsThunk, getSlotsThunk } from "../thunks/bookingThunks";
import moment from "moment";

interface IInitialState {
    loading: boolean
    bookings: IBooking[]
    slots: ISlot[]
}

const initialState: IInitialState = {
    loading: false,
    bookings: [],
    slots: []
}


const bookingSlice = createSlice({
    name: "booking",
    initialState,
    reducers: {
        clearSlots: (state) => {
            state.slots = []
            return state
        }
    },
    extraReducers(builder) {
        builder.addCase(getSlotsThunk.pending, (state) => {
            state.loading = true
        });
        builder.addCase(getSlotsThunk.fulfilled, (state, { payload }) => {
            state.slots = payload?.data?.length ? [...payload.data].sort((a, b) => Number(moment(
                `${a.slotStartTime} ${moment().format(
                    "DD/MM/YYYY"
                )}`,
                "hh:mm DD/MM/YYYY"
            ).toDate()) - Number(moment(
                `${b.slotStartTime} ${moment().format(
                    "DD/MM/YYYY"
                )}`,
                "hh:mm DD/MM/YYYY"
            ).toDate())) : []
            state.loading = false;
            return state
        });
        builder.addCase(getSlotsThunk.rejected, (state) => {
            state.loading = false
        });
        ////
        builder.addCase(getBookingsThunk.pending, (state) => {
            state.loading = true
        });
        builder.addCase(getBookingsThunk.fulfilled, (state, { payload }) => {
            state.bookings = payload?.data?.reservation?.length ? [...payload.data.reservation].sort((a, b) => Number(moment(
                `${a.slotStartTime} ${moment().format(
                    "DD/MM/YYYY"
                )}`,
                "hh:mm DD/MM/YYYY"
            ).toDate()) - Number(moment(
                `${b.slotStartTime} ${moment().format(
                    "DD/MM/YYYY"
                )}`,
                "hh:mm DD/MM/YYYY"
            ).toDate())) : []
            state.loading = false;
            return state
        });
        builder.addCase(getBookingsThunk.rejected, (state) => {
            state.loading = false
        });
    },
})
export const { clearSlots } = bookingSlice.actions

export default bookingSlice 