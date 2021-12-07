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
import api from "../api";

export default function Body() {
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
      <StatusBar style="auto" />
      <Text style={styles.titulo}>Adicionar Compra</Text>
      <Text style={styles.texto}>Marca: </Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Marca X"
        placeholderTextColor="#2b2b6f"
        onChangeText={(brand) => setBrand(brand)}
        defaultValue={brand}
        keyboardType="default"
        maxLength={20}
      ></TextInput>
      <Text style={styles.texto}>Quantidade: </Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 20"
        placeholderTextColor="#2b2b6f"
        onChangeText={(quantity) => setQuantity(quantity)}
        defaultValue={quantity}
        keyboardType="numeric"
        maxLength={4}
      ></TextInput>
      <Text style={styles.texto}>Preço: </Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 100"
        placeholderTextColor="#2b2b6f"
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
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 20,
  },

  titulo: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#2b2b6f",
    marginTop: 25,
    marginBottom: 20,
  },

  texto: {
    fontSize: 20,
    color: "#2b2b6f",
  },

  input: {
    height: 40,
    width: 300,
    borderWidth: 1,
    borderColor: "#2b2b6f",
    margin: 10,
    color: "#000",
    borderRadius: 10,
  },

  botao: {
    marginTop: 15,
    backgroundColor: "#2b2b6f",
    height: 40,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 30,
  },

  botaoTexto: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
});
