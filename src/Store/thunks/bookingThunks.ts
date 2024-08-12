import { createAsyncThunk } from "@reduxjs/toolkit";
import bookingServices from "../../Services/bookingServices";
import { setAlert } from "../slices/alertSlice";
import { clearSlots } from "../slices/bookingSlice";

export const getSlotsThunk = createAsyncThunk("booking/slots", async (payload: IGetSlotsPayload, { dispatch, rejectWithValue }) => {
    try {
        const res = await bookingServices.getSlots(payload)
        return res
    } catch (error: any) {
        dispatch(clearSlots())
        dispatch(setAlert({ alertType: "error", message: "Error fetching time slots" }))
        return rejectWithValue(error.response.data)
    }
})

export const addBookingThunk = createAsyncThunk("booking/add", async (payload: IAddBookingPayload, { dispatch, rejectWithValue }) => {
    try {
        const res = await bookingServices.addBooking(payload)
        return res
    } catch (error: any) {
        dispatch(clearSlots())
        dispatch(setAlert({ alertType: "error", message: "Error while booking" }))
        return rejectWithValue(error.response.data)
    }
})

export const getBookingsThunk = createAsyncThunk("booking/getAll", async (payload: IGetBookingsPayload, { dispatch, rejectWithValue }) => {
    try {
        const res = await bookingServices.getBookings(payload)
        return res
    } catch (error: any) {
        dispatch(clearSlots())
        dispatch(setAlert({ alertType: "error", message: "Error while get your bookings" }))
        return rejectWithValue(error.response.data)
    }
})