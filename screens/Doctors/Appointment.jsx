import {
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Pressable,
  TextInput,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import img from "../../assets/Doctora.jpg";

import { AntDesign, FontAwesome6 } from "@expo/vector-icons";

const diasSemana = [
  { dia: "Lun", numero: 10 },
  { dia: "Mar", numero: 11 },
  { dia: "Mié", numero: 12 },
  { dia: "Jue", numero: 13 },
  { dia: "Vie", numero: 14 },
  { dia: "Sáb", numero: 15 },
];
const horasManana = [
  { hora: "10:30 AM" },
  { hora: "11:00 AM" },
  { hora: "11:30 AM" },
];
const horasTarde = [
  { hora: "02:30 PM" },
  { hora: "03:00 PM" },
  { hora: "03:30 PM" },
  { hora: "04:00 PM" },
  { hora: "04:30 PM" },
  { hora: "05:00 PM" },
];

const getColor = (selected, index) => {
  return selected === index ? "#18A0FB" : "#fff";
};
const getTextColor = (selected, index) => {
  return getColor(selected, index) === "#18A0FB" ? "white" : "#979797";
};

const Appointment = () => {
  const navigation = useNavigation();

  const [selectedOptionDay, setSelectedOptionDay] = useState(null);
  const [selectedOptionMorTime, setSelectedOptionMorTime] = useState(null);
  const [selectedOptionEvTime, setSelectedOptionEvTime] = useState(null);
  const [text, setText] = useState("");

  const handlePressDay = (index) => {
    if (selectedOptionDay === index) {
      // Si ya está seleccionado, deselecciona
      setSelectedOptionDay(null);
    } else {
      // Si no está seleccionado, selecciona
      setSelectedOptionDay(index);
    }
  };
  const handlePressMorTime = (index) => {
    if (selectedOptionMorTime === index) {
      // Si ya está seleccionado, deselecciona
      setSelectedOptionMorTime(null);
    } else {
      // Si no está seleccionado, selecciona
      setSelectedOptionMorTime(index);
    }
  };
  const handlePressEvTime = (index) => {
    if (selectedOptionEvTime === index) {
      // Si ya está seleccionado, deselecciona
      setSelectedOptionEvTime(null);
    } else {
      // Si no está seleccionado, selecciona
      setSelectedOptionEvTime(index);
    }
  };

  return (
    <View className="flex-1 w-full bg-[#18A0FB]">
      <ScrollView className="flex-col">
        <View className=" bg-[#18A0FB] flex-col items-center pb-6">
          <StatusBar backgroundColor="#18A0FB" barStyle="light-content" />
          <View className="flex-col items-center gap-7">
            <View className="border-2 rounded-xl border-white">
              <Image source={img} className="w-[120px] h-[120px] rounded-lg" />
            </View>
            {/* Estadisticas del doctor */}
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
          {/* Contenedor que al scrollear cubra toda la pantalla */}
        </View>
        <View className="bg-[#f8f8f8] rounded-t-[30px]">
          <View className="flex-col w-full mt-5 space-y-1 mx-5">
            <Text className="text-lg font-medium">Febrero</Text>
          </View>

          <View className="flex-row w-full justify-center space-x-5 mt-5">
            {diasSemana.map((dia, index) => (
              <Pressable
                key={index}
                className="w-[40px] h-[60px] items-center justify-center rounded-tl-xl rounded-br-xl"
                style={{
                  backgroundColor: getColor(selectedOptionDay, index),
                }}
                onPress={() => handlePressDay(index)}
              >
                <Text
                  className="text-sm font-medium"
                  style={{
                    color:
                      getColor(selectedOptionDay, index) === "#18A0FB"
                        ? "white"
                        : "#000",
                  }}
                >
                  {dia.dia}
                </Text>
                <Text
                  className="text-lg"
                  style={{ color: getTextColor(selectedOptionDay, index) }}
                >
                  {dia.numero}
                </Text>
              </Pressable>
            ))}
          </View>
          <View className="flex-col w-full mt-5 space-y-1 mx-5">
            <Text className="text-lg font-medium">
              Horas de antención en la mañana
            </Text>
          </View>

          <View className="flex-row w-full justify-center space-x-5 mt-5">
            {horasManana.map((hora, index) => (
              <Pressable
                key={index}
                style={{
                  backgroundColor: getColor(selectedOptionMorTime, index),
                }}
                onPress={() => handlePressMorTime(index)}
                className=" w-[100px] h-[40px] items-center justify-center rounded-tl-xl rounded-br-xl"
              >
                <Text
                  style={{ color: getTextColor(selectedOptionMorTime, index) }}
                  className="text-sm font-medium"
                >
                  {hora.hora}
                </Text>
              </Pressable>
            ))}
          </View>

          <View className="flex-col w-full mt-5 space-y-1 mx-5">
            <Text className="text-lg font-medium">
              Horas de antención en la tarde
            </Text>
          </View>

          <View className="flex-row flex-wrap justify-center mt-5 mx-5">
            {horasTarde.map((hora, index) => (
              <Pressable
                key={index}
                style={{
                  backgroundColor: getColor(selectedOptionEvTime, index),
                }}
                onPress={() => handlePressEvTime(index)}
                className="w-[100px] h-[40px] mb-4 mx-2 items-center justify-center rounded-tl-xl rounded-br-xl"
              >
                <Text
                  style={{ color: getTextColor(selectedOptionEvTime, index) }}
                  className="text-sm font-medium"
                >
                  {hora.hora}
                </Text>
              </Pressable>
            ))}
          </View>

          <View className="flex-col w-full mt-5 space-y-1 mx-5">
            <Text className="text-lg font-medium">Razón de la cita</Text>
          </View>
          {/* Razon de la cita */}
          <View className="mx-5">
            <TextInput
              multiline
              numberOfLines={10}
              placeholder="Escribe aqui..."
              style={{ padding: 10, textAlignVertical: "top" }}
              className="bg-[#e3e3e3] rounded-tl-xl rounded-br-xl"
            />
          </View>

          {/* Boton para agendar cita */}
          <View className="w-full items-center my-5">
            <TouchableOpacity onPress={()=>navigation.navigate("Doctores")} className="bg-[#18A0FB] justify-center w-[350px] h-[50px] rounded-xl">
              <Text className="text-lg text-white self-center">
                Agendar cita
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      {/* Boton de agendar citas */}
    </View>
  );
};

export default Appointment;
