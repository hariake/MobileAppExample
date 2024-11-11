import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import Header from '@components/Header';
import { useRouter } from 'expo-router';
import { products } from '@data/products';  // Using the absolute path alias for the products array

const CreateListing = () => {
  const router = useRouter();
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const pickImage = async () => {
    if (images.length >= 6) {
      alert('You can only add up to 6 images.');
      return;
    }

    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert('Permission to access gallery is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: false,
      quality: 1,
    });

    if (!result.canceled) {
      setImages([...images, result.assets[0].uri]);
    }
  };

  const removeImage = (uri) => {
    setImages(images.filter((image) => image !== uri));
  };

  const handleSubmit = () => {
    // Generate a new ID based on the current highest ID in the products array
    const newId = products.length + 1;

    // Create a new product
    const newProduct = {
      id: newId,
      title,
      image: images[0] || 'default_image_url', // Assuming the first image is the main one
      category: category,
      price,
    };

    // Add the new product to the products array (in a real scenario, this should be handled via backend API)
    products.push(newProduct);

    console.log('New Product Added:', newProduct);
    alert('New product created!');

    // Optionally, navigate to a different page or reset the form
    router.push('/somewhere'); // Adjust the route as needed
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <Header 
        title="Create New Listing" 
        showBack 
        onBackPress={() => router.push('../profile')}
      />
      
      <View className="p-5">
        <Text className="text-lg font-bold mb-4">Add Images</Text>
        
        <View className="flex-row flex-wrap">
          {images.length < 6 && (
            <TouchableOpacity 
              onPress={pickImage} 
              className="w-[100px] h-[100px] bg-gray-200 rounded-lg border border-gray-400 items-center justify-center mb-4 mr-4"
            >
              <Image 
                source={require('../assets/plus.png')}
                className="w-6 h-6"
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
          
          {images.map((item, index) => (
            <View key={index} className="w-[100px] h-[100px] bg-gray-200 rounded-lg mb-4 mr-4 relative">
              <Image 
                source={{ uri: item }}
                className="w-full h-full rounded-lg"
                resizeMode="cover"
              />
              <TouchableOpacity 
                onPress={() => removeImage(item)} 
                className="absolute top-1 right-1 bg-white rounded-full p-1"
              >
                <Image 
                  source={require('../assets/close.png')} 
                  className="w-4 h-4"
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <Text className="text-lg text-blue font-bold mb-2">Title</Text>
        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder="Enter title"
          className="border border-gray-300 rounded-lg p-3 mb-4"
        />

        <Text className="text-lg text-blue font-bold mb-2">Category</Text>
        <TextInput
          value={category}
          onChangeText={setCategory}
          placeholder="Enter category"
          className="border border-gray-300 rounded-lg p-3 mb-4"
        />

        <Text className="text-lg text-blue font-bold mb-2">Price</Text>
        <TextInput
          value={price}
          onChangeText={setPrice}
          placeholder="Enter price"
          keyboardType="numeric"
          className="border border-gray-300 rounded-lg p-3 mb-4"
        />

        <Text className="text-lg text-blue font-bold mb-2">Description</Text>
        <TextInput
          value={description}
          onChangeText={setDescription}
          placeholder="Enter description"
          multiline
          className="border border-gray-300 rounded-lg p-3 mb-6 h-[100px]"
        />

        <TouchableOpacity 
          onPress={handleSubmit} 
          className="h-14 bg-blue rounded-xl items-center justify-center mb-4"
        >
          <Text className="text-white text-base font-semibold">Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CreateListing;
