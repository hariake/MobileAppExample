import { View, Text } from 'react-native'
import React, { useState } from 'react'
import AuthHeader from '../components/AuthHeader'
import Input from '../components/Input'
import Checkbox from '../components/Checkbox'
import CustomButtonKaks from '../components/CustomButtonKaks'
import Separator from '../components/Separator'


const signin = () => {

  return (
    <View>
      <AuthHeader title="Sign In"/>
      <Input label="Email" placeholder="JohnDoe@gmail.com"/>
      <Input isPassword label="password" placeholder="********"/>
      
      <CustomButtonKaks 
        className="my-4 mt-8 bg-blue-500 text-white"
        title="Sign In" 
      />
      <Separator text="Or sign in with"/>
      <Text className="mt-16 text-blue mb-6 text-center">Dont have an account yet? 
        <Text className="font-bold"> Sign Up</Text>
      </Text>
    </View>
  )
}

export default signin