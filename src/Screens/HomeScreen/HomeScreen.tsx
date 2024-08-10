import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
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
import {
  AppDispatch,
  RootState,
  loguout,
  openBottomSheet,
  setBooking,
} from "../../Store";
import BookedSuccesfully from "../../Components/BookedSuccesfully/BookedSuccesfully";
import UnderlineButton from "../../Components/UnderlineButton/UnderlineButton";
import timesData from "../../data/timesData";
import TimeChip from "../../Components/TimeChip/TimeChip";
import { RootStackParamList } from "../../Navigators/AppNavigator";
import { StackScreenProps } from "@react-navigation/stack";
import moment from "moment";
import PasswordIcon from "../../Components/UI/Icons/PasswordIcon";
import { colors } from "../../helpers/theme";
import { loginThunk, registerThunk } from "../../Store/thunks/userThunks";
import SecondaryButton from "../../Components/SecondaryButton/SecondaryButton";

export default function HomeScreen({
  navigation,
}: StackScreenProps<RootStackParamList>) {
  const [selectedTime, setSelectedTime] = useState<number | null>(null);
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [authType, setAuthType] = useState<"login" | "register">("login");

  const { loading, data: user } = useSelector((state: RootState) => state.user);

  const date = useSelector((state: RootState) => state.date);
  const { bookingInfo } = useSelector((state: RootState) => state.booking);

  const dispatch = useDispatch<AppDispatch>();

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

  const handleAuth = () => {
    if (authType === "login") {
      dispatch(loginThunk({ username: phone, password }));
    } else if (authType === "register") {
      dispatch(
        registerThunk({
          patient_name: name,
          username: phone,
          phone,
          password,
          account_type_id: "2",
          image_path: phone + ".png",
        })
      );
    }
  };

  const handleLogout = () => {
    dispatch(loguout());
    setName("");
    setPhone("");
    setPassword("");
    setAuthType("login");
    setSelectedTime(null);
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

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
        {!user.id && (
          <View style={styles.tabs}>
            <Pressable
              style={{
                ...styles.tab,
                borderBottomColor:
                  authType === "login" ? colors.c1 : colors.tx4,
              }}
              onPress={() => setAuthType("login")}
            >
              <Text style={styles.tabText}>Login</Text>
            </Pressable>
            <Pressable
              onPress={() => setAuthType("register")}
              style={{
                ...styles.tab,
                borderBottomColor:
                  authType === "register" ? colors.c1 : colors.tx4,
              }}
            >
              <Text style={styles.tabText}>Register</Text>
            </Pressable>
          </View>
        )}
        <View style={styles.inputs}>
          {!(!user.id && authType === "login") && (
            <Input
              inputMode="text"
              Icon={UserIcon}
              placeholder="Your Name"
              value={user.name ? user.name : name}
              onChangeText={(e: string) => setName(e)}
              readOnly={!!user.id}
            />
          )}
          <Input
            inputMode="numeric"
            Icon={PhoneIcon}
            placeholder="Enter your phone number"
            value={user.mobile ? user.mobile : phone}
            onChangeText={(e: string) => setPhone(e)}
            readOnly={!!user.id}
          />
          {!user.id && (
            <Input
              inputMode="text"
              Icon={PasswordIcon}
              placeholder="Enter your password"
              value={password}
              onChangeText={(e: string) => setPassword(e)}
              password
              readOnly={!!user.id}
            />
          )}
          {!user.id ? (
            <MainButton
              text={authType}
              action={handleAuth}
              disabled={
                loading ||
                !(authType == "register" ? name : true) ||
                !phone ||
                !password
              }
            />
          ) : (
            <SecondaryButton
              text="Logout"
              action={handleLogout}
            ></SecondaryButton>
          )}
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
                disabled={moment(
                  `${time} ${moment(date.value).format("DD/MM/YYYY")}`,
                  "hh:mma DD/MM/YYYY"
                ).isBefore()}
              />
            );
          })}
        </View>
      </ScrollView>
      {user.id ? (
        <View style={styles.footer}>
          <MainButton
            text="Book"
            action={handleBook}
            disabled={!user.id || selectedTime == null}
          />
          {bookingInfo ? (
            <UnderlineButton
              text="View My Bookings"
              action={handleViewBooking}
            />
          ) : null}
        </View>
      ) : null}
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
  tabs: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.bo,
  },
  tab: {
    alignItems: "center",
    width: "50%",
    borderBottomWidth: 2,
    paddingVertical: 10,
  },
  tabText: {
    fontSize: 18,
    fontFamily: "ma400",
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
