import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import tw from "../assets/lib/tailwind";
import icons from "../constants/icons";

const SearchInput = ({
  placeholder,
  handleChangeText,
  keyboardType,
  title,
  value,
  otherStyles,
  ...props
}) => {
  const [showPassword, setshowPassword] = useState(false);
  return (
    <View style={tw`space-y-2  ${otherStyles}`}>
      <View
        style={tw` w-full border-black-200 border-2 h-16 px-4 justify-center items-center bg-black-100 rounded-2xl focus:border-secondary  flex-row`}
      >
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={"#7b7b8b"}
          autoCorrect
          value={value}
          onChangeText={handleChangeText}
          style={tw` flex-1 text-white font-pregular text-base mt-0.5 `}
          keyboardType={keyboardType}
          secureTextEntry={title === "Password" && !showPassword}
        />
        {
          <TouchableOpacity>
            <Image
              source={icons.search}
              style={tw` w-5 h-5`}
              resizeMode="contain"
            />
          </TouchableOpacity>
        }
      </View>
    </View>
  );
};

export default SearchInput;
