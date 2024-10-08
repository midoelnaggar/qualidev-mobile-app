import { ComponentType, FC } from "react";
import { Dimensions, StyleSheet, Text, TouchableHighlight } from "react-native";
import { SvgProps } from "react-native-svg";
import { colors } from "../../helpers/theme";

interface Props {
  selected?: boolean;
  time?: string;
  disabled?: boolean;
  action?: () => void;
}

const { fontScale } = Dimensions.get("window");

const TimeChip: FC<Props> = ({ selected, time, action, disabled }) => {
  return (
    <TouchableHighlight
      style={{
        ...styles.chip,
        backgroundColor: disabled
          ? "#d3d3d3"
          : selected
          ? colors.c1
          : colors.bg1,
      }}
      onPress={() => action && !disabled && action()}
    >
      <Text
        style={{ ...styles.text, color: selected ? colors.tx4 : colors.tx2 }}
      >
        {time}
      </Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  chip: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderColor: colors.bo,
    borderWidth: 2,
    borderRadius: 25,
    alignSelf: "flex-start",
  },
  text: {
    fontFamily: "ma400",
    fontSize: fontScale * 16,
    lineHeight: fontScale * 16,
  },
});

export default TimeChip;
