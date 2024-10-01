import { View, Text, Image, FlatList } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "../../assets/lib/tailwind";
import SearchInput from "../../components/SearchInput";
import Trend from "../../components/Trend";
import EmptyList from "../../components/EmptyList";
import { RefreshControl } from "react-native";

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onrefresh = () => {
    setRefreshing(true);
  };
  return (
    <SafeAreaView style={tw` flex-1  bg-primary   `}>
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <Text style={tw` text-2xl`}>{item.id}</Text>}
        ListHeaderComponent={() => (
          <View style={tw`my-6 px-4 `}>
            <View style={tw` flex-row justify-between items-center mb-6`}>
              <View>
                <Text
                  style={tw` text-sm font-pmedium text-gray-100 font-semibold`}
                >
                  Welcome Back,
                </Text>
                <Text style={tw` text-2xl text-white font-psemibold`}>
                  Ajibode
                </Text>
              </View>
              <Image
                source={require("../../assets/images/logo-small.png")}
                style={tw` w-9 h-9`}
                resizeMode="contain"
              />
            </View>
            <SearchInput placeholder={"Search for a video topic"} />
            <View style={tw` w-full flex-1 pt-5 pb-8`}>
              <Text style={tw` px-1 mb-3 text-gray-100 text-lg font-pregular`}>
                Trending Videos
              </Text>
              <Trend posts={[{ id: 1 }, { id: 2 }, { id: 3 }] ?? []} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => <EmptyList />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onrefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
