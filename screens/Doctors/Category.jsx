import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const images = [
  {
    id: 1,
    name: "Pediatria",
    uri: require("../../assets/ImgDoctors/pediatra.png"),
  },
  {
    id: 2,
    name: "Urologia",
    uri: require("../../assets/ImgDoctors/rinones.png"),
  },
  {
    id: 3,
    name: "infecciones",
    uri: require("../../assets/ImgDoctors/virus.png"),
  },
  {
    id: 4,
    name: "Medicina interna",
    uri: require("../../assets/ImgDoctors/fisiologia.png"),
  },
  {
    id: 5,
    name: "Cardiologia",
    uri: require("../../assets/ImgDoctors/cardiologia.png"),
  },
  {
    id: 6,
    name: "Obstetricia",
    uri: require("../../assets/ImgDoctors/obstetricia.png"),
  },
  { id: 7, name: "ENT", uri: require("../../assets/ImgDoctors/ENT.png") },
  {
    id: 8,
    name: "Dermatologia",
    uri: require("../../assets/ImgDoctors/dermatologia.png"),
  },
  // Agrega más imágenes según sea necesario
];

const Category = () => {
  const navigation = useNavigation();
  return (
    <ScrollView className=" bg-[#f8f8f8] h-screen w-full">
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      <Text className="text-2xl font-light mx-6">
        ¿Qué tipo de doctor estás buscando?
      </Text>
      <View className="">
        <View className="flex-row flex-wrap justify-center gap-5 mt-3">
          {images.map((imagen) => (
            <View key={imagen.id} className="items-center space-y-1 w-[40%]">
              <Image source={imagen.uri} className="w-[80px] h-[80px]" />
              <Text className="text-sm font-medium capitalize">
                {imagen.name}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Doctores")}
        className="bg-[#18A0FB] justify-center w-[350px] h-[50px] rounded-xl mx-5 mt-14"
      >
        <Text className="self-center text-white text-lg font-medium">
          Continuar
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Category;
