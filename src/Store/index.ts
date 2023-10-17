import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore, PERSIST } from "redux-persist";

import AsyncStorage from "@react-native-async-storage/async-storage";
import bookingSlice from "./slices/bookingSlice";
import dateSlice from "./slices/dateSlice";
import bottomSheetSlice from "./slices/bottomSheetSlice";

const persistedReducer = persistReducer(
    {
        key: "ROOT_APP_KEY",
        version: 1,
        storage: AsyncStorage,
        whitelist: ["booking"],
        blacklist: ["date", "bottomSheet"],
    },
    combineReducers({
        booking: bookingSlice.reducer,
        date: dateSlice.reducer,
        bottomSheet: bottomSheetSlice.reducer,
    })
);

const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false,
        });
    },
});

export type RootState = ReturnType<typeof persistedReducer>

export const persistor = persistStore(store);

export const { openDateModal, closeDateModal, setDate } = dateSlice.actions;
export const { setBooking,cancelBooking } = bookingSlice.actions;
export const { openBottomSheet, closeBottomSheet } = bottomSheetSlice.actions;

export default store;
