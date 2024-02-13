import React from "react";
import { Text, View, TextInput } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

function VerifyCode() {
  const [data, setData] = useState({
    email: "xxxx@gmail.com",
  });
  
  const navigation = useNavigation()

  return (
    <View className="container h-screen w-full flex flex-col items-center">
      <Text className="mx-6 my-12 text-lg">
        <Text>Ingresa el código que te llegó a la dirección de correo </Text>
        <Text className="text-[#18A0FB]">{data.email}</Text>
      </Text>
      <View className="flex flex-row space-x-2">
        <TextInput className="bg-white rounded-md w-16 h-16 text-center text-lg"></TextInput>
        <TextInput className="bg-white rounded-md w-16 h-16 text-center text-lg"></TextInput>
        <TextInput className="bg-white rounded-md w-16 h-16 text-center text-lg"></TextInput>
        <TextInput className="bg-white rounded-md w-16 h-16 text-center text-lg"></TextInput>
      </View>
      <View className="flex flex-col space-y-2 w-full items-end mr-32 mt-4">
            <Text>¿No te llegó el código?</Text>
            <TouchableOpacity>
                <Text className="text-[#18A0FB]">Inténtalo de nuevo</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity
            className="bg-[#18A0FB] rounded-2xl mx-6 h-16 w-64 mt-12 flex justify-center items-center"
            onPress={() => navigation.navigate("Restablecer contraseña")}
        >
            <Text className="text-white text-lg">Confirmar</Text>
        </TouchableOpacity>
    </View>
  );
}

export default VerifyCode;
