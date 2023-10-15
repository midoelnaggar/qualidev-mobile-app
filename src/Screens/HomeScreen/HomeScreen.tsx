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
import { useDispatch } from "react-redux";
import { openBottomSheet } from "../../Store";
import BookedSuccesfully from "../../Components/BookedSuccesfully/BookedSuccesfully";
import UnderlineButton from "../../Components/UnderlineButton/UnderlineButton";
import timesData from "../../data/timesData";
import TimeChip from "../../Components/TimeChip/TimeChip";

export default function HomeScreen() {
  const [selectedTime, setSelectedTime] = useState<number | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [phone, setPhone] = useState<string | null>(null);

  const dispatch = useDispatch();

  const handleBook = () => {
    dispatch(openBottomSheet(<BookedSuccesfully />));
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
            onChange={(e) => setPhone(e.target?.value || null)}
          />
          <Input
            inputMode="text"
            Icon={UserIcon}
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target?.value || null)}
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
              />
            );
          })}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <MainButton
          text="Book"
          action={handleBook}
          disabled={selectedTime != null ? false : true}
        />
        <UnderlineButton text="View My Booking" action={handleBook} />
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
