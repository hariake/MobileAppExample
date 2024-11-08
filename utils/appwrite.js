import { Client, Databases } from 'appwrite';

const client = new Client();
const databases = new Databases(client);

client
  .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite endpoint
  .setProject('672dc73c002efc545804'); // Replace with your Appwrite project ID

async function registerUser(name, email, password) {
  try {
    // Create the document in the 'Users' collection
    const response = await databases.createDocument(
      '672dc73c002efc545804', // Replace with your database ID
      '672dcf0a001a92e182c8', // Replace with your collection ID (Users collection)
      'unique()', // You can use 'unique()' to generate a unique ID for the document
      {
        Name: name,
        Email: email,
        Password: password,
      }
    );
    console.log('User registered successfully:', response);
    return response;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
}
