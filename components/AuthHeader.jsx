import { View, Text , Image, Pressable} from 'react-native'
import React from 'react'

const AuthHeader = ({title, onBackPress}) => {
  return (
    <View className="flex-row items-center" >
            <Pressable onPress= {onBackPress}>
                <Image  className="w-18 h-18"source={require('../assets/auth_back.png')}/>
            </Pressable>
      <Text className="text-blue text-[26px] font-medium px-5">{title}</Text>
    </View>
  )
}

export default AuthHeader