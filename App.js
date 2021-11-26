import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.titulo}>Adicionar Compra</Text>
      <Text style={styles.texto}>Marca: </Text>
      <Text style={styles.texto}>Quantidade: </Text>
      <Text style={styles.texto}>Preço: </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  titulo: {
    fontSize: 30,
  },

  texto: {
    fontSize: 20,
  },
});
