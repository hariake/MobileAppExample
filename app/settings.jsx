import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@components/Header";
import ListItem from "@components/ListItem";
import EditableBox from "@components/EditableBox";


const Settings = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [username, setUsername] = useState("CurrentUsername");
  const [email, setEmail] = useState("user@example.com");

  const handleSave = () => {
    console.log("Saved:", { username, email });
    setIsEditable(false);
  };

  return (
    <SafeAreaView className="flex-1">
      <Header title="Settings" />
      <View className="p-4">
        <View className="flex-row items-center justify-between mb-6">
          <Text className="text-gray-600 text-lg font-semibold">
            Personal Information
          </Text>
          <TouchableOpacity onPress={() => setIsEditable(!isEditable)}>
            <Image
              source={require("../assets/edit.png")}
              className="w-5 h-5"
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <View className="mb-4">
          <EditableBox
            label="Username"
            initialText={username}
            isEditable={isEditable}
            onChangeText={setUsername}
          />
        </View>
        <View className="mb-4">
          <EditableBox
            label="Email"
            initialText={email}
            isEditable={isEditable}
            onChangeText={setEmail}
          />
        </View>

        {isEditable && (
          <TouchableOpacity
            className="h-14 bg-blue items-center justify-center rounded-lg mt-4"
            onPress={handleSave}
          >
            <Text className="text-white text-base font-semibold">Save</Text>
          </TouchableOpacity>
        )}

        <Text className="text-gray-600 text-lg font-semibold mt-8 mb-6">
          Help Center
        </Text>
        <View className="mb-4">
          <ListItem title="FAQ" onPress={() => router.push("../settings")} />
        </View>
        <View className="mb-4">
          <ListItem
            title="Contact Us"
            onPress={() => router.push("../settings")}
          />
        </View>
        <View className="mb-4">
          <ListItem
            title="Privacy and terms"
            onPress={() => router.push("../settings")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
