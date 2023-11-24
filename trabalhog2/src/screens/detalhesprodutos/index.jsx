import React, { useState } from "react";
import { TouchableOpacity, View, Text, Alert, ScrollView } from "react-native";
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { styles } from "./styles";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const getCardColor = (index) => {
  const colors = ["white", "white", "white"];
  return colors[index % colors.length];
};

export const DetalhesProdutos = ({ route }) => {
  const { item } = route.params;
  const [produtos, setProdutos] = useState([]); // Estado para armazenar os produtos

  const cardStyle = {
    ...styles.card,
    backgroundColor: getCardColor(item.index),
  };

  const navigation = useNavigation();

  const deleteProduto = (id) => {
    axios
      .delete(`https://6542dfe001b5e279de1fabce.mockapi.io/produto/${id}`)
      .then(() => {
        setProdutos(produtos.filter((produto) => produto.id !== id));
        navigation.navigate('Produtos'); 
      })
      .catch((error) => {
        console.error('Erro ao excluir produto: ', error);
      });
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Card style={cardStyle}>
        <View style={styles.card}>
          <View style={styles.subCard}>
            <Card.Cover style={styles.foto} source={item.imagem} />
            <Text style={styles.title}>{item.nome}</Text>
            <Text style={styles.preco}>R$ {item.preco}</Text>
            <Text style={styles.subtitle}>{item.descricao}</Text>
            <Text style={styles.subtitle2}>{item.detalhes}</Text>

            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('UpdateProdutos', item.id)}
                activeOpacity={0.8}
                style={styles.botao}
              >
              
                <FontAwesome name="edit" size={29} color="black" />
                  
              </TouchableOpacity>


              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.botao2}
                onPress={() => deleteProduto(item.id)}
              >
               
                <Ionicons name="md-trash-bin" size={24} color="black" />
               
                  
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Card>
    </ScrollView>
  );
};
