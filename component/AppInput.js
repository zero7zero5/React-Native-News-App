import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native";
const AppInput = ({ icon, serach, onSearch, ...otherProps }) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons size={20} name={icon} style={styles.icon} />
      <TextInput {...otherProps} style={styles.input} />
      {serach && (
        <TouchableWithoutFeedback onPress={onSearch}>
          <MaterialCommunityIcons
            color={"#FF595A"}
            size={35}
            name={serach}
            style={styles.icon}
          />
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 25,
    padding: 10,
    flexDirection: "row",
    marginVertical: 15,
  },
  input: {
    fontSize: 18,
    flex: 1,
  },
  icon: {
    marginRight: 10,
    alignSelf: "center",
  },
});
export default AppInput;
