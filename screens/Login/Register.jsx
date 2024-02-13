import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation()

  return (
    <View className="container w-full h-screen bg-[#f8f8f8]">
      <Text className="font-semibold text-2xl my-12 mx-6">¡Crea una cuenta!</Text>
      <View className="flex flex-col space-y-6">
        <TextInput
          placeholder="Nombre"
          className="mx-6 h-16 rounded-md px-4 bg-white"
          value={name}
          onChangeText={(text) => setName(text)}
        ></TextInput>
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
          className="absolute right-12 top-[73%]"
        >
          <MaterialIcons
            name={showPassword ? "visibility-off" : "visibility"}
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <View className="mt-12 flex flex-col justify-center items-center">
        <TouchableOpacity
            className="bg-[#18A0FB] rounded-2xl mx-6 h-16 w-[80%] flex justify-center items-center"
        >
            <Text className="text-center text-white text-lg font-semibold">Crear cuenta</Text>
        </TouchableOpacity>
        <View className="flex flex-row mt-2">
            <Text>¿Ya tienes una cuenta?</Text>
            <TouchableOpacity
                onPress={()=> navigation.navigate("Iniciar sesion")}
            >
                <Text className="ml-1 text-[#18A0FB]">Iniciar sesión</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Register;
