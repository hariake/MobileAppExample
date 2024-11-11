import { View, Text } from 'react-native';
import React, { useState } from 'react';
import AuthHeader from '../components/AuthHeader';
import Input from '../components/Input';
import CustomButtonKaks from '../components/CustomButtonKaks';
import Separator from '../components/Separator';
import { router } from 'expo-router';
import { Client, Databases, Query } from 'appwrite';

const client = new Client();
const databases = new Databases(client);

client
  .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite endpoint
  .setProject('672dc73c002efc545804'); // Your Appwrite project ID

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
      // Step 1: Retrieve user document by email from the 'Users' collection
      const usersCollectionId = '672dcf0a001a92e182c8'; // Replace with your Users collection ID
      const databaseId = '672dcef500338eae7c41'; // Replace with your database ID

      const response = await databases.listDocuments(
        databaseId,
        usersCollectionId,
        [Query.equal('Email', email)]
      );

      if (response.total === 0) {
        setError('No user found with this email.');
        return;
      }

      const userDocument = response.documents[0];

      // Step 2: Check if the provided password matches the one in the document
      if (userDocument.Password !== password) {
        setError('Incorrect password.');
        return;
      }

      // Step 3: If credentials match, redirect to home page
      router.push('/home'); // Redirect to home page after successful sign-in
    } catch (error) {
      console.error('Sign In Error:', error);
      setError(error.message || 'Sign in failed. Please check your credentials.');
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
        Don’t have an account yet?{' '}
        <Text
          onPress={() => router.push('signup')}
          className="font-bold text-blue"
        >
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

export default SignIn;
