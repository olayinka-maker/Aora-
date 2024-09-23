import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import tw from "../assets/lib/tailwind";
import icons from "../constants/icons";

const FormField = ({
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
      <Text style={tw`  text-base text-gray-100 font-pendium`}>{title}</Text>
      <View
        style={tw` w-full border-black-200 border-2 h-16 px-4 justify-center bg-black-100 rounded-2xl focus:border-secondary `}
      >
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={"#7b7b8b"}
          autoCorrect
          value={value}
          onChangeText={handleChangeText}
          style={tw` flex-1 text-white font-psemibold`}
          keyboardType={keyboardType}
          secureTextEntry={title === "password" && !showPassword}
        />
        {title === "password" && (
          <TouchableOpacity onPress={() => setshowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              style={tw` w-6 h-6`}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
