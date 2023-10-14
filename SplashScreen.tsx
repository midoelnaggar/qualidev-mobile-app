import { useEffect, useRef } from "react";
import {
  Animated,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";

export default function SplashScreen() {
  const { width } = useWindowDimensions();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const lineAnim = useRef(new Animated.Value(0)).current;
  const positionAnim = useRef(new Animated.Value(width / 4)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      delay: 1000,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim]);

  useEffect(() => {
    Animated.timing(positionAnim, {
      toValue: 0,
      duration: 1000,
      delay: 1000,
      useNativeDriver: false,
    }).start();
  }, [positionAnim]);

  useEffect(() => {
    Animated.timing(lineAnim, {
      toValue: width / 2,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [lineAnim]);

  const styles = StyleSheet.create({
    container: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: "center",
      justifyContent: "center",
    },
    imagesContainer: {
      position: "absolute",
      width: width / 2,
      height: width / 2,
    },
    image: {
      position: "absolute",
      width: width / 2,
      height: width / 2,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.imagesContainer}>
        <Animated.Image
          source={require("./assets/images/splash1.png")}
          style={{ ...styles.image, width: lineAnim }}
        />
        <Animated.Image
          source={require("./assets/images/splash2.png")}
          style={{
            ...styles.image,
            opacity: fadeAnim,
            top: positionAnim,
            bottom: 0,
          }}
        />
      </View>
    </View>
  );
}
