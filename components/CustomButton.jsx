import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const CustomButton = ({ onPress, backgroundColor, textColor, title }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View className={`p-6 rounded w-96 ${backgroundColor}`}>
        <Text className={`text-center ${textColor} font-bold`}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
