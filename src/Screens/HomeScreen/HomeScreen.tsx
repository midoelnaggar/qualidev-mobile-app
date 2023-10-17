import { ScrollView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import DefaultLayout from "../../Layouts/DefaultLayout";
import Logo from "../../Components/Logo/Logo";
import Title from "../../Components/Title/Title";
import SubTitle from "../../Components/SubTitle/SubTitle";
import Input from "../../Components/Input/Input";
import PhoneIcon from "../../Components/UI/Icons/PhoneIcon";
import UserIcon from "../../Components/UI/Icons/UserIcon";
import DateInput from "../../Components/DateInput/DateInput";
import CalenderIcon from "../../Components/UI/Icons/CalenderIcon";
import MainButton from "../../Components/MainButton/MainButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState, openBottomSheet, setBooking } from "../../Store";
import BookedSuccesfully from "../../Components/BookedSuccesfully/BookedSuccesfully";
import UnderlineButton from "../../Components/UnderlineButton/UnderlineButton";
import timesData from "../../data/timesData";
import TimeChip from "../../Components/TimeChip/TimeChip";
import { RootStackParamList } from "../../Navigators/AppNavigator";
import { StackScreenProps } from "@react-navigation/stack";
import moment from "moment";

export default function HomeScreen({
  navigation,
}: StackScreenProps<RootStackParamList>) {
  const [selectedTime, setSelectedTime] = useState<number | null>(null);
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string >("");

  const date = useSelector((state: RootState) => state.date);
  const { bookingInfo } = useSelector((state: RootState) => state.booking);

  const dispatch = useDispatch();

  const handleBook = () => {
    dispatch(
      setBooking({
        date: moment(date.value).format("DD/MM/YYYY"),
        time: timesData[selectedTime || 0],
        doctor: {
          name: "Name Doctor",
          about:
            "Lorem ipsum dolor sit amet consectetur. Varius turpis sed aliquam erat diam nisi diam vestibulum lobortis. Molestie sed auctor pretium ..",
          position: "Doctor of Dentist",
        },
        location: "Egypt, Cairo.",
      })
    );
    dispatch(openBottomSheet(<BookedSuccesfully action={handleViewBooking} />));
  };

  const handleViewBooking = () => {
    navigation.push("Booking");
  };

  return (
    <DefaultLayout>
      <Logo />
      <ScrollView style={styles.content}>
        <View style={styles.desc}>
          <Title>Book your session</Title>
          <SubTitle>
            Enter your complete information to register with the doctor and
            choose the appropriate appointment for you from the available
            appointments below
          </SubTitle>
        </View>
        <View style={styles.inputs}>
          <Input
            inputMode="numeric"
            Icon={PhoneIcon}
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e: any) => setPhone(e.target?.value || null)}
          />
          <Input
            inputMode="text"
            Icon={UserIcon}
            placeholder="Your Name"
            value={name}
            onChange={(e: any) => setName(e.target?.value || null)}
          />
        </View>
        <View style={styles.timeSelect}>
          <Title>Select time</Title>
          <DateInput Icon={CalenderIcon} />
        </View>
        <View style={styles.times}>
          {timesData?.map((time, index) => {
            return (
              <TimeChip
                time={time}
                action={() => setSelectedTime(index)}
                selected={selectedTime == index}
                key={index}
                disabled={moment(`${time} ${moment(date.value).format("DD/MM/YYYY")}`, "hh:mma DD/MM/YYYY").isBefore()}
              />
            );
          })}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <MainButton
          text="Book"
          action={handleBook}
          disabled={(name == "" || phone == "" || selectedTime == null) ? true : false}
        />
        {bookingInfo ? (
          <UnderlineButton text="View My Booking" action={handleViewBooking} />
        ) : null}
      </View>
    </DefaultLayout>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 23,
    alignSelf: "flex-start",
    marginTop: 24,
    width: "100%",
  },
  desc: {
    gap: 12,
    width: "100%",
  },
  inputs: {
    marginTop: 18,
    gap: 18,
  },
  timeSelect: { marginTop: 38, gap: 18 },
  times: {
    marginVertical: 22,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 20,
    gap: 10,
    justifyContent: "center",
  },
  footer: {
    marginTop: "auto",
    width: "100%",
    padding: 23,
    gap: 10,
  },
});
