import AsyncStorage from "@react-native-async-storage/async-storage";
import Reactotron from "reactotron-react-native";
const YOUR_LOCAL_IPADDRESS = "1.1.1.1";
Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure({ host: YOUR_LOCAL_IPADDRESS }) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!
