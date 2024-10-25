import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomTabNavigator from '../components/BottomTabNavigator';

const Favourites = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="flex-1 justify-center items-center">
        <Text className="text-lg">Welcome to Favourites!</Text>
      </View>
      <BottomTabNavigator />
    </SafeAreaView>
  );
};

export default Favourites;
