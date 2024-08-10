import { Text, StyleSheet, Dimensions, TouchableHighlight } from "react-native";
import React from "react";
import { colors } from "../../helpers/theme";

const { fontScale } = Dimensions.get("window");

export default function MainButton({
  text,
  action,
  disabled,
}: {
  text?: string;
  action?: () => void;
  disabled?: boolean;
}) {
  return (
    <TouchableHighlight
      style={{
        ...styles.button,
        backgroundColor: disabled ? colors.tx3 : colors.c1,
      }}
      onPress={action}
      disabled={disabled}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
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
    textTransform: "capitalize",
  },
});
