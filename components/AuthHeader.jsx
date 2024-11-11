import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const AuthHeader = ({ title, showLogout }) => {
  const router = useRouter();

  const handleBackPress = () => {
    router.push('/');
  };

  const handleLogout = () => {
    console.log('Logout pressed');
    router.push('/'); // Navigate to the desired page after logging out
  };

  return (
    <View className="flex-row items-center justify-between mb-14 px-5">
      {!showLogout ? (
        <Pressable onPress={handleBackPress}>
          <Image className="w-6 h-6" source={require('../assets/auth_back.png')} />
        </Pressable>
      ) : (
        <View className="w-6 h-6" /> // Placeholder for alignment
      )}
      <Text className="text-blue text-[26px] font-medium">{title}</Text>
      {showLogout ? (
        <Pressable onPress={handleLogout}>
          <Image className="w-6 h-6" source={require('../assets/logout.png')} />
        </Pressable>
      ) : (
        <View className="w-6 h-6" /> // Placeholder for alignment
      )}
    </View>
  );
};

export default AuthHeader;
