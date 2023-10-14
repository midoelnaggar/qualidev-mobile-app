import { Text, useWindowDimensions } from "react-native";
import { PropsWithChildren, useEffect } from "react";
import { colors } from "../../helpers/theme";

export default function Title({ children }: PropsWithChildren) {
  const { fontScale } = useWindowDimensions();

  return (
    <Text
      style={{
        fontSize: fontScale * 20,
        fontFamily: "ma600",
        textTransform: "capitalize",
        color: colors.tx1,
        lineHeight: fontScale * 20,
      }}
    >
      {children}
    </Text>
  );
}
