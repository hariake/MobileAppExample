import { View, Text } from 'react-native';
import React, { useState } from 'react';
import AuthHeader from '../components/AuthHeader';
import Input from '../components/Input';
import Checkbox from '../components/Checkbox';
import CustomButtonKaks from '../components/CustomButtonKaks';
import Separator from '../components/Separator';
import { router } from 'expo-router';
import { Client, Databases } from 'appwrite';

const client = new Client();
const databases = new Databases(client);
client
  .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite endpoint
  .setProject('672dc73c002efc545804');

async function registerUser(name, email, password) {
  try {
    const response = await databases.createDocument(
      '672dcef500338eae7c41', // Replace with your actual database ID
      '672dcf0a001a92e182c8', // Replace with your actual collection ID
      'unique()', // Ensure unique document ID
      {
        Name: name,
        Email: email,
        Password: password,
      }
    );
    return response;
  } catch (error) {
    console.error("Error during user registration:", error);
    throw error;
  }
}

const SignUp = () => {
  const [checked, setChecked] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setError('');

    if (!name || !email || !password) {
      setError('All fields are required.');
      return;
    }

    if (!checked) {
      setError('You must agree to the terms and conditions.');
      return;
    }

    try {
      const user = await registerUser(name, email, password);
      router.push('/signin');
    } catch (error) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <View>
      <AuthHeader title="Sign Up" />
      {error && <Text className="text-red-500 text-center">{error}</Text>}
      
      <Input
        label="Name"
        placeholder="John Doe"
        value={name}
        onChangeText={setName}
      />
      <Input
        label="Email"
        placeholder="JohnDoe@gmail.com"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        isPassword
        label="Password"
        placeholder="********"
        value={password}
        onChangeText={setPassword}
      />
      <View className="px-4 mt-8 flex-row items-center">
        <Checkbox checked={checked} onCheck={setChecked} />
        <Text className="text-blue ml-2">I agree to the terms and conditions</Text>
      </View>
      <CustomButtonKaks
        className="my-4 mt-8 bg-blue-500 text-white"
        title="Sign Up"
        onPress={handleSubmit}
      />
      <Separator text="Or sign up with" />
      <Text className="mt-16 text-blue mb-6 text-center">
        Already have an account?{' '}
        <Text
          onPress={() => router.push('signin')}
          className="font-bold text-blue"
        >
          Sign In
        </Text>
      </Text>
    </View>
  );
};

export default SignUp;
