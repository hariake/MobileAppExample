import { View, Text } from 'react-native'
import React from 'react'
import AuthHeader from '../components/AuthHeader'
import Input from '../components/Input'

const signup = () => {
  return (
    <View>
      <AuthHeader title="Sign Up"/>
      <Input label="Name"/>
    </View>
  )
}

export default signup