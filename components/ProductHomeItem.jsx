import React from "react";
import { Pressable, Image, Text } from "react-native";

const ProductHomeItem = ({ title, image, price, onPress }) => {
  return (
    <Pressable className="flex-1 justify-center items-center p-2" onPress={onPress}>
      <Image className="w-full h-60 rounded-xl " source={{ uri: image }} />
      <Text className="text-gray-700">{title}</Text>
      <Text className="text-black">{price}</Text>
    </Pressable>
  );
};

export default React.memo(ProductHomeItem);
