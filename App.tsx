import "react-native-gesture-handler";
if (__DEV__) {
  import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));
}
import { ResourceLoader } from "./src/hoc";
import Route from "./src/route";

export default function App() {
  return (
    <ResourceLoader>
      <Route />
    </ResourceLoader>
  );
}
