import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useSession } from "../../context/loginContext";

interface DrawerItemProps {
  icon: string;
  label: string;
  onPress: () => void;
}

const DrawerItem: React.FC<DrawerItemProps> = ({ icon, label, onPress }) => (
  <TouchableOpacity
    className="flex-row items-center px-4 py-3"
    onPress={onPress}
  >
    <Ionicons name={icon as any} size={24} color="#333" />
    <Text className="ml-3 text-base text-gray-800">{label}</Text>
  </TouchableOpacity>
);

interface CustomDrawerProps {
  navigation?: any; // Você pode substituir 'any' pelo tipo correto do seu navigation
  userPhoto?: string;
  userEmail?: string;
}

const CustomDrawer: React.FC<CustomDrawerProps> = ({
  navigation,
  userPhoto,
  userEmail,
}) => {
  const { signOut } = useSession();
  const handleLogout = () => {
    // Implemente sua lógica de logout aqui
    console.log("Logout");
  };

  return (
    <View className="flex-1 bg-white">
      <ScrollView className="flex-1 pt-16 pb-8">
        {/* Seção do usuário */}
        <View className="flex-row p-4 border-b border-gray-200">
          <Image
            source={{
              uri: "https://lh3.googleusercontent.com/a/ACg8ocI4w1Yq9bkg8nYiE-ChVBTKUYEWzaB01_1JkAdokOrXpoTOodw=s288-c-no",
            }}
            className="w-16 h-16 rounded-full mb-2"
          />
          <View>
            <Text className="text-base font-regular text-gray-800">
              Pedro Pinheiro
            </Text>
            <Text className="text-base font-semibold text-gray-800">
              phplemos.dev@gmail.com
            </Text>
          </View>
        </View>

        {/* Botões de navegação */}
        <View className="pt-12 gap-4">
          <DrawerItem
            icon="home-outline"
            label="Início"
            onPress={() => router.replace("/")}
          />
          <DrawerItem
            icon="search-outline"
            label="Pesquisar"
            onPress={() => navigation.navigate("Search")}
          />
          <DrawerItem
            icon="heart-outline"
            label="Favoritos"
            onPress={() => navigation.navigate("Favorites")}
          />
          <DrawerItem
            icon="settings-outline"
            label="Configurações"
            onPress={() => navigation.navigate("Settings")}
          />
        </View>
      </ScrollView>

      {/* Botão de Logout */}
      <View className="border-t border-gray-200 p-4">
        <TouchableOpacity
          className="flex-row items-center justify-center bg-red-500 px-4 py-3 rounded-md"
          onPress={signOut}
        >
          <Ionicons name="log-out-outline" size={24} color="white" />
          <Text className="ml-3 text-base font-semibold text-white">
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
