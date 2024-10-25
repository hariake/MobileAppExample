import { View, Text } from 'react-native'
import React from 'react'
import AuthHeader from '../components/AuthHeader'
import Input from '../components/Input'
import CustomButtonKaks from '../components/CustomButtonKaks'
import Separator from '../components/Separator'
import { router } from 'expo-router';


const signin = () => {

  return (
    <View>
      <AuthHeader title="Sign In"/>
      <Input label="Email" placeholder="JohnDoe@gmail.com"/>
      <Input isPassword label="Password" placeholder="********"/>
      
      <CustomButtonKaks 
       onPress={() => router.push('home')}
       className="my-4 mt-8 bg-blue-500 text-white"
       title="Sign In" 
      />
      <Separator text="Or sign in with"/>
      <Text className="mt-16 text-blue mb-6 text-center">
        Don’t have an account yet? 
        <Text onPress={() => router.push('signup')} className="font-bold text-blue">
          {" "}Sign Up
        </Text>
      </Text>
    </View>
  )
}

export default signin
