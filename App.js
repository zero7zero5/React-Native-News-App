import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import getNews from "./api/getNews";

import AppNavigator from "./navigation/AppNavigation";

export default function App() {
  return <AppNavigator />;
}
