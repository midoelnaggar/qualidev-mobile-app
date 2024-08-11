import { Text, View } from "react-native";
import React, { PropsWithChildren, useEffect } from "react";
import { Snackbar } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Store";
import { removeAlert } from "../Store/slices/alertSlice";
import { colors } from "../helpers/theme";

const SnackBarProvider = ({ children }: PropsWithChildren) => {
  const { message, alertType } = useSelector((state: RootState) => state.alert);

  const dispatch = useDispatch<AppDispatch>();
  const onDismissSnackBar = () => {
    dispatch(removeAlert());
  };

  return (
    <>
      {children}
      {message && (
        <Snackbar
          visible={true}
          onDismiss={onDismissSnackBar}
          style={{
            backgroundColor: alertType ? colors[alertType] : undefined,
          }}
          duration={1500}
        >
          <Text style={{ color: "white", fontFamily: "ma400" }}>{message}</Text>
        </Snackbar>
      )}
    </>
  );
};

export default SnackBarProvider;
