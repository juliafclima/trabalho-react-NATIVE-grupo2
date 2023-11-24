import React, { useState } from "react";
import { TouchableOpacity, View, Text, Alert, ScrollView } from "react-native";
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { styles } from "./styles";

const getCardColor = (index) => {
  const colors = ["white", "white", "white"];
  return colors[index % colors.length];
};

const DetalheProduto = ({ nome, descricao, detalhes, preco, foto, index}) => {

  const cardStyle = {
    ...styles.card,
    backgroundColor: getCardColor(item.index),
  };

  const navigation = useNavigation();

  function deleteProduto(id) {
    axios.delete(`https://6542dfe001b5e279de1fabce.mockapi.io/produto/${id}`)
      
      .then(response => {
        produtos(produtos.filter(produto => produto.id !== id));
      })
      .catch(error => {
        console.error('Erro ao excluir produto: ', error);
      });
  }

  return (
    <View style={styles.container}>
    <Card style={cardStyle}>
      <View style={styles.card}>
        <View style={styles.subCard}>
        <Card.Cover style={styles.foto} source={foto} />
        <Text style={styles.title}>{nome}</Text>
        <Text style={styles.preco}>R$ {preco}</Text>
        <Text style={styles.subtitle}>{descricao}</Text>
        <Text style={styles.subtitle2}>{detalhes}</Text>

        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('UpdateProdutos')}
            activeOpacity={0.8}
            style={styles.botao}
          >
            <Text style={styles.botaoTexto}>✏️</Text>
          </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.botao}
                onPress={() => deleteProduto(item.id)}
              >
                <Text style={styles.botaoTexto}>🗑️</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    </Card>
    </View>
  );
};

export const DetalhesProdutos = ({ route }) => {
  const { item } = route.params;
  console.log(item);

  return <DetalheProduto {...item} />;
};