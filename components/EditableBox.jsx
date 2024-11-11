import { View, Text, TextInput } from "react-native";
import React from "react";

const EditableBox = ({ label, initialText, isEditable, onChangeText }) => {
  return (
    <View className="p-3 bg-white border border-gray-300 rounded-lg shadow-md">
      <Text className="text-base font-semibold text-blue mb-1">{label}</Text>
      {isEditable ? (
        <TextInput
          value={initialText}
          onChangeText={onChangeText}
          className="text-gray-700 text-sm"
        />
      ) : (
        <Text className="text-gray-500 text-sm">{initialText}</Text>
      )}
    </View>
  );
};

export default EditableBox;
