import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function RecoverPassword() {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);

    return (
        <View className="container w-full h-screen">
            <Text className="px-6 text-lg py-12">Ingresa una nueva contraseña</Text>
            <View className="w-inherit mx-6 flex flex-col space-y-4 ">
                <TextInput
                    placeholder="Contraseña"
                    className="mx-6 h-16 rounded-md px-4 bg-white relative"
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    className="absolute right-12 top-[3%]"
                >
                    <MaterialIcons
                        name={showPassword ? 'visibility-off' : 'visibility'}
                        size={24}
                        color="black"
                    />
                </TouchableOpacity>
                <TextInput
                    placeholder="Confirma tu contraseña"
                    className="mx-6 h-16 rounded-md px-4 bg-white relative"
                    secureTextEntry={!showNewPassword}
                    value={newPassword}
                    onChangeText={(text) => setNewPassword(text)}
                />
                <TouchableOpacity
                    onPress={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-12 top-[37%]"
                >
                    <MaterialIcons
                        name={showNewPassword ? 'visibility-off' : 'visibility'}
                        size={24}
                        color="black"
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity className="bg-[#18A0FB] mt-12 rounded-xl h-16 mx-4 flex items-center justify-center">
                    <Text className="text-white text-lg font-semibold">Confirmar</Text>
                </TouchableOpacity>
        </View>
    );
}

export default RecoverPassword;
