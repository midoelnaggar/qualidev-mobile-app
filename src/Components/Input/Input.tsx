import { ComponentType, FC } from "react";
import { Dimensions, StyleSheet, TextInput, View } from "react-native";
import { SvgProps } from "react-native-svg";
import { colors } from "../../helpers/theme";

interface Props {
  Icon?: ComponentType<SvgProps>;
  placeholder?: string;
}

const { fontScale } = Dimensions.get("window")

const Input: FC<Props> = ({ Icon, placeholder }) => {
  return (
    <View style={styles.container}>
      {Icon ? <Icon /> : null}
      <TextInput placeholder={placeholder} style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderColor: colors.bo,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
  },
  input: {
    color: colors.tx2,
    fontSize:fontScale*14,
    fontFamily:"ma400"

  },
});

export default Input;
