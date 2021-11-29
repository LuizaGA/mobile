import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  Pressable,
} from "react-native";
import api from "./api";

export default function App() {
  const [brand, setBrand] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  async function AdicionarCompras() {
    const dados = {
      brand,
      quantity,
      price,
    };
    const response = await api.post("register", dados).then((response) => {
      Alert.alert("", "Compra Adicionada com Sucesso", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
      setBrand("");
      setQuantity("");
      setPrice("");
    });
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.titulo}>Adicionar Compra</Text>
      <Text style={styles.texto}>Marca: </Text>
      <TextInput
        style={styles.input}
        placeholder="Marca X"
        onChangeText={(brand) => setBrand(brand)}
        defaultValue={brand}
        keyboardType="default"
      ></TextInput>
      <Text style={styles.texto}>Quantidade: </Text>
      <TextInput
        style={styles.input}
        placeholder="20"
        onChangeText={(quantity) => setQuantity(quantity)}
        defaultValue={quantity}
        keyboardType="numeric"
      ></TextInput>
      <Text style={styles.texto}>Preço: </Text>
      <TextInput
        style={styles.input}
        placeholder="100"
        onChangeText={(price) => setPrice(price)}
        defaultValue={price}
        keyboardType="numeric"
      ></TextInput>
      <Pressable style={styles.botao} onPress={() => AdicionarCompras()}>
        <Text style={styles.botaoTexto}>Adicionar Compras</Text>
      </Pressable>
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
    fontWeight: "bold",
    color: "darkgreen",
    marginBottom: 20,
  },

  texto: {
    fontSize: 20,
    color: "green",
  },

  input: {
    height: 40,
    width: 300,
    borderWidth: 1,
    margin: 10,
  },

  botao: {
    marginTop: 10,
    backgroundColor: "darkgreen",
    height: 40,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
  },

  botaoTexto: {
    fontSize: 20,
    color: "white",
  },
});
