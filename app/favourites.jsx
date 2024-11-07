import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomTabNavigator from '../components/BottomTabNavigator';
import FavouriteItem from '../components/FavouriteItem'; // Import FavouriteItem here
import { products } from '../data/products';

const Favourites = () => {
  const favouriteItems = products.filter((product) => product.isFavorite);

  const renderItem = ({ item }) => (
    <View className="border-b-4 border-gray-300 mb-8 mx-1">
      <FavouriteItem {...item} onPress={() => console.log(`${item.title} pressed`)} />
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="flex-1 px-4">
        <Text className="text-lg text-center mt-4">Your Favourites</Text>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => String(item.id)}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
      <BottomTabNavigator />
    </SafeAreaView>
  );
};

export default Favourites;
