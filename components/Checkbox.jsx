import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'

const Checkbox = ({checked, onCheck}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} className="border-grey border w-6 h-6 rounded-sm" onPress={() => onCheck(!checked)}>
        {checked ? (
    <View className="bg-gray-500 w-full h-full justify-center items-center">
      <Image className="w-6 h-6" resizeMode="contain" source={require('../assets/Check.png')}/>
    </View>
        ) : null}
    </TouchableOpacity>
  )
}

export default Checkbox