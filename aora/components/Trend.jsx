import { View, Text, FlatList } from "react-native";
import React from "react";
import tw from "../assets/lib/tailwind";

const Trend = ({ posts }) => {
  return (
    <View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <Text style={tw` text-white text-2xl`}>{item.id}</Text>
        )}
        horizontal
      />
    </View>
  );
};

export default Trend;
