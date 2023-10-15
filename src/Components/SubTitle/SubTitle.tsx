import { Text, useWindowDimensions } from "react-native";
import { PropsWithChildren, useEffect } from "react";
import { colors } from "../../helpers/theme";

export default function SubTitle({
  children,
  centered,
}: {
  children: JSX.Element|string;
  centered?: boolean;
}) {
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
        textAlign: centered ? "center" : "auto",
      }}
    >
      {children}
    </Text>
  );
}
