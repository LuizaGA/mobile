import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Desafio Incrivel</Text>
      <Text style={styles.zeus}>Zeus</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2b2b6f",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  header: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#fff",
    alignSelf: "center",
    marginTop: 70,
  },
  zeus: {
    fontSize: 45,
    fontWeight: "bold",
    color: "#fff",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 20,
  },
});
