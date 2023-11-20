import React from "react";
import { View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { Card, Text } from "react-native-paper";

const produtos = [
  { nome: "COMPRIMIDOS FOCU", cor: "#f17064" },
  { nome: "PÍLULAS ZOOM", cor: "#ffb25f" },
  { nome: "SACHÊ DO SONO", cor: "#55b3d1" },
  { nome: "TABLETES XÔ ANSIEDADE", cor: "#f17064" },
  { nome: "COMPRIMIDOS TRAVA-LÍNGUA", cor: "#ffb25f" },
];

const renderCard = ({ item, index, navigation }) => (
  <Card style={[styles.card, { backgroundColor: item.cor }]}>
    <Card.Cover
      style={styles.foto}
      source={{ uri: "https://picsum.photos/700" }}
    />
    <Text style={styles.title}>{item.nome}</Text>
    <TouchableOpacity
      style={[styles.botao, { backgroundColor: "white" }]}
      onPress={() =>
        navigation.navigate("DetalhesProdutos", { produtoIndex: index })
      }
    >
      <Text>Saiba mais</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={[styles.botao2, { backgroundColor: "white" }]}
      onPress={() =>
        navigation.navigate("DetalhesProdutos", { produtoIndex: index })
      }
    >
      <Text>Comprar</Text>
    </TouchableOpacity>
  </Card>
);

export const Produtos = ({ navigation }) => (
  <View style={styles.container}>
    <FlatList
      data={produtos}
      renderItem={(item) => renderCard({ ...item, navigation })}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#eeeff4",
    padding: 15,
  },
  card: {
    marginBottom: 30,
    padding: 15,
    borderRadius: 15,
  },
  title: {
    fontWeight: "bold",
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
    color: "white",
  },
  botao: {
    padding: 10,
    alignItems: "center",
    borderRadius: 15,
    width: "100%",
    marginBottom: 10,
  },
  botao2: {
    padding: 10,
    alignItems: "center",
    borderRadius: 15,
    width: "100%",
  },
});
