import { View, Text } from 'react-native'
import React, { useState } from 'react'
import AuthHeader from '../components/AuthHeader'
import Input from '../components/Input'
import Checkbox from '../components/Checkbox'
import CustomButtonKaks from '../components/CustomButtonKaks'
import Separator from '../components/Separator'


const signup = () => {

    const [checked, setChecked] = useState(false)

  return (
    <View>
      <AuthHeader title="Sign Up"/>
      <Input label="Name" placeholder="John Doe"/>
      <Input label="Email" placeholder="JohnDoe@gmail.com"/>
      <Input isPassword label="password" placeholder="********"/>
      <View className="px-4 mt-8 flex-row items-center">
          <Checkbox checked={checked} onCheck={setChecked}/>
          <Text className="text-blue ml-2">I agree to the terms and conditions</Text>
      </View>
      <CustomButtonKaks 
        className="my-4 mt-8 bg-blue-500 text-white"
        title="Sign Up" 
      />
      <Separator text="Or sign up with"/>
      <Text className="mt-16 text-blue mb-6 text-center">Already have an Account? 
        <Text className="font-bold"> Sign In</Text>
      </Text>
    </View>
  )
}

export default signup