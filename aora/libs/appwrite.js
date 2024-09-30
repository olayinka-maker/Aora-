import {
  Client,
  Account,
  ID,
  Avatars,
  Databases,
  Query,
} from "react-native-appwrite";

export const config = {
  databaseId: "66f47c3a0022dff8135a",
  usercollection: "66f47c8100114a89280a",
  videocollection: "66f47c900012a3da3d52",
  fileId: "66f4a0580023c1d01acb",
};

// Declare 'client' only once
const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66f205240004d3c09eb2")
  .setPlatform("com.aora.app"); // Assuming this is correct for your platform

const account = new Account(client);
const avatars = new Avatars(client);
const database = new Databases(client);

// Register User
export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(username);
    database.listDocuments;

    await signIn(email, password);
    const newUser = await database.createDocument(
      config.databaseId,
      config.usercollection,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl,
      }
    );

    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export async function signIn(email, password) {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
    console.log(session);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export const getCurrentUser = async () => {
  try {
    const session = await account.get();
    console.log(session);
    if (session) {
      const user = database.listDocuments(
        config.databaseId,
        config.usercollection,
        [Query.equal("accountId", session.$id)]
      );
      return user;
    }
  } catch (error) {
    return null;
  }
};

export { client, account };
