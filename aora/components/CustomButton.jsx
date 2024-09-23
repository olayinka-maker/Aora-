import { TouchableOpacity, View, Text } from "react-native";
import React from "react";
import tw from "../assets/lib/tailwind";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLoading}
      style={tw` rounded-xl min-h-[62px] justify-center items-center  bg-secondary ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
    >
      <Text style={tw` text-primary text-lg font-psemibold ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
