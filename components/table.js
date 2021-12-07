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
        <Text>Marca: {marca}</Text>
        <Text>Quantidade (kg): {quantidade}</Text>
        <Text>Preço (R$): {preco}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        horizontal={false}
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
});
