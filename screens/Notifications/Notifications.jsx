import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


const Notifications = () => {
  const navigation = useNavigation();

  return (
    <View className='p-4'>
      <View className="flex flex-row items-center mt-2 relative">
        <TouchableOpacity className='absolute' onPress={() => navigation.navigate("Home")}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text className='mx-auto font-bold text-2xl'>Notificaciones</Text>
      </View>

      <View className='mt-4'>
        <Text className='text-lg'>
          Hoy - 16 feb, 2024
        </Text>
        <View className='flex flex-row mt-2'>
          <View className='bg-[#18A0FB] rounded-md w-12 h-12 flex items-center justify-center mr-2'>
            <AntDesign name="calendar" size={32} color="white" />
          </View>
          <View>
            <Text className='font-semibold'>Tienes una cita con el doctor Sánchez a las{'\n'}19:00 mañana</Text>
            <Text className='font-semibold text-[#18A0FB]'>Ahora</Text>
          </View>
        </View>
        <View className='flex flex-row mt-2'>
          <View className='bg-[#FFA873] rounded-md w-12 h-12 flex items-center justify-center mr-2'>
            <AntDesign name="calendar" size={32} color="white" />
          </View>
          <View>
            <Text className='font-semibold'>Tienes una cita con el doctor Sánchez a las{'\n'}19:00 mañana</Text>
            <Text className='font-semibold text-[#18A0FB]'>Ahora</Text>
          </View>
        </View>
        <View className='flex flex-row mt-2'>
          <View className='bg-[#EEEEFB] rounded-md w-12 h-12 flex items-center justify-center mr-2'>
            <AntDesign name="calendar" size={32} color="white" />
          </View>
          <View>
            <Text className='font-semibold'>Tienes una cita con el doctor Sánchez a las{'\n'}19:00 mañana</Text>
            <Text className='font-semibold text-[#18A0FB]'>Ahora</Text>
          </View>
        </View>
      </View>

      <View className='mt-4'>
        <Text className='text-lg'>
          Ayer - 15 feb, 2024
        </Text>
        <View className='flex flex-row mt-2'>
          <View className='bg-[#EEEEFB] rounded-md w-12 h-12 flex items-center justify-center mr-2'>
            <AntDesign name="calendar" size={32} color="white" />
          </View>
          <View>
            <Text className='font-semibold'>Tienes una cita con el doctor Sánchez a las{'\n'}19:00 mañana</Text>
            <Text className='font-semibold text-[#18A0FB]'>Ahora</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Notifications;
