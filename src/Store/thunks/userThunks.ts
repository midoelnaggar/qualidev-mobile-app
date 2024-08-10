import userServices from "../../Services/userServices";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginThunk = createAsyncThunk("user/login", async (data: ILoginPayload, { rejectWithValue }) => {
    try {
        const res = await userServices.login(data)
        return res
    } catch (error: any) {
        rejectWithValue(error.response.data)
    }

})

export const registerThunk = createAsyncThunk("user/register", async (data: IRegisterPayload, { rejectWithValue }) => {
    try {
        const res = await userServices.register(data)
        return res
    } catch (error: any) {
        rejectWithValue(error.response.data)
    }

})