import { View, Text, Image } from 'react-native';
import React from 'react';
import CustomButton from '@components/CustomButton';
import { router } from 'expo-router';


const Splash = () => {
  const handleSignUpPress = () => {
    console.log('Sign Up button is clicked!');
  };

  const handleSignInPress = () => {
    console.log('Sign In button is clicked!');
  };

  return (
    <View className="flex-1 items-center px-4 justify-center">
      <Image 
        source={require('../assets/splash.png')} 
        className="w-full h-72 mb-8 mt-8" 
        resizeMode="cover" 
      />
      <View>
        <Text className="text-4xl font-bold text-center">You'll find</Text>
        <Text className="text-4xl font-bold text-orange underline text-center">All you need</Text>
        <Text className="text-4xl font-bold text-black text-center">Here</Text>
      </View>
      <View className="mt-8">
      <CustomButton 
        onPress={() => router.push('signup')}

        backgroundColor="bg-blue" 
        textColor="text-white" 
        title="Sign Up" 
      />
      <CustomButton 
        onPress={() => router.push('signin')} 
        backgroundColor="bg-white" 
        textColor="text-blue" 
        title="Sign In" 
      />
      </View>
    </View>
  );
};

export default Splash;
