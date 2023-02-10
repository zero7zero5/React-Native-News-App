import React, { useState } from "react";
import { View, StyleSheet, StatusBar, FlatList } from "react-native";
import AppInput from "./AppInput";
import news from "../api/getNews";
import Card from "./Card";
import { useNavigation } from "@react-navigation/native";

const SearchNews = () => {
  const navigation = useNavigation();
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const getNews = async () => {
    const { data } = await news.searchedNews(text);
    setData(data.articles);
  };
  const handleFetch = () => {
    getNews();
  };
  return (
    <View style={styles.container}>
      <AppInput
        icon={"magnify"}
        serach={"arrow-right-bold-circle-outline"}
        onChangeText={(text) => setText(text)}
        placeholder="Search"
        onSearch={handleFetch}
        inputMode="text"
      />
      <FlatList
        data={data}
        keyExtractor={(news) => news.publishedAt}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={item.description}
            image={item.urlToImage}
            onPress={() => navigation.navigate("Info", item)}
          />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffcccc",
    padding: 10,
    flex: 1,
  },
});
export default SearchNews;
