import { View, Text } from 'react-native'
import React from 'react'

const Separator = ({text}) => {
  return (
    <View className="flex-row items-center my-4">
        <View className="bg-lightGray h-1 flex-1 my-2"/>
      <Text className="text-blue font-medium">{text}</Text>
        <View className="bg-colors.lightGray h-1 flex-1 my-2"/>
    </View>
  )
}

export default Separator