import { View, Text, Image } from 'react-native';
import React from 'react';

const Splash = () => {
  return (
    <View className="flex-1 items-center px-4">
      {/* Image Styling */}
      <Image 
        source={require('../assets/splash.png')} 
        className="w-full h-72 mb-8 mt-8" // Added mb-8 to create space between the image and text
        resizeMode="cover" 
      />

      {/* Text Styling */}
      <View>
        <Text className="text-4xl font-bold text-center">You'll find</Text>
        <Text className="text-4xl font-bold text-orange-500 underline text-center">All you need</Text>
        <Text className="text-4xl font-bold text-black text-center">Here</Text>
      </View>
    </View>
  );
};

export default Splash;
