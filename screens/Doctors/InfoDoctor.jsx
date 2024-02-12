import {
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import img from "../../assets/Doctora.jpg";
import imgReseña from "../../assets/imgReseña.jpg";

import { AntDesign, FontAwesome6 } from "@expo/vector-icons";

//<FontAwesome6 name="crown" size={20} color="white" />
//<AntDesign name="star" size={20} color="white" />

const InfoDoctor = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 items-center">
      <ScrollView>
        <View className="h-screen bg-[#18A0FB] flex-col items-center">
          <StatusBar backgroundColor="#18A0FB" barStyle="light-content" />
          <View className="flex-col items-center gap-7">
            <View className="border-2 rounded-xl border-white">
              <Image source={img} className="w-[120px] h-[120px] rounded-lg" />
            </View>
            <View className="flex-row space-x-10">
              <View className="flex-col items-center ">
                <View className="bg-[#39B0FF] p-4 rounded-full">
                  <AntDesign name="heart" size={20} color="white" />
                </View>
                <Text className="text-lg text-white font-semibold">150+</Text>
                <Text className="text-xs text-white">Pacientes</Text>
              </View>
              <View className="flex-col items-center ">
                <View className="bg-[#39B0FF] p-4 rounded-full">
                  <FontAwesome6 name="crown" size={20} color="white" />
                </View>
                <Text className="text-lg text-white font-semibold">
                  10 años
                </Text>
                <Text className="text-xs text-white">Experiencia</Text>
              </View>
              <View className="flex-col items-center ">
                <View className="bg-[#39B0FF] p-4 rounded-full">
                  <AntDesign name="star" size={20} color="white" />
                </View>
                <Text className="text-lg text-white font-semibold">4.9</Text>
                <Text className="text-xs text-white">Rating</Text>
              </View>
            </View>
          </View>
          {/* Parte que al scrollear cubra toda la pantalla */}
          <View className="bg-white h-screen w-full rounded-t-[30px] mt-7 ">
            <View className="flex-col w-full items-center mt-5 space-y-1">
              <Text className="text-2xl font-bold">Dr. Ersa Scarlet</Text>
              <Text className="text-[10px] font-light">
                Cardiologist- Cumilla Madical Collage
              </Text>
              <View className="flex-row space-x-2">
                <AntDesign name="star" size={20} color="#FEC413" />
                <AntDesign name="star" size={20} color="#FEC413" />
                <AntDesign name="star" size={20} color="#FEC413" />
                <AntDesign name="star" size={20} color="#FEC413" />
                <AntDesign name="star" size={20} color="#FEC413" />
              </View>
            </View>

            <View className="flex-col mx-6 mt-5">
              <Text className="text-lg font-light">Sobre mí</Text>
              <Text className="font-light text-gray-700 text-[15px]">
                Cardiólogo especialista más destacado del Hospital del Colegio
                Médico de Cumilla, en Cumilla. He recibido varios premios por mi
                maravillosa contribución en mi campo. Estoy disponible para
                consultas privadas.
              </Text>
            </View>

            <View className="flex-col mx-6 mt-20 space-y-5">
              <View className="flex-row justify-between">
                <Text className="text-base font-semibold">Reseñas</Text>
                <Text className=" text-base font-light text-[#979797]">
                  Última hace 2 días
                </Text>
              </View>

              <View className="space-y-2">
                <View className="flex-row items-center space-x-2">
                  <Image
                    source={imgReseña}
                    className="w-[45px] h-[45px] rounded-full"
                  />
                  <Text className="font-semibold">Juan Carlos Bodoque</Text>
                </View>
                <View className="flex-row space-x-2">
                  <AntDesign name="star" size={20} color="#FEC413" />
                  <AntDesign name="star" size={20} color="#FEC413" />
                  <AntDesign name="star" size={20} color="#FEC413" />
                  <AntDesign name="star" size={20} color="#FEC413" />
                  <AntDesign name="star" size={20} color="#FEC413" />
                </View>
                <Text className="font-light">
                  “Muy buena doctora, me gustó su atención y clínica muy biena,
                  es un gran doctora.”
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* Boton de agendar citas */}
      <View className=' absolute bottom-0 pb-2 w-full items-center'>
        <TouchableOpacity onPress={()=>navigation.navigate('Agendar cita')} className="bg-[#18A0FB] justify-center w-[300px] h-[50px] rounded-xl">
          <Text className="text-lg text-white self-center">Agendar cita</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InfoDoctor;
