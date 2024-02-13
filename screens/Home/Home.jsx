import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import me from "../../assets/me.jpg";
import { FontAwesome5 } from "@expo/vector-icons";
import citas from "../../assets/citas_h.png";
import doctor from "../../assets/doctor_h.png";
import pastillas from "../../assets/pastillas_h.png";
import Doctor from "../../assets/doctor-h.png";
import recetas from "../../assets/recetas_h.png";

const Home = () => {
  return (
    <View className="p-4">
      <View className="flex flex-row items-center justify-between">
        <View className="flex flex-row gap-2">
          <Image source={me} className="rounded-full h-14 w-14" />
          <View className="flex">
            <Text className="text-2xl font-semibold">Hola Pipa</Text>
            <Text className="text-sm">Empecemos</Text>
          </View>
        </View>
        <View>
          <FontAwesome5 name="bell" size={32} color="black" />
        </View>
      </View>

      <View className="flex flex-row items-center bg-white h-14 w-full rounded-full px-6 mt-4">
        <FontAwesome5 name="search" size={12} color="grey" />
        <Text className="ml-2 opacity-20">Buscar...</Text>
      </View>

      <ScrollView
        horizontal={true}
        className="gap-2 mt-3"
        showsHorizontalScrollIndicator={false}
      >
        <View className="h-[75px] w-[110px] bg-white rounded-md flex flex-col items-center justify-center">
          <Image source={doctor} className="h-8 w-8" />
          <Text className="text-sm opacity-20">Doctor</Text>
        </View>
        <View className="h-[75px] w-[110px] bg-white rounded-md flex flex-col items-center justify-center">
          <Image source={citas} className="h-8 w-8" />
          <Text className="text-sm opacity-20">Citas</Text>
        </View>
        <View className="h-[75px] w-[110px] bg-white rounded-md flex flex-col items-center justify-center">
          <Image source={recetas} className="h-8 w-8" />
          <Text className="text-sm opacity-20">Recetas</Text>
        </View>
        <View className="h-[75px] w-[110px] bg-white rounded-md flex flex-col items-center justify-center">
          <Image source={pastillas} className="h-8 w-8" />
          <Text className="text-sm opacity-20">Medicamentos</Text>
        </View>
      </ScrollView>

      <View className="h-[150px] w-full bg-[#18A0FB] rounded-md mt-4 p-4">
        <Text className="text-xl font-bold text-white">Eventos Próximos</Text>
        <Text className="text-white">
          Pipa, no olvides tu cita con el doctor el día:
        </Text>
        <Text className="text-white opacity-20">19 de febrero del 2024</Text>
        <TouchableOpacity className="bg-[#39B0FF] rounded-md flex items-center justify-center w-1/2 mt-4 h-6">
          <Text className="text-white">Ver calendario</Text>
        </TouchableOpacity>
      </View>

      <Text className="font-semibold text-2xl mt-4">Nuevos especialistas</Text>

      <ScrollView
        horizontal={true}
        className="gap-2 mt-2"
        showsHorizontalScrollIndicator={false}
      >
        <View className='h-[180px] w-[300px] bg-white rounded-md flex flex-row p-4'>
          <Image source={Doctor} className='w-[95px]' />
          <View className=''>
            <Text className='text-lg'>Dr. Alex Sánchez</Text>
            <Text className='opacity-50 text-xs'>¿Has tenido una cita con él?</Text>
            <TouchableOpacity className='flex items-center justify-center h-8 rounded-md mt-6 bg-[#18A0FB]'>
              <Text className='text-white opacity-100 font-semibold'>Calificalo</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className='h-[180px] w-[300px] bg-white rounded-md flex flex-row p-4'>
          <Image source={Doctor} className='w-[95px]' />
          <View className=''>
            <Text className='text-lg'>Dr. Alex Sánchez</Text>
            <Text className='opacity-50 text-xs'>¿Has tenido una cita con él?</Text>
            <TouchableOpacity className='flex items-center justify-center h-8 rounded-md mt-6 bg-[#18A0FB]'>
              <Text className='text-white opacity-100 font-semibold'>Calificalo</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className='h-[180px] w-[300px] bg-white rounded-md flex flex-row p-4'>
          <Image source={Doctor} className='w-[95px]' />
          <View className=''>
            <Text className='text-lg'>Dr. Alex Sánchez</Text>
            <Text className='opacity-50 text-xs'>¿Has tenido una cita con él?</Text>
            <TouchableOpacity className='flex items-center justify-center h-8 rounded-md mt-6 bg-[#18A0FB]'>
              <Text className='text-white opacity-100 font-semibold'>Calificalo</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className='h-[180px] w-[300px] bg-white rounded-md flex flex-row p-4'>
          <Image source={Doctor} className='w-[95px]' />
          <View className=''>
            <Text className='text-lg'>Dr. Alex Sánchez</Text>
            <Text className='opacity-50 text-xs'>¿Has tenido una cita con él?</Text>
            <TouchableOpacity className='flex items-center justify-center h-8 rounded-md mt-6 bg-[#18A0FB]'>
              <Text className='text-white opacity-100 font-semibold'>Calificalo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
