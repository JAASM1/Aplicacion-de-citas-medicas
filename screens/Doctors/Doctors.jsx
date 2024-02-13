import { View, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { AntDesign, FontAwesome6 } from "@expo/vector-icons";

import Doctora from "../../assets/Doctora.jpg";

const Doctors = () => {
  const navigation = useNavigation();

  return (
    <View className="bg-[#f8f8f8] h-screen">
      <StatusBar backgroundColor='#fff' barStyle='dark-content'/>
      <View className="m-5 mt-5 space-y-10">
        <View className="space-y-3">
          <Text className=" font-light text-lg">Especialistas</Text>
          <View>
            <TouchableOpacity
            onPress={()=>navigation.navigate("Detalles del doctor")}
             className="bg-white flex-row space-x-3 rounded-xl">
              <Image
                source={Doctora}
                className="w-[75px] h-[75px] rounded-b-2xl rounded-l-2xl"
              />
              <View className="flex-row space-x-3">
                <View className="space-y-2">
                  <Text className="text-xl font-semibold">
                    Dr. Mahbuba Islam
                  </Text>
                  <Text className=" text-sm font-light text-[#979797]">
                    Cardiologist- Cumilla Madical Collage
                  </Text>
                </View>
                <View className="flex h-full w-full mt-12">
                  <FontAwesome6 name="circle-plus" size={24} color="#18A0FB" />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Doctors;
