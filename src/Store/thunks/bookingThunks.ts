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