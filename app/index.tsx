import { View, Text, SafeAreaView } from "react-native";
import DownloadCard from "@/components/DownloadCard";
import {
  ExpoRouter,
  Stack,
  useLocalSearchParams,
  useRouter,
} from "expo-router";
import Drawer from "expo-router/drawer";

export default function Home() {
  return (
    <>
      <SafeAreaView className="flex-col h-full p-4">
        
        <View className="h-full  justify-beetwen">
          <View className="h-1/3 items-center">
            <Text className="text-2xl font-bold pt-12 text-gray-800 mb-4">
              Faça o download do seu video!
            </Text>
          </View>
          <DownloadCard />
        </View>
      </SafeAreaView>
    </>
  );
}
