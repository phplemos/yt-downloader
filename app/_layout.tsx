import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";
// Import your global CSS file
import "../constants/global.css";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Drawer from "expo-router/drawer";
import CustomDrawer from "@/components/CustomDrawer";

export default function RootLayout(children: any) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => <CustomDrawer />}
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Home",
            title: "overview",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
