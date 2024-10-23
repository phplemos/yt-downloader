import { router } from "expo-router";
import { Text, View } from "react-native";
import LoginCard from "../components/LoginCard";
import { useSession } from "../context/loginContext";

export default function SignIn() {
  return (
    <View >
      <LoginCard />
    </View>
  );
}
