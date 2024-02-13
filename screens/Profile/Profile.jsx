import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import me from "../../assets/me.jpg";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View className="bg-[#18A0FB] h-screen">
      <View className="p-4 flex flex-row justify-between items-center">
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <AntDesign name="arrowleft" size={32} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-lg font-bold">Tu perfil</Text>
        <AntDesign name="edit" size={32} color="white" />
      </View>
      <View className="flex justify-center mt-6 items-center">
        <Image source={me} className="h-[110px] w-[110px] rounded-md" />
      </View>
      <View
        className="p-4 bg-white h-full mt-8"
        style={{ borderTopLeftRadius: 56, borderTopRightRadius: 56 }}
      >
        <View className="flex justify-center items-center">
          <Text className="text-xl font-semibold">Pipa Peguero</Text>
          <Text className="opacity-50">Paciente</Text>
        </View>
        <View className="mt-8">
          <Text className="text-lg">Sobre Mí</Text>
          <Text className="opacity-50">
            La fan más emocionalmente estable de Taylor Swift y Kanye West.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;
