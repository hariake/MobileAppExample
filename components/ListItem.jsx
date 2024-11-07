import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const ListItem = ({ title, subtitle, className, onPress }) => {
  return (
    <TouchableOpacity
      className={`flex-row items-center justify-between p-2 bg-white border border-gray-300 rounded-lg shadow-md ${className}`}
      onPress={onPress}
    >
      <View className="flex-1 pl-3 justify-center">
        <Text className="text-lg font-semibold text-blue">{title}</Text>
        <Text className="text-gray-500">{subtitle}</Text>
      </View>
      <Image
        source={require("../assets/arrow.png")}
        className="w-6 h-6"
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default ListItem;
