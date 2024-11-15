import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Switch } from "react-native";
import { Formik } from "formik";
import "@/constants/global.css";
import { useSession } from "@/context/loginContext";

export default function LoginCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const { signIn } = useSession();

  return (
    <View className="min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <View className="w11_12 max-w-md space-y-8 bg-white p-8 rounded-xl shadow">
        <View>
          <Text className="text-center text-3xl font-extrabold text-gray-900">
            Faça o login com sua conta!{" "}
          </Text>
        </View>
        <Formik
          initialValues={{ email: "", password: "", rememberMe: false }}
          onSubmit={(values) => {
            signIn(values.email, values.password);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => {
            return (
              <View className="mt-8 space-y-6">
                <View className="rounded-md  gap-2 ">
                  <TextInput
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md bg-white"
                    placeholder="Email"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />

                  <View className="relative">
                    <TextInput
                      className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md bg-white"
                      placeholder="Senha"
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      value={values.password}
                      secureTextEntry={!showPassword}
                    />
                  </View>
                </View>

                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center">
                    <Switch
                      trackColor={{ false: "#d1d5db", true: "#4f46e5" }}
                      thumbColor={isEnabled ? "#ffffff" : "#f4f4f5"}
                      onValueChange={toggleSwitch}
                      value={isEnabled}
                    />
                    <Text className="ml-2 text-sm text-gray-900">
                      Lembrar-me
                    </Text>
                  </View>

                  <TouchableOpacity>
                    <Text className="text-sm font-medium text-indigo-600">
                      Esqueceu a senha?
                    </Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  className="w-full flex-row justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600"
                  onPress={() => handleSubmit()}
                >
                  <Text className="text-white font-medium">Entrar</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </Formik>
      </View>
    </View>
  );
}
