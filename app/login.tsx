import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
export default function Login() {
  const params = useLocalSearchParams();
  return (
    <>
      <View>
        <Text>Pagina Login!</Text>
      </View>
    </>
  );
}
