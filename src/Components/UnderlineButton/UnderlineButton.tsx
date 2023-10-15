import { Text, StyleSheet, Dimensions, TouchableHighlight } from "react-native";
import React from "react";
import { colors } from "../../helpers/theme";


const { fontScale } = Dimensions.get("window");

export default function UnderlineButton({
  text,
  action,
}: {
  text?: string;
  action?: ()=>void;
}) {

  return (
    <TouchableHighlight style={styles.button} onPress={action}>
      <Text style={styles.text}>{text}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 7,
    width: "100%",
    alignItems: "center",
  },
  text: {
    color: colors.tx1,
    fontSize: fontScale * 18,
    lineHeight: fontScale * 18,
    fontFamily: "ma400",
    textDecorationLine:"underline"
  },
});
