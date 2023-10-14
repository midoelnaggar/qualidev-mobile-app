import { Text, StyleSheet, Dimensions, TouchableHighlight } from "react-native";
import React from "react";
import { colors } from "../../helpers/theme";
import { useDispatch } from "react-redux";
import { openBottomSheet } from "../../Store";

const { fontScale } = Dimensions.get("window");

export default function MainButton({
  text,
  action,
}: {
  text?: string;
  action?: void;
}) {
  const dispatch = useDispatch();

  return (
    <TouchableHighlight
      style={styles.button}
      onPress={() => dispatch(openBottomSheet())}
    >
      <Text style={styles.text}>MainButton</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.c1,
    paddingVertical: 17,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  text: {
    color: colors.tx4,
    fontSize: fontScale * 18,
    lineHeight: fontScale * 18,
    fontFamily: "ma400",
  },
});
