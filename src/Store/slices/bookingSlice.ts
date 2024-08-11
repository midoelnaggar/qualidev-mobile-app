import { createSlice } from "@reduxjs/toolkit";
import { getSlotsThunk } from "../thunks/bookingThunks";
import moment from "moment";

interface IInitialState {
    loading: boolean
    bookingInfo: IBooking | null
    slots: ISlot[]
}

const initialState: IInitialState = {
    loading: false,
    bookingInfo: null,
    slots: []
}


const bookingSlice = createSlice({
    name: "booking",
    initialState,
    reducers: {
        setBooking: (state, { payload }: { payload: IBooking }) => {
            state.bookingInfo = payload
        },
        cancelBooking: (state) => {
            state.bookingInfo = null
        },
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
            state.slots = payload?.data;
            state.slots.sort((a: any, b: any) => Number(moment(
                `${a.slotStartTime} ${moment().format(
                    "DD/MM/YYYY"
                )}`,
                "hh:mm DD/MM/YYYY"
            ).toDate()) - Number(moment(
                `${b.slotStartTime} ${moment().format(
                    "DD/MM/YYYY"
                )}`,
                "hh:mm DD/MM/YYYY"
            ).toDate()))
            state.loading = false;
            return state
        });
        builder.addCase(getSlotsThunk.rejected, (state) => {
            state.loading = false
        });
    },
})
export const { clearSlots, cancelBooking, setBooking } = bookingSlice.actions

export default bookingSlice 