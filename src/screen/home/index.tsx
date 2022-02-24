import { useNavigation } from "@react-navigation/native";
import { MotiView } from "moti";
import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  const { push }: any = useNavigation();
  return (
    <View style={styles.container}>
      <Button title="Go To Login" onPress={() => push("Login")} />
      <Box />
    </View>
  );
};

const Box = () => {
  return (
    <MotiView
      style={{
        backgroundColor: "pink",
        width: 100,
        height: 100,
        marginVertical: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
      from={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "timing",
        duration: 350,
      }}
    >
      <Text>Welcome To Home</Text>
    </MotiView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
