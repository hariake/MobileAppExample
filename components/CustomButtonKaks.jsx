import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButtonKaks = ({title, onPress}) => {
  return (
    <TouchableOpacity className="ml-4 my-8 p-6 rounded w-96 bg-blue" activeOpacity={0.6} onPress={onPress}>
      <Text className="text-white font-bold text-center ">{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButtonKaks