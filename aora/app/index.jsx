import { Image, ScrollView, Text, View } from "react-native";
import { StatusBar } from "react-native";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";
import { fonts } from "../constants/mystyles";
import className from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "../assets/lib/tailwind";
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
        </View>
      </ScrollView>
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
