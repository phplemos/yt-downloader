import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";
// Import your global CSS file
import "../constants/global.css";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Drawer from "expo-router/drawer";
import CustomDrawer from "@/components/CustomDrawer";
import { useState } from "react";

// Usuario não logado
function StackLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="login" />
      </Stack>
    </>
  );
}

// Usuario logado
function DrawerLayout({ children }: any) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => <CustomDrawer />}
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#439cee",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "regular",
          },
        }}
      >
        <Drawer.Screen
          name="home" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Home",
            title: "Inicio",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

// Layout principal
export default function RootLayout(children: any) {
  return <StackLayout />;
}
