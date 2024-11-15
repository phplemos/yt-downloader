import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Linking,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const DownloadCard: React.FC = () => {
  const [url, setUrl] = useState("");

  const handleDownload = async () => {
    if (!url) {
      alert("Por favor, insira uma URL válida.");
      return;
    }

    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        alert("Não foi possível abrir esta URL: " + url);
      }
    } catch (error) {
      alert("Erro ao tentar abrir a URL: " + error);
    }
  };

  return (
    <View className="bg-white rounded-lg p-4 shadow-xl">
      <Text className="text-lg font-bold mb-2">Download de Arquivo</Text>
      <TextInput
        className="border !border-gray-300 rounded-md p-2 mb-4"
        placeholder="Digite a URL do arquivo"
        value={url}
        onChangeText={setUrl}
        autoCapitalize="none"
        keyboardType="url"
        accessibilityLabel="Campo de entrada para URL do arquivo"
      />
      <TouchableOpacity
        className="!bg-blue-500 rounded-full py-2 px-4 flex-row items-center justify-center"
        onPress={handleDownload}
        accessibilityLabel="Baixar arquivo"
      >
        <Ionicons name="download-outline" size={24} color="white" />
        <Text className="text-white font-bold ml-2">Baixar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DownloadCard;
