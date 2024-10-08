import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
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
import { AppDispatch, RootState, loguout, openBottomSheet } from "../../Store";
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
import {
  addBookingThunk,
  getBookingsThunk,
  getSlotsThunk,
} from "../../Store/thunks/bookingThunks";
import { setAlert } from "../../Store/slices/alertSlice";

export default function HomeScreen({
  navigation,
}: StackScreenProps<RootStackParamList>) {
  const [selectedTime, setSelectedTime] = useState<number | null>(null);
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [authType, setAuthType] = useState<"login" | "register">("login");

  const { loading, data: user } = useSelector((state: RootState) => state.user);
  const {
    loading: bookingLoading,
    slots,
    bookings,
  } = useSelector((state: RootState) => state.booking);

  const date = useSelector((state: RootState) => state.date);

  const dispatch = useDispatch<AppDispatch>();
  const getBookings = () =>
    dispatch(
      getBookingsThunk({
        month: moment().month() + 1,
        year: moment().year(),
        page_num: 0,
        page_size: 1000,
        patient_id: user.id,
      })
    );

  useEffect(() => {
    if (user?.id) {
      getBookings();
    }
  }, [user?.id]);
  const handleBook = async () => {
    const res = await dispatch(
      addBookingThunk({
        slot_id: Number(selectedTime),
        patient_account_id: user.id,
        loc_lat: "-",
        loc_long: "-",
        note: "-",
      })
    );
    if (res.meta.requestStatus === "fulfilled") {
      dispatch(
        openBottomSheet(<BookedSuccesfully action={handleViewBooking} />)
      );
    }
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

  useEffect(() => {
    dispatch(
      getSlotsThunk({ clinic_id: 4, doctor_id: 1, slot_date: date.value })
    );
  }, [date]);

  const handleLogout = () => {
    dispatch(loguout());
    setName("");
    setPhone("");
    setPassword("");
    setAuthType("login");
    setSelectedTime(null);
  };

  const handleSelectTime = (id: number) =>
    user.id
      ? selectedTime == id
        ? setSelectedTime(null)
        : setSelectedTime(id)
      : dispatch(
          setAlert({ alertType: "info", message: "You have to login first" })
        );

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
          {bookingLoading ? (
            <ActivityIndicator color={colors.c1} />
          ) : slots.length ? (
            slots.map(({ id, slotStartTime }) => {
              return (
                <TimeChip
                  time={moment(
                    `${slotStartTime} ${moment(date.value).format(
                      "DD/MM/YYYY"
                    )}`,
                    "hh:mm DD/MM/YYYY"
                  ).format("hh:mm a")}
                  action={() => handleSelectTime(id)}
                  selected={selectedTime == id}
                  key={id}
                  disabled={moment(
                    `${slotStartTime} ${moment(date.value).format(
                      "DD/MM/YYYY"
                    )}`,
                    "hh:mm DD/MM/YYYY"
                  ).isBefore()}
                />
              );
            })
          ) : (
            <Text
              style={{ fontFamily: "ma400", fontSize: 16, textAlign: "center" }}
            >
              No time slots available for the selected date
            </Text>
          )}
        </View>
      </ScrollView>
      {user.id ? (
        <View style={styles.footer}>
          <MainButton
            text="Book"
            action={handleBook}
            disabled={!user.id || selectedTime == null}
          />
          {bookings?.length ? (
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
