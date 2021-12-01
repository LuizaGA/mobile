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
    const response = await api
      .post("register", dados)
      .then((response) => {
        Alert.alert("", "Compra Adicionada com Sucesso", [
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
        setBrand("");
        setQuantity("");
        setPrice("");
      })
      .catch((error) => {
        Alert.alert(
          "Erro ao Adicionar Compra",
          "Confira se os campos então preenchidos corretamente",
          [{ text: "OK", onPress: () => console.log("OK Pressed") }]
        );
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Desafio Incrivel</Text>
      <Text style={styles.zeus}>Zeus</Text>
      <StatusBar style="auto" />
      <Text style={styles.titulo}>Adicionar Compra</Text>
      <Text style={styles.texto}>Marca: </Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Marca X"
        placeholderTextColor="#fff"
        onChangeText={(brand) => setBrand(brand)}
        defaultValue={brand}
        keyboardType="default"
        maxLength={20}
      ></TextInput>
      <Text style={styles.texto}>Quantidade: </Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 20"
        placeholderTextColor="#fff"
        onChangeText={(quantity) => setQuantity(quantity)}
        defaultValue={quantity}
        keyboardType="numeric"
        maxLength={4}
      ></TextInput>
      <Text style={styles.texto}>Preço: </Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 100"
        placeholderTextColor="#fff"
        onChangeText={(price) => setPrice(price)}
        defaultValue={price}
        keyboardType="numeric"
        maxLength={6}
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
    backgroundColor: "#2b2b6f",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    margin: 5,
    alignSelf: "center",
  },
  zeus: {
    fontSize: 45,
    fontWeight: "bold",
    color: "#fff",
    margin: 15,
    alignSelf: "center",
  },

  titulo: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
    marginBottom: 20,
  },

  texto: {
    fontSize: 20,
    color: "#fff",
  },

  input: {
    height: 40,
    width: 300,
    borderWidth: 1,
    borderColor: "#fff",
    margin: 10,
    color: "white",
    borderRadius: 10,
  },

  botao: {
    marginTop: 15,
    backgroundColor: "#fff",
    height: 40,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },

  botaoTexto: {
    fontSize: 20,
    color: "#2b2b6f",
    fontWeight: "bold",
  },
});
