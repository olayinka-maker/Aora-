import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import tw from "@/assets/lib/tailwind";
import FormField from "../../components/FormField";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <SafeAreaView style={tw` bg-primary  h-full`}>
      <View style={tw`w-full flex my-6 h-full px-4 `}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={tw` w-[130px] h-[84px]`}
          resizeMode="contain"
        />

        <Text style={tw`  text-semibold text-2xl font-psemibold text-white `}>
          Sign-In
        </Text>

        <FormField
          title="Email"
          value={form.email}
          handleChangeText={(e) => setForm({ ...form, email: e })}
          otherStyles="mt-7"
          keyboardType="email-address"
        />
        <FormField
          title={"Password"}
          value={form.password}
          handleChangeText={(e) => setForm({ ...form, password: e })}
          otherStyles={"mt-7"}
        />
        <CustomButton
          otherStyles="mt-4"
          title={"Sign In"}
          handlePress={() => {}}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
