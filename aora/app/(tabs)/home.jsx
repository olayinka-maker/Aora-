import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "../../assets/lib/tailwind";
import { TextInput } from "react-native-gesture-handler";

const Home = () => {
  return (
    <SafeAreaView style={tw` flex-1  bg-primary   `}>
      <FlatList />
    </SafeAreaView>
  );
};

export default Home;
