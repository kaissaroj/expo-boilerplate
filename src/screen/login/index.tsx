import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import * as Haptics from "expo-haptics";

interface LoginScreenProps {}

const LoginScreen = (props: LoginScreenProps) => {
  const { push }: any = useNavigation();
  const goToHome = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    push("Home");
  };
  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <Button title="Go To Home" onPress={() => goToHome()} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
