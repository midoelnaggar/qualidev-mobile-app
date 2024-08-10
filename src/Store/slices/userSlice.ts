import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, registerThunk } from "../thunks/userThunks";

interface IInitialState {
    loading: boolean;
    data: UserAccount
}

interface UserAccount {
    id: number;
    accountTypeID: number;
    username: string | null;
    name?: string | null;
    mobile?: string | null;
    image: string | null;
}

const initialState: IInitialState = {
    loading: false,
    data: {
        id: 0,
        accountTypeID: 0,
        username: null,
        image: null
    }
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loguout(state) {
            state = initialState;
            return state;
        }
    },
    extraReducers(builder) {
        builder.addCase(loginThunk.pending, (state) => {
            state.loading = true
        });
        builder.addCase(loginThunk.fulfilled, (state, { payload }) => {
            state.data = payload?.data;
            state.loading = false;
        });
        builder.addCase(loginThunk.rejected, (state) => {
            state.loading = false
        });
        builder.addCase(registerThunk.pending, (state) => {
            state.loading = true
        });
        builder.addCase(registerThunk.fulfilled, (state, { payload }) => {
            state.data = payload?.data;
            state.loading = false;
        });
        builder.addCase(registerThunk.rejected, (state) => {
            state.loading = false
        });
    },
})

export default userSlice;