// ProductHeader.jsx
import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

const ProductHeader = () => {
    const router = useRouter();

    return (
        <View className="w-full h-16 flex-row items-center p-4 bg-white shadow-md">
            <TouchableOpacity onPress={() => router.push('../home')}>
                <Image 
                    source={require('../assets/back.png')} 
                    className="w-8 h-8"
                    resizeMode="contain"
                />
            </TouchableOpacity>
        </View>
    );
};

export default ProductHeader;
