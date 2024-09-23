import { Image, ScrollView, Text, View } from "react-native";
import { StatusBar } from "react-native";
import { router, Redirect } from "expo-router";
import { StyleSheet } from "react-native";
import { fonts } from "../constants/mystyles";
import className from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "../assets/lib/tailwind";
import CustomButton from "../components/CustomButton";
export default function App() {
  return (
    <SafeAreaView style={tw` bg-primary h-full`}>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View style={tw` w-full  items-center h-full px-4`}>
          <Image
            source={require("../assets/images/logo.png")}
            style={tw`w-[130px] h-[84px]`}
            resizeMode="contain"
          />
          <Image
            source={require("../assets/images/cards.png")}
            style={tw`w-[380px] h-[300px]`}
            resizeMode="contain"
          />
          <View style={tw` relative mt-5`}>
            <Text style={tw`text-3xl text-white font-bold text-center`}>
              Discover Endless Possibilities with{" "}
              <Text style={tw` text-secondary-200  `}>Aora</Text>{" "}
            </Text>
            <Image
              source={require("../assets/images/path.png")}
              style={tw`w-[150px] h-[15px] absolute top-28 left-20`}
              resizeMode="contain"
            />
            <Text
              style={tw` text-gray-100  text-sm text-center text-white mt-6`}
            >
              Where Creativity Meets innovation: Embark on a journey of
              Limitless Exploration with Aora.
            </Text>
          </View>
          <CustomButton
            title={"Continue with Email"}
            containerStyles={"w-full mt-7"}
            handlePress={() => router.push("/sign-in")}
          />
        </View>
      </ScrollView>
      {/* <StatusBar backgroundColor={"#161622"} style="light" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
