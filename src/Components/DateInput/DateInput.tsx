import { ComponentType, FC, useState } from "react";
import { Dimensions, Pressable, StyleSheet, Text } from "react-native";
import { SvgProps } from "react-native-svg";
import { colors } from "../../helpers/theme";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import { RootState, closeDateModal, openDateModal, setDate } from "../../Store";
import { useDispatch, useSelector } from "react-redux";

interface Props {
  Icon?: ComponentType<SvgProps>;
  placeholder?: string;
  value?: string;
}

const { fontScale } = Dimensions.get("window");

const DateInput: FC<Props> = ({ Icon, placeholder }) => {
  const date = useSelector((state: RootState) => state.date);

  const dispatch = useDispatch();

  const handleOnPress = () => {
    dispatch(openDateModal());
  };

  return (
    <Pressable style={styles.container} onPress={handleOnPress}>
      {Icon ? <Icon /> : null}
      {date.value ? (
        <Text style={styles.value}>
          {moment(date.value).format("DD/MM/YYYY")}
        </Text>
      ) : (
        <Text style={styles.placeholder} onPress={handleOnPress}>
          {placeholder}
        </Text>
      )}

      <DateTimePickerModal
        date={date.value}
        onConfirm={(d) => dispatch(setDate(d))}
        onCancel={() => dispatch(closeDateModal())}
        mode="date"
        accentColor={colors.c1}
        textColor={colors.c1}
        isVisible={date.open}
      />
    </Pressable>
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
  placeholder: {
    color: colors.tx3,
    fontSize: fontScale * 14,
    fontFamily: "ma400",
  },
  value: {
    color: colors.tx2,
    fontSize: fontScale * 14,
    fontFamily: "ma400",
  },
});

export default DateInput;
