import { View, Text, Image, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import tw from "@/assets/lib/tailwind";
import FormField from "../../components/FormField";
import { Link, router } from "expo-router";
import { account } from "../../libs/appwrite";
import { createUser } from "../../libs/appwrite";

import { useUser } from "../../context/userContext";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Function to register the user
  const submit = async () => {
    setIsSubmitting(true);
    if (!form.email || !form.password || !form.username) {
      Alert.alert("Error", "Please fill in all the fields");
    }

    try {
      const result = await createUser(form.email, form.password, form.username);
      router.replace("/home");
    } catch (error) {}
    setIsSubmitting(false);
  };

  return (
    <SafeAreaView style={tw`bg-primary h-full`}>
      <ScrollView>
        <View style={tw`w-full flex my-6 min-h-[83vh] px-4`}>
          <Image
            source={require("../../assets/images/logo.png")}
            style={tw`w-[130px] h-[84px]`}
            resizeMode="contain"
          />

          <Text style={tw`text-semibold text-2xl font-psemibold text-white`}>
            Sign Up{" "}
          </Text>

          {/* Username field */}
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })} // Corrected: sets username
            otherStyles="mt-7"
          />

          {/* Email field */}
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          {/* Password field */}
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <Text style={tw`text-right text-gray-100 mt-4`}>Forgot Password</Text>

          {/* Sign up button */}
          <CustomButton
            containerStyles="mt-6"
            title="Sign Up" // Changed title to "Sign Up"
            handlePress={submit}
            isLoading={isSubmitting}
          />

          {/* Navigation to sign in */}
          <View style={tw`flex justify-center pt-5 flex-row gap-2`}>
            <Text style={tw`text-lg text-gray-100 font-pregular`}>
              Have an account already?
            </Text>
            <Link
              href="/sign-in"
              style={tw`text-lg font-psemibold text-secondary`}
            >
              Login
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
