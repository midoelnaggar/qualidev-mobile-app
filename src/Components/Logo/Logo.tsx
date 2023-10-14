import { Image, useWindowDimensions } from "react-native";

export default function Logo() {
  const { width } = useWindowDimensions();
  return (
    <Image
      style={{ width: width / 1.85,resizeMode:"contain" }}
      source={require("../../../assets/images/logo.png")}
    />
  );
}
