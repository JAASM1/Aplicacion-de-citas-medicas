import { View, Text, Image } from 'react-native'
import React from 'react'
import me from '../../assets/me.jpg'

const Home = () => {
  return (
    <View>
      <View className='flex flex-row'>
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