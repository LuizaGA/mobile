import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import Header from "./components/header";
import Body from "./components/body";
import Table from "./components/table";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={styles.header}>Desafio Incrivel</Text>
    <Text style={styles.zeus}>Zeus</Text>
      <Pressable style={styles.botao} onPress={() => navigation.navigate('Adicionar')}>
        <Text style={styles.botaoTexto}>Adicionar Compras</Text>
      </Pressable>
      <Pressable style={styles.botao} onPress={() => navigation.navigate('Visualizar Lista')}>
        <Text style={styles.botaoTexto}>Visualizar Lista</Text>
      </Pressable>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Adicionar" component={Body} />
        <Stack.Screen name="Visualizar Lista" component={Table} />
        <Stack.Screen name="Visualizar Gráfico" component={Table} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#2b2b6f",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
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
  header: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#2b2b6f",
    alignSelf: "center",
    marginTop: 70,
  },
  zeus: {
    fontSize: 45,
    fontWeight: "bold",
    color: "#2b2b6f",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  botaoTexto: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
});
