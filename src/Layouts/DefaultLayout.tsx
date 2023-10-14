import { View, Dimensions, StyleSheet, Image, ScrollView } from "react-native";
import React, { PropsWithChildren } from "react";
import { colors } from "../helpers/theme";
const Vector = require("../../assets/images/Vector.png");

const { width, height } = Dimensions.get("window");

export default function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <View style={styles.container}>
      <Image style={styles.vector} source={Vector} />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    paddingTop: height / 12,
    width,
    alignItems: "center",
    backgroundColor:colors.bg1
  },
  vector: {
    position: "absolute",
    top: -(10 + height / 12),
    left: -10,
  },
});
