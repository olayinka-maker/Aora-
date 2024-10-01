import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";
import CustomButton from "./CustomButton";
import tw from "../assets/lib/tailwind";
import { router } from "expo-router";

const EmptyList = () => {
  return (
    <View style={tw` items-center  `}>
      <View style={tw``}>
        <Image
          source={require("../assets/images/empty.png")}
          style={tw` w-70 h-50 mx-auto `}
          resizeMode="contain"
        />
        <Text style={tw` text-center text-gray-100 font-pregular text-base `}>
          No Videos Found
        </Text>
        <Text style={tw`text-white font-bold text-xl py-4 `}>
          No Videos Found For This Profile
        </Text>
        <CustomButton
          title={"Back to Explore"}
          handlePress={() => router.push("/create")}
        />
      </View>
    </View>
  );
};

export default EmptyList;
