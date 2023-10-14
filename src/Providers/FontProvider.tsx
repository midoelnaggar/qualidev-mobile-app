import { View, Text } from "react-native";
import React, { PropsWithChildren, useCallback, useState } from "react";
import SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import SplashScreenComponent from "../../SplashScreen";

export default function FontProvider({ children }: PropsWithChildren) {
  const [splashLoading, setSplashLoading] = useState(true);

  const [fontsLoaded] = useFonts({
    ma200: require("../../assets/fonts/Almarai-Light.ttf"),
    ma400: require("../../assets/fonts/Almarai-Regular.ttf"),
    ma600: require("../../assets/fonts/Almarai-Bold.ttf"),
  });

  const onLayoutView = useCallback(() => {
    if (fontsLoaded) {
      setTimeout(() => {
        setSplashLoading(false);
      }, 3000);
    }
  }, [setSplashLoading, fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={{ flex: 1 }} onLayout={onLayoutView}>
      {splashLoading ? (
        <SplashScreenComponent />
      ) : (
        <View style={{ flex: 1 }}>{children}</View>
      )}
    </View>
  );
}
