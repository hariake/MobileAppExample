import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { useRouter, usePathname } from 'expo-router';

const BottomTabNavigator = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <View className="flex-row justify-around p-4 bg-white">
      <TouchableOpacity
        onPress={() => router.push('/home')}
        className="flex-1 items-center"
      >
        <Image
          source={
            pathname === '/home'
              ? require('../assets/home_active.png')
              : require('../assets/home.png')
          }
          className="h-6 w-6"
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push('/favourites')}
        className="flex-1 items-center"
      >
        <Image
          source={
            pathname === '/favourites'
              ? require('../assets/favourites_active.png')
              : require('../assets/favourites.png')
          }
          className="h-6 w-6"
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push('/profile')}
        className="flex-1 items-center"
      >
        <Image
          source={
            pathname === '/profile'
              ? require('../assets/profile_active.png')
              : require('../assets/profile.png')
          }
          className="h-6 w-6"
        />
      </TouchableOpacity>
    </View>
  );
};

export default BottomTabNavigator;
