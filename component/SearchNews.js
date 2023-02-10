import React, { useState } from "react";
import { Text, View, StyleSheet, StatusBar } from "react-native";
import AppInput from "./AppInput";
const SearchNews = () => {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <AppInput
        icon={"magnify"}
        serach={"arrow-right-bold-circle-outline"}
        onChangeText={(text) => setText(text)}
        placeholder="Search"
        onSearch={() => console.log(text)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
export default SearchNews;
