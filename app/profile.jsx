import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomTabNavigator from "../components/BottomTabNavigator";
import AuthHeader from "../components/AuthHeader";
import ListItem from "../components/ListItem"; // Import the ListItem component

const Profile = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 px-5">
        <AuthHeader title="Profile" showLogout={true} />
        <Text className="text-2xl font-bold text-black mb-1">Username</Text>
        <Text className="text-lg text-gray-500 mb-8">user@example.com</Text>

        <View className="mb-5">
          <ListItem 
          title="My Listings" 
          subtitle="Already have 10 listings" />
        </View>
        <View className="mb-5">
          <ListItem 
          title="Settings" 
          subtitle="Account, FAQ, Contact"
          onPress ={() => router.push("../settings")}/>
        </View>
        <View className="flex-1 justify-end mb-5">
          <TouchableOpacity
            className="h-20 bg-blue items-center justify-center rounded-xl"
            onPress={() => router.push("../CreateListing")}
          >
            <Text className="text-white text-base font-semibold">
              Add New Listing
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <BottomTabNavigator />
    </SafeAreaView>
  );
};

export default Profile;
