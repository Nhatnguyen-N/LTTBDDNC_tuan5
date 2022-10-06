import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import Tiki from "./screens/Tiki";
import GridView from "./screens/GridView";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerTitle: (props) => <LogoTitle {...props} />,
              title: "Chat",
              headerStyle: {
                backgroundColor: "#1BA9FF",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              headerTitleAlign: "center",
            }}
            name="Tiki"
            component={Tiki}
          />
          <Stack.Screen
            options={{
              headerTitle: (props) => <LogoTitle {...props} />,
              title: "Chat",
              headerStyle: {
                backgroundColor: "#1BA9FF",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              headerTitleAlign: "center",
            }}
            name="GridView"
            component={GridView}
          />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}

function LogoTitle() {
  return <Image source={require("./assets/Vector.png")} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
