import React from "react";
import { View, Text, StyleSheet, StatusBar, Image } from "react-native";
import Icon from "./Icon";
import { Linking } from "react-native";
const About = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/photo.jpg")} />
      <Text style={styles.text}>Saber Basha</Text>
      <Text style={styles.info}>
        Hello I am Saber Basha, Currently pursuing B.tech in Information
        Technlogy at Madras Institute of Technology. Skilled in MERN Stack
        development and React Native. Want to collabarate with me?? Feel free to
        contact!
      </Text>
      <View style={styles.icons}>
        <Icon
          backgroundColor="#ff4d4d"
          onPress={() => Linking.openURL("mailto:saberbasha752002@gmail.com")}
          name={"email"}
          size={50}
        />
        <Icon
          onPress={() => Linking.openURL("https://github.com/zero7zero5")}
          backgroundColor="#ff4d4d"
          name={"github"}
          size={50}
        />
        <Icon
          onPress={() =>
            Linking.openURL("https://www.linkedin.com/in/saber-basha-s/")
          }
          backgroundColor="#ff4d4d"
          name={"linkedin"}
          size={50}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#ffcccc",
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    marginVertical: 5,
    fontWeight: "bold",
  },
  icons: {
    marginTop: 50,
    width: "100%",
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  info: {
    marginHorizontal: 15,
    marginVertical: 10,
    fontSize: 20,
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
    resizeMode: "cover",
    borderColor: "#ff9999",
    borderWidth: 5,
  },
});
export default About;
