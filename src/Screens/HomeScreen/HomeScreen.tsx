import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import DefaultLayout from "../../Layouts/DefaultLayout";
import Logo from "../../Components/Logo/Logo";
import Title from "../../Components/Title/Title";
import SubTitle from "../../Components/SubTitle/SubTitle";
import Input from "../../Components/Input/Input";
import PhoneIcon from "../../Components/UI/Icons/PhoneIcon";
import UserIcon from "../../Components/UI/Icons/UserIcon";
import { colors } from "../../helpers/theme";
import DateInput from "../../Components/DateInput/DateInput";
import CalenderIcon from "../../Components/UI/Icons/CalenderIcon";
import MainButton from "../../Components/MainButton/MainButton";

export default function HomeScreen() {
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
          <Input Icon={PhoneIcon} placeholder="Enter your phone number" />
          <Input Icon={UserIcon} placeholder="Your Name" />
        </View>
        <View style={styles.time}>
          <Title>Select time</Title>
          <DateInput Icon={CalenderIcon} />
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <MainButton />
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
  time: { marginTop: 38, gap: 18 },
  footer: {
    marginTop: "auto",
    width: "100%",
    padding: 23,
  },
});
