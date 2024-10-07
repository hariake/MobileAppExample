import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const AuthHeader = ({ title }) => {
  const router = useRouter();

  const handleBackPress = () => {
    router.push('/');
  };

  return (
    <View className="flex-row items-center mb-14">
      <Pressable onPress={handleBackPress}>
        <Image className="w-18 h-18" source={require('../assets/auth_back.png')} />
      </Pressable>
      <Text className="text-blue text-[26px] font-medium px-5">{title}</Text>
    </View>
  );
};

export default AuthHeader;
