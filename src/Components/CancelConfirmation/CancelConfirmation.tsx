import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { useDispatch } from "react-redux";
import { closeBottomSheet } from "../../Store";
import Title from "../Title/Title";
import SubTitle from "../SubTitle/SubTitle";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import WarningIcon from "../UI/Icons/WarningIcon";

export default function CancelConfirmation({ action }: { action: () => void }) {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <WarningIcon />
      </View>
      <View style={styles.text}>
        <Title>Are you sure cancel?</Title>
      </View>
      <View style={styles.actions}>
        <SecondaryButton
          text="Yes Cancel"
          action={() => {
            dispatch(closeBottomSheet());
            action();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: 10,
  },
  iconContainer: {
    width:82,
    height:82,
    marginBottom:20
  },
  actions: {
    marginVertical: 20,
    width: "100%",
  },
});
