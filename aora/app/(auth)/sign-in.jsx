import { View, Text, Image, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import tw from "@/assets/lib/tailwind";
import FormField from "../../components/FormField";
import { Link, router } from "expo-router";
import { signIn } from "@/libs/appwrite";
import { checkSession } from "@/libs/appwrite";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    setIsSubmitting(true);
    const session = await checkSession();

    if (session) {
      router.replace("/home");
    }
    if (!form.email || !form.password) {
      Alert.alert("Error", "Please fill in all the fields");
    }

    try {
      await signIn(form.email, form.password, form.username);
      router.replace("/home");
    } catch (error) {}
    setIsSubmitting(false);
  };

  return (
    <SafeAreaView style={tw` bg-primary flex-1`}>
      <ScrollView>
        <View style={tw`w-full flex my-6 min-h-[83vh] px-4 `}>
          <Image
            source={require("../../assets/images/logo.png")}
            style={tw` w-[130px] h-[84px]`}
            resizeMode="contain"
          />

          <Text style={tw`  text-semibold text-2xl font-psemibold text-white `}>
            Login in to Aora{" "}
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

          <Text style={tw` text-right text-gray-100 mt-4`}>
            Forgot Password
          </Text>
          <CustomButton
            containerStyles="mt-6"
            title={"Sign In"}
            handlePress={submit}
            isLoading={isSubmitting}
          />
          <View style={tw`flex justify-center pt-5 flex-row gap-2`}>
            <Text style={tw`text-lg text-gray-100 font-pregular`}>
              Don't have an account?
            </Text>
            <Link
              href="/sign-up"
              style={tw`text-lg font-psemibold text-secondary`}
            >
              Signup
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
