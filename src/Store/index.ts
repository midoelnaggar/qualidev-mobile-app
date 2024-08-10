import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore, PERSIST } from "redux-persist";

import AsyncStorage from "@react-native-async-storage/async-storage";
import bookingSlice from "./slices/bookingSlice";
import dateSlice from "./slices/dateSlice";
import bottomSheetSlice from "./slices/bottomSheetSlice";
import userSlice from "./slices/userSlice";

const persistedReducer = persistReducer(
    {
        key: "ROOT_APP_KEY",
        version: 1,
        storage: AsyncStorage,
        whitelist: ["booking"],
        blacklist: ["date", "bottomSheet", "user"],
    },
    combineReducers({
        booking: bookingSlice.reducer,
        date: dateSlice.reducer,
        bottomSheet: bottomSheetSlice.reducer,
        user: persistReducer({
            key: "user",
            storage: AsyncStorage,
            blacklist: ["loading"]
        }, userSlice.reducer)
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
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

export const { openDateModal, closeDateModal, setDate } = dateSlice.actions;
export const { setBooking, cancelBooking } = bookingSlice.actions;
export const { openBottomSheet, closeBottomSheet } = bottomSheetSlice.actions;
export const { loguout } = userSlice.actions;

export default store;
