import { View, Text, TextInput } from 'react-native'
import React from 'react'

const Input = () => {
  return (
    <View>
      <Text>{label}</Text>
      <View>
        <TextInput/>
      </View>
    </View>
  )
}

export default Input