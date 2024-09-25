import { Client, Account, ID } from "react-native-appwrite";

export const config = {
  databaseId: "66f47c3a0022dff8135a",
  usercollection: "66f47c900012a3da3d52",
  videocollection: "66f47c900012a3da3d52",
};

// Declare 'client' only once
const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66f205240004d3c09eb2")
  .setPlatform("com.aora.app"); // Assuming this is correct for your platform

const account = new Account(client);

// Register User
export const createUser = () => {
  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};

export { client, account };
