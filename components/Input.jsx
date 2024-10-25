import { View, Text, TextInput, Pressable, Image } from 'react-native'
import React, {useState} from 'react'

const Input = ({ label, placeholder, isPassword, value, onChangeText }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const onEyePress = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }


  return (
    <View className="px-4 py-2"> 
      <Text className="text-blue mt-4 font-[500]">{label}</Text>
      <View className="mt-2 space-y-2">
        <View className="border border-grey rounded-xl p-4 flex-row items-center"> 
          <TextInput 
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={isPassword && !isPasswordVisible}
            className="w-full flex-1"
            placeholder={placeholder}
          />
          {
            isPassword? (
          <Pressable onPress={onEyePress}>
              <Image className="w-6 h-6 mx-4" source={isPasswordVisible ? require('../assets/eye.png') : require
                ('../assets/eye_closed.png')}/>
          </Pressable>
            ) : null
          }
        </View>
      </View>
    </View>
  )
}

export default Input
