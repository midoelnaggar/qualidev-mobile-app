import { View, Text } from "react-native";
import React, { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import store, { persistor } from "../Store";
import { PersistGate } from "redux-persist/integration/react";

export default function StoreProvider({ children }: PropsWithChildren) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
}
