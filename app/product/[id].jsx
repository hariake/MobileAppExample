import { View, Text, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { products } from '../../data/products';

const { width } = Dimensions.get('window');

const ProductDetails = () => {
    const router = useRouter();
    const params = useLocalSearchParams();
    const { id } = params;

    const product = products.find((item) => String(item.id) === String(id));

    const [isBookmarked, setIsBookmarked] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    if (!product) {
        return (
            <View className="flex-1 justify-center items-center">
                <Text>Product not found. Please try again.</Text>
            </View>
        );
    }

    const renderCarousel = () => {
        if (product.images && product.images.length > 1) {
            return (
                <>
                    <FlatList
                        data={product.images}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <Image 
                                source={{ uri: item }} 
                                style={{ width, height: '100%' }}
                                resizeMode="cover"
                            />
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        style={{ width }}
                        onScroll={(e) => {
                            const index = Math.round(e.nativeEvent.contentOffset.x / width);
                            setActiveIndex(index);
                        }}
                    />
                    <View className="absolute bottom-8 w-full flex-row justify-center">
                        {product.images.map((_, index) => (
                            <View
                                key={index}
                                className={`w-2 h-2 mx-1 rounded-full ${
                                    index === activeIndex ? 'bg-gray-800' : 'bg-gray-300'
                                }`}
                            />
                        ))}
                    </View>
                </>
            );
        } else {
            return (
                <Image 
                    source={{ uri: product.image }} 
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="cover"
                />
            );
        }
    };

    return (
        <View className="flex-1 bg-white">
            <View className="relative w-full" style={{ height: '45%' }}>
                {renderCarousel()}
                <TouchableOpacity 
                    className="absolute top-5 left-5 z-10"
                    onPress={() => router.push('../home')}
                >
                    <View className="bg-white p-2 rounded-full">
                        <Image 
                            source={require('../../assets/back.png')}
                            className="w-6 h-6"
                            resizeMode="contain"
                        />
                    </View>
                </TouchableOpacity>
            </View>
            <View className="flex-1 p-5 bg-white rounded-t-3xl shadow-md" style={{ marginTop: -24 }}>
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
};

export default ProductDetails;
