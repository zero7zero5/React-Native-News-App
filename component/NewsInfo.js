import React from "react";
import { Image, Linking, StyleSheet, Text, View } from "react-native";
import AppButton from "./AppButton";
import Icon from "./Icon";
const ListingDetails = ({ route }) => {
  return (
    <View>
      <Image style={styles.image} source={{ uri: route.params.urlToImage }} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{route.params.title}</Text>
        <Text style={styles.subtitle}>{route.params.content}</Text>
        <View style={styles.shareContainer}>
          <Icon name={"whatsapp"} size={50} backgroundColor="#00cc00" />
          <Icon name={"message"} size={50} backgroundColor="gold" />
          <Icon name={"email"} size={50} backgroundColor="#3399ff" />
        </View>
        <AppButton
          onPress={() => Linking.openURL(route.params.url)}
          title={"click here to read full news"}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: { padding: 20 },
  title: {
    fontSize: 23,
    marginBottom: 10,
    color: "#FF595A",
    fontWeight: "bold",
  },
  shareContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 18,
  },
});
export default ListingDetails;
