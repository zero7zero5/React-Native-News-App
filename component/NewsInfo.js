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
          <View style={styles.iconContainer}>
            <Icon name={"whatsapp"} size={50} backgroundColor="#00cc00" />
            <Text style={styles.logoText}>Whats App</Text>
          </View>
          <View style={styles.iconContainer}>
            <Icon name={"message"} size={50} backgroundColor="gold" />
            <Text style={styles.logoText}>Message</Text>
          </View>
          <View style={styles.iconContainer}>
            <Icon name={"email"} size={50} backgroundColor="#3399ff" />
            <Text style={styles.logoText}>Email</Text>
          </View>
        </View>
        <AppButton
          onPress={() => Linking.openURL(route.params.url)}
          title={"Click here to read full news"}
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
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
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
  logoText: {
    marginVertical: 5,
  },
});
export default ListingDetails;
