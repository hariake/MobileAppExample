import React from "react";
import { Pressable, Image, Text, View } from "react-native";

const FavouriteItem = ({ title, image, price, onPress }) => {
  return (
    <Pressable 
      onPress={onPress} 
      className="relative flex flex-row p-2 items-start" // Main container styling
    >
      {/* Close Icon in the top-right corner, increased size */}
      <Image
        source={require('../assets/close.png')}
        className="absolute top-2 right-2 w-6 h-6" // Updated size for the icon
      />

      {/* Image on the left, taking 1/3 of the width */}
      <Image 
        className="w-1/3 h-20 rounded-lg" 
        source={{ uri: image }} 
      />

      {/* Title and Price on the right */}
      <View className="flex-1 pl-2 justify-start">
        <Text className="text-gray-700 text-base font-medium mb-1">
          {title}
        </Text>
        <Text className="text-black text-sm font-bold">
          {price}
        </Text>
      </View>
    </Pressable>
  );
};

export default React.memo(FavouriteItem);
