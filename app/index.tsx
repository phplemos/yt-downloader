import { View, Text, SafeAreaView } from "react-native";
import DownloadCard from "@/components/DownloadCard";

export default function Home() {
  return (
    <>
      <SafeAreaView className="flex-1 justify-between p-4">
        <DownloadCard />
      </SafeAreaView>
    </>
  );
}
