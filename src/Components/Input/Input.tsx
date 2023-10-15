import { ComponentType, FC } from "react";
import { Dimensions, InputModeOptions, NativeSyntheticEvent, StyleSheet, TextInput, TextInputChangeEventData, View } from "react-native";
import { SvgProps } from "react-native-svg";
import { colors } from "../../helpers/theme";

interface Props {
  Icon?: ComponentType<SvgProps>;
  placeholder?: string;
  inputMode?:InputModeOptions;
  onChange:(e: NativeSyntheticEvent<TextInputChangeEventData>)=>void;
  value:any
}

const { fontScale } = Dimensions.get("window")

const Input: FC<Props> = ({ Icon, placeholder,inputMode,onChange,value }) => {
  return (
    <View style={styles.container}>
      {Icon ? <Icon /> : null}
      <TextInput inputMode={inputMode} placeholder={placeholder} style={styles.input} onChange={onChange} value={value}/>
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
    paddingVertical: 16,
    borderRadius: 10,
  },
  input: {
    color: colors.tx2,
    fontSize:fontScale*14,
    fontFamily:"ma400"

  },
});

export default Input;
