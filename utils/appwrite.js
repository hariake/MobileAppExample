import { Client, Databases } from 'appwrite';

const client = new Client();
const databases = new Databases(client);

client
  .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite endpoint
  .setProject('672dc73c002efc545804'); // Your Appwrite project ID

async function registerUser(name, email, password) {
  const now = new Date().toISOString(); // Current datetime for "Created" and "Updated" fields

  try {
    const response = await databases.createDocument(
      '672dcef500338eae7c41', // Your Appwrite database ID
      '672dcf0a001a92e182c8', // Your Appwrite collection ID
      'unique()', // Generates a unique ID
      {
        Name: name,
        Email: email,
        Password: password,
        Created: now,
        Updated: now,
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
}

export { registerUser };
