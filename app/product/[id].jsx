import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { products } from '../../data/products';

const ProductDetails = () => {
    const router = useRouter();
    const params = useLocalSearchParams();
    const { id } = params;

    const product = products.find((item) => String(item.id) === String(id));

    const [isBookmarked, setIsBookmarked] = useState(false);

    if (!product) {
        return (
            <View className="flex-1 justify-center items-center">
                <Text>Product not found. Please try again.</Text>
            </View>
        );
    }

    return (
        <View className="flex-1 bg-white">
            <View className="relative w-full h-1/2">
                <Image 
                    source={{ uri: product.image }}
                    className="w-full h-full"
                    resizeMode="cover"
                />
                {/* Back Button inside ProductDetails */}
                <TouchableOpacity 
                    className="absolute top-5 left-5 z-10" // Positioned in top-left corner with z-index to bring it forward
                    onPress={() => router.push('../home')}
                >
                    <Image 
                        source={require('../../assets/back.png')}
                        className="w-12 h-12" // Size of the icon
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
            <View className="flex-1 p-5 bg-white -mt-8 rounded-t-3xl shadow-md">
                <Text className="text-2xl font-bold mb-1">{product.title}</Text>
                <Text className="text-lg text-gray-700 mb-4">Price: €{product.price}</Text>
                <Text className="text-base text-gray-600 mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
                </Text>
            </View>
            <View className="flex-row items-center justify-between p-4 bg-white border-t border-gray-200">
                <TouchableOpacity 
                    className="w-[50px] h-12 bg-gray-200 rounded-full items-center justify-center"
                    onPress={() => setIsBookmarked(!isBookmarked)}
                >
                    <Image 
                        source={isBookmarked 
                            ? require('../../assets/bookmark.png') 
                            : require('../../assets/favourites.png')
                        } 
                        className="w-6 h-6"
                    />
                </TouchableOpacity>
                <View className="w-2" />
                <TouchableOpacity 
                    className="flex-1 h-12 bg-blue rounded-full items-center justify-center"
                    onPress={() => router.push('../home')}
                >
                    <Text className="text-white text-base font-semibold">Contact the Seller</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default ProductDetails;
