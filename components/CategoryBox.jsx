import React from "react";
import { Pressable, Image, Text, View } from "react-native";


const CategoryBox = ({title, image, onPress, isSelected}) =>{
    return (
        <Pressable onPress={onPress} className="p-4 flex items-center">
            <View className={`${isSelected ? 'bg-black' : 'bg-gray-200'} p-2 rounded`}>
                <Image className="w-8 h-8" resizeMode="contain" source={{uri: image}} />
            </View>
            <Text className={`${isSelected ? 'text-red font-medium' : 'text-black'}`}>{title}</Text>
        </Pressable>
    )
}

export default React.memo(CategoryBox)