import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Header from "./components/header";
import Body from "./components/body";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar style="auto" />
        <Header />
        <Body />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2b2b6f",
    justifyContent: "center",
    alignItems: "center",
  },
});
