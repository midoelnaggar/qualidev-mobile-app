import { PropsWithChildren } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState, closeBottomSheet } from "../Store";
import { BottomSheet } from "@rneui/base";
import { colors } from "../helpers/theme";
import CloseIcon from "../Components/UI/Icons/CloseIcon";

export default function BottomSheetProvider({ children }: PropsWithChildren) {
  const { open, component } = useSelector(
    (state: RootState) => state.bottomSheet
  );

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeBottomSheet());
  };

  return (
    <>
      {children}
      <BottomSheet
        isVisible={open}
        backdropStyle={{ backgroundColor: "none" }}
        onBackdropPress={handleClose}
      >
        <View style={styles.container}>
          <Pressable style={styles.closeContainer} onPress={handleClose}>
            <CloseIcon />
          </Pressable>
          {component}
        </View>
      </BottomSheet>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bg1,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  closeContainer: {
    width: 31,
    height: 31,
    alignSelf: "flex-end",
  },
});
