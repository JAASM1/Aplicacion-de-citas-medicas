import { View, Text, Image } from 'react-native'
import React from 'react'
import me from '../../assets/me.jpg'

const Home = () => {
  return (
    <View className='p-6'>
      <View className='flex flex-row gap-2'>
        <Image source={me} className='rounded-full h-[42px] w-[42px]'/>
        <View className='flex'>
          <Text className='text-4xl'>Hola Pipa</Text>
          <Text className='text-sm'>Empecemos</Text>
        </View>
      </View>
    </View>
  )
}

export default Home