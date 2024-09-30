import { createContext, useContext, useEffect, useState } from "react";
import { account, getCurrentUser } from "../libs/appwrite";
import { isLoading } from "expo-font";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export function GlobalProvider(props) {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [IsLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getCurrentUser()
      .then((res) => {
        if (res) {
          setLoggedIn(true);
          setUser(user);
        } else {
          setLoggedIn(false);
          setUser(null);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  // async function login(email, password) {
  //   const loggedIn = await account.createEmailPasswordSession(email, password);
  //   setUser(loggedIn);
  // }

  // async function logout() {
  //   await account.deleteSession("current");
  //   setUser(null);
  // }

  // // User registration logic
  // async function register(email, password) {
  //   await account.create(ID.unique(), email, password);
  //   await login(email, password);
  // }

  // // Initialize user session
  // async function init() {
  //   try {
  //     const loggedIn = await account.get();
  //     setUser(loggedIn);
  //   } catch (err) {
  //     setUser(null);
  //   }
  // }

  // useEffect(() => {
  //   init();
  // }, []);

  return (
    <GlobalContext.Provider value={{ user, loggedIn, isLoading }}>
      {props.children}
    </GlobalContext.Provider>
  );
}
