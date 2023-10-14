import { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState, closeBottomSheet } from "../Store";
import { BottomSheet } from "@rneui/base";
import { colors } from "../helpers/theme";

export default function BottomSheetProvider({ children }: PropsWithChildren) {
  const { open } = useSelector((state: RootState) => state.bottomSheet);

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
          <Text>Style</Text>
        </View>
      </BottomSheet>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bg1,
    height:500
  },
});
