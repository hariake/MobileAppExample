import { View, Text, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import Input from './Input';

const Header = ({ title, onBackPress, onLogout, showBack, showSearch, showLogout, onSearchKeyword, keyword }) => {
    const [showSearchInput, setShowSearchInput] = useState(false)

    const onSearch = () => {
        setShowSearchInput(search => !search)
    }
  return (
    <View>
    <View className="flex-row items-center justify-center px-4 relative">
      {showBack && (
        <Pressable hitSlop={20} onPress={onBackPress} className="absolute left-4">
          <Image className="w-6 h-6" source={require('../assets/back.png')} />
        </Pressable>
      )}

      {showSearch && (
        <Pressable hitSlop={20} onPress={onSearch} className="absolute left-4">
          <Image className="w-8 h-8" source={require('../assets/search.png')} />
        </Pressable>
      )}

      <Text className="text-black text-xl font-bold text-center">
        {title}
      </Text>

      {showLogout && !showSearch && (
        <Pressable hitSlop={20} onPress={onLogout} className="absolute right-4">
          <Image className="w-6 h-6" source={require('../assets/logout.png')} />
        </Pressable>
      )}
    </View>
    {
        showSearchInput ? (
            <Input 
            onChangeText={onSearchKeyword}
            value={keyword}
            placeholder="Type your keyword"/>
        ) : null
    }
    </View>
  );
};

export default Header;
