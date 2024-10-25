import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomTabNavigator from '../components/BottomTabNavigator';

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="flex-1 justify-center items-center">
        <Text className="text-lg">Welcome to Profile!</Text>
      </View>
      <BottomTabNavigator />
    </SafeAreaView>
  );
};

export default Profile;
