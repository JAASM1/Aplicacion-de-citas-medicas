import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

function ForgotPassword() {

 const [email, setEmail] = useState("")
 const navigation = useNavigation()

  return (
    <View className="container w-full h-screen">
        <Text className="text-lg mx-6 mt-12 ">Ingresa tu correo electrónico para recuperar tu contraseña</Text>
        <View className="mt-12 flex flex-col justify-center items-center space-y-4">
            <TextInput
                placeholder='xxxx@gmail.com'
                value={email}
                onChangeText={(text) => setEmail(text)}
                className="w-[80%] mx-6 h-16 bg-white p-4 rounded-md"
            ></TextInput>
            <TouchableOpacity 
                className="bg-[#18A0FB] rounded-2xl mx-6 h-16 w-[80%] flex justify-center items-center"
                onPress={() => navigation.navigate("Código de verificación")}
            >
                <Text className="text-white font-bold">Enviar el código</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default ForgotPassword