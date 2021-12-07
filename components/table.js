import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import api from "../api";

export default function Table() {
  const [incidents, setIncidests] = useState([]);

  const getItems = async () => {
    await api.get("find").then((res) => {
      setIncidests(res.data);
    });
  };

  useEffect(() => {
    getItems();
  }, []);

  function TextoTabela({ marca, quantidade, preco }) {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Marca: {marca}</Text>
        <Text style={styles.texto}>Quantidade (kg): {quantidade}</Text>
        <Text style={styles.texto}>Preço (R$): {preco}</Text>
      </View>
    );
  }

  return (
      <FlatList
        data={incidents}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TextoTabela
            marca={item.brand}
            quantidade={item.quantity}
            preco={item.price}
          />
        )}
      />    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    padding: 10,
    borderRadius: 15,
    marginTop: 20,
    width: 300,
  },

  texto:{
    fontSize: 20,
    justifyContent: "space-evenly",
    color: "#2b2b6f",
  },
});
