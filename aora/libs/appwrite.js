import { Client, Account, ID } from "react-native-appwrite";

// Declare 'client' only once
const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66f205240004d3c09eb2")
  .setPlatform("com.aora.app"); // Assuming this is correct for your platform
