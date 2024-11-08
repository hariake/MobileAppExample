import { View, Text } from 'react-native';
import React, { useState } from 'react';
import AuthHeader from '../components/AuthHeader';
import Input from '../components/Input';
import CustomButtonKaks from '../components/CustomButtonKaks';
import Separator from '../components/Separator';
import { router } from 'expo-router';
import { Client, Account } from 'appwrite';

const client = new Client();
const account = new Account(client);

client
  .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite endpoint
  .setProject('672dc73c002efc545804'); // Replace with your Appwrite project ID

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async () => {
    setError('');

    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }

    try {
      await account.createSession(email, password); // Correct method to create a session
      router.push('/home');
    } catch (error) {
      console.error('Sign In Error:', error); // Log the error to get detailed feedback
      if (error.message) {
        setError(error.message); // Show the detailed error message if it exists
      } else {
        setError('Sign in failed. Please check your credentials.');
      }
    }
  };

  return (
    <View>
      <AuthHeader title="Sign In" />
      {error && <Text className="text-red-500 text-center">{error}</Text>}
      
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
      
      <CustomButtonKaks
        onPress={handleSignIn}
        className="my-4 mt-8 bg-blue-500 text-white"
        title="Sign In"
      />
      
      <Separator text="Or sign in with" />
      
      <Text className="mt-16 text-blue mb-6 text-center">
        Don’t have an account yet? 
        <Text
          onPress={() => router.push('signup')}
          className="font-bold text-blue"
        >
          {" "}Sign Up
        </Text>
      </Text>
    </View>
  );
};

export default SignIn;
