import { View, Text } from 'react-native';
import React, { useState } from 'react';
import AuthHeader from '../components/AuthHeader';
import Input from '../components/Input';
import CustomButtonKaks from '../components/CustomButtonKaks';
import Separator from '../components/Separator';
import { router } from 'expo-router';
import { registerUser } from '../utils/appwrite'; // Ensure this path is correct

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async () => {
    setError('');

    if (!name || !email || !password) {
      setError('All fields are required.');
      return;
    }

    try {
      // Register the user in the Appwrite "Users" collection
      const response = await registerUser(name, email, password);
      console.log('User registered successfully:', response);

      // Redirect to sign-in page after successful registration
      router.push('/signin');
    } catch (error) {
      console.error('Sign Up Error:', error);
      setError('Sign up failed. Please try again.');
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

      <CustomButtonKaks
        onPress={handleSignUp}
        className="my-4 mt-8 bg-blue-500 text-white"
        title="Sign Up"
      />

      <Separator text="Or sign up with" />

      <Text className="mt-16 text-blue mb-6 text-center">
        Already have an account?{' '}
        <Text
          onPress={() => router.push('/signin')}
          className="font-bold text-blue"
        >
          Sign In
        </Text>
      </Text>
    </View>
  );
};

export default SignUp;
