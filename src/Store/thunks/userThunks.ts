import userServices from "../../Services/userServices";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setAlert } from "../slices/alertSlice";

export const loginThunk = createAsyncThunk("user/login", async (data: ILoginPayload, { dispatch, rejectWithValue }) => {
    try {
        const res = await userServices.login(data)
        return res
    } catch (error: any) {
        dispatch(setAlert({ alertType: "error", message: "Error while trying to log you in" }))
        rejectWithValue(error.response.data)
    }

})

export const registerThunk = createAsyncThunk("user/register", async (data: IRegisterPayload, { dispatch, rejectWithValue }) => {
    try {
        const res = await userServices.register(data)
        return res
    } catch (error: any) {
        dispatch(setAlert({ alertType: "error", message: "Error while trying to register your account" }))
        rejectWithValue(error.response.data)
    }

})