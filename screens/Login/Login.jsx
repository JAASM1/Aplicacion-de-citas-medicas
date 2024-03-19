import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://192.168.1.75:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Error en la solicitud");
      }



      // Navegar a la pantalla de inicio o cualquier otra pantalla deseada
      navigation.navigate("Tabs", { screen: "Home" });
    } catch (error) {
      console.error(error);
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View className="container w-full h-screen p-2 bg-[#f8f8f8]">
      <Text className="font-semibold text-2xl my-12 mx-6">Bienvenido</Text>
      <View className="flex flex-col space-y-6">
        <TextInput
          placeholder="Correo electrónico"
          className="mx-6 h-16 rounded-md px-4 bg-white"
          value={email}
          onChangeText={(text) => setEmail(text)}
        ></TextInput>
        <TextInput
          placeholder="Contraseña"
          className="mx-6 h-16 rounded-md px-4 bg-white relative"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={(text) => setPassword(text)}
        ></TextInput>
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          className="absolute right-12 top-[45%]"
        >
          <MaterialIcons
            name={showPassword ? "visibility-off" : "visibility"}
            size={24}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Olvidé mi contraseña")}
        >
          <Text className="text-[#18A0FB] ml-52">Olvidé mi contraseña</Text>
        </TouchableOpacity>
      </View>
      <View className="mt-12 flex flex-col justify-center items-center">
        <TouchableOpacity
          onPress={handleLogin}
          className="bg-[#18A0FB] rounded-2xl mx-6 h-16 w-[80%] flex justify-center items-center"
        >
          <Text className="text-center text-white text-lg font-semibold">
            Iniciar sesión
          </Text>
        </TouchableOpacity>
        <View className="flex flex-row mt-2">
          <Text>¿No tienes una cuenta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Registrarse")}>
            <Text className="ml-1 text-[#18A0FB]">Crear una cuenta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
