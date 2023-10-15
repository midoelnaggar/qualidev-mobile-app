import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { useDispatch } from "react-redux";
import { closeBottomSheet } from "../../Store";
import Title from "../Title/Title";
import SubTitle from "../SubTitle/SubTitle";
import MainButton from "../MainButton/MainButton";

export default function BookedSuccesfully() {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        style={styles.animation}
        loop={false}
        onAnimationFinish={() =>
          setTimeout(() => {
            dispatch(closeBottomSheet());
          }, 500)
        }
        source={require("../../Animations/Check.json")}
      />
      <View style={styles.text}>
        <Title>successfully registered</Title>
        <SubTitle centered>
          You have successfully registered for the scheduled appointment and you
          can keep the doctor's information
        </SubTitle>
      </View>
      <View style={styles.actions}>
      <MainButton text="Go To My Booking" />
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
  animation: {
    width: "50%",
    marginTop: -30,
    marginBottom: -50,
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: 10,
  },
  actions:{
    marginVertical:20,
    width:"100%"
  }
});
