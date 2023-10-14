import { Text, useWindowDimensions } from "react-native";
import { PropsWithChildren, useEffect } from "react";
import { colors } from "../../helpers/theme";

export default function SubTitle({ children }: PropsWithChildren) {
  const { fontScale } = useWindowDimensions();

  return (
    <Text
      style={{
        fontSize: fontScale * 12,
        fontFamily: "ma200",
        textTransform: "capitalize",
        color: colors.tx2,
        lineHeight: 15.6,
        width: "95%",
      }}
    >
      {children}
    </Text>
  );
}
