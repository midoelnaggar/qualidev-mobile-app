import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import DefaultLayout from "../../Layouts/DefaultLayout";
import MainButton from "../../Components/MainButton/MainButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState, openBottomSheet } from "../../Store";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../Navigators/AppNavigator";
import BackIcon from "../../Components/UI/Icons/BackIcon";
import { Text } from "react-native";
import LocationIcon from "../../Components/UI/Icons/LocationIcon";
import { colors } from "../../helpers/theme";
import Title from "../../Components/Title/Title";
import SubTitle from "../../Components/SubTitle/SubTitle";
import moment from "moment";
import TimeChip from "../../Components/TimeChip/TimeChip";
import CancelConfirmation from "../../Components/CancelConfirmation/CancelConfirmation";

const { fontScale } = Dimensions.get("window");

export default function BookingScreen({
  navigation,
}: StackScreenProps<RootStackParamList>) {
  const [counter, setCounter] = useState("");
  const { bookings } = useSelector((state: RootState) => state.booking);

  const dispatch = useDispatch();

  const bookingInfo = bookings[0];

  useEffect(() => {
    if (!bookings?.length) {
      navigation.replace("Home");
    }
    const interval = setInterval(() => {
      const now = moment();
      const targetDate = moment(
        `${bookingInfo?.slotStartTime} ${moment(bookingInfo?.slotDate).format(
          "DD/MM/YYYY"
        )}`,
        "hh:mm DD/MM/YYYY"
      );
      const duration = moment.duration(targetDate.diff(now));

      const daysLeft = duration.days();
      const hoursLeft = duration.hours();
      const minutesLeft = duration.minutes();
      const secondsLeft = duration.seconds();

      const countdownFormat = `${daysLeft
        .toString()
        .padStart(2, "0")}:${hoursLeft
        .toString()
        .padStart(2, "0")}:${minutesLeft
        .toString()
        .padStart(2, "0")}:${secondsLeft.toString().padStart(2, "0")}`;

      setCounter(`${countdownFormat}`);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [bookingInfo]);

  const handleCancelBook = () => {};

  return (
    <DefaultLayout>
      <View style={styles.header}>
        <Pressable style={styles.backBtn} onPress={() => navigation.goBack()}>
          <BackIcon />
        </Pressable>
        <Text style={styles.screenTitle}>View My Booking</Text>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.location}>
          <View style={styles.iconContainer}>
            <LocationIcon />
          </View>
          <Pressable>
            <Text style={styles.locationBtn}>View On Map</Text>
          </Pressable>
        </View>
        <View style={styles.details}>
          <Image
            style={styles.photo}
            source={require("../../../assets/images/Doctor.png")}
          ></Image>
          <View style={styles.nameAndPosition}>
            <Title>{bookingInfo?.doctorName}</Title>
            {bookingInfo ? <SubTitle>{"!position"}</SubTitle> : null}
          </View>
          <View style={styles.about}>
            <Text style={styles.aboutTitle}>About the doctor</Text>
            <Text style={styles.aboutDesc}>{"!about"}</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.myRegister}>
            <Text style={styles.myRegisterTitle}>My Register</Text>
            <Text style={styles.date}>
              {moment(bookingInfo?.slotDate).format("DD MMMM YYYY - dddd")}
            </Text>
            <View>
              <TimeChip
                selected
                time={moment(
                  `${bookingInfo.slotStartTime} ${moment().format(
                    "DD/MM/YYYY"
                  )}`,
                  "hh:mm DD/MM/YYYY"
                ).format("hh:mm a")}
              ></TimeChip>
            </View>
          </View>
          <View style={styles.countdown}>
            <Text style={styles.date}>Remaining time to alert</Text>
            <Text style={styles.counter}>{counter}</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <MainButton text="Cancel Booking" action={handleCancelBook} />
      </View>
    </DefaultLayout>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    gap: 13,
    alignSelf: "flex-start",
    alignItems: "center",
    paddingHorizontal: 23,
  },
  screenTitle: {
    fontFamily: "ma400",
    fontSize: fontScale * 20,
  },
  backBtn: {
    width: 37,
    height: 37,
  },
  content: {
    paddingHorizontal: 23,
    alignSelf: "flex-start",
    marginTop: 24,
    width: "100%",
  },
  location: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    height: 24,
    gap: 5,
    marginTop: 30,
  },
  locationBtn: {
    fontFamily: "ma200",
    fontSize: fontScale * 12,
    color: colors.tx5,
    textDecorationLine: "underline",
  },
  iconContainer: {
    height: 24,
    width: 24,
  },
  details: {
    backgroundColor: "#f4f4f4",
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    marginTop: 20,
    padding: 14,
    gap: 16,
  },
  photo: {
    marginTop: -64,
  },
  nameAndPosition: {
    gap: 5,
  },
  about: {
    marginTop: 10,
    gap: 0,
  },
  aboutTitle: {
    fontFamily: "ma600",
    fontSize: 14,
    color: colors.tx1,
  },
  aboutDesc: { fontFamily: "ma400", fontSize: 14, color: colors.tx2 },
  separator: {
    backgroundColor: colors.tx2,
    height: 1,
    width: "100%",
    marginVertical: 16,
  },
  myRegister: {
    gap: 10,
  },
  myRegisterTitle: {
    fontFamily: "ma600",
    fontSize: fontScale * 16,
    color: colors.tx1,
  },
  date: {
    fontFamily: "ma400",
    fontSize: fontScale * 14,
    color: colors.tx1,
  },
  countdown: {
    alignItems: "center",
  },
  counter: {
    fontFamily: "ma600",
    fontSize: fontScale * 42,
  },
  footer: {
    marginTop: "auto",
    width: "100%",
    padding: 23,
    gap: 10,
  },
});
