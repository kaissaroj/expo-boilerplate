import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, LoginScreen, AboutScreen } from "../screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { View, TouchableOpacity, Dimensions } from "react-native";
import { motify, MotiText } from "moti";

const MotiIonicons = motify(Ionicons)();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const { width, height } = Dimensions.get("screen");

function MyTabBar({ state, descriptors, navigation }: any) {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#fff",
        height: height * 0.08,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        marginBottom: 10,
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.7,
        shadowRadius: 10,
        elevation: 40,
      }}
    >
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const { color, size } = route;
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused: boolean = state.index === index;
        let iconName: any;

        if (route.name === "Home") {
          iconName = isFocused ? "home" : "home-outline";
        } else if (route.name === "Transaction") {
          iconName = isFocused ? "swap-vertical" : "swap-vertical-outline";
        } else if (route.name === "More") {
          iconName = isFocused ? "menu" : "menu-outline";
        }

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={`${index}-${route.name}`}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ["selected"] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: "center",
              marginTop: 8,
            }}
          >
            <MotiIonicons
              initial={{ scale: 1, color: "#A3A3A3" }}
              animate={{
                scale: isFocused ? 1.2 : 1,
                backgroundColor: isFocused ? "#470D57" : "#A3A3A3",
              }}
              transition={{
                type: "timing",
              }}
              name={iconName}
              size={18}
            />
            <MotiText
              style={{
                color: isFocused ? "#470D57" : "#A3A3A3",
                fontSize: 12,
                marginTop: 2,
                fontFamily: isFocused ? "RobotoMedium" : "RobotoRegular",
              }}
            >
              {label}
            </MotiText>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={({ route }: any) => ({
        tabBarActiveTintColor: "#470D57",
        tabBarInactiveTintColor: "#A3A3A3",
        headerShown: false,
        tabBarStyle: {
          marginHorizontal: 10,
          borderRadius: 20,
          backgroundColor: "red",
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
};
function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tab" component={TabNavigator} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Route;
