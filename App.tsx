import "react-native-gesture-handler";
if (__DEV__) {
  import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));
}
import { StyleSheet, Text, View } from "react-native";
import { ResourceLoader } from "./src/hoc";
import Route from "./src/route";

export default function App() {
  return (
    <ResourceLoader>
      <Route />
    </ResourceLoader>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
