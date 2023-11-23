import React, { useCallback, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import axios from 'axios';
import { useFocusEffect } from "@react-navigation/core";

/* const produtos = [
  {
    id: 1,
    nome: 'COMPRIMIDOS FOCU',
    preco: 15.99,
    imagem: require('../../assets/produtos/focu.jpg'),
  },
  {
    id: 2,
    nome: 'PÍLULAS ZOOM',
    preco: 20.99,
    imagem: require('../../assets/produtos/zoom.jpg'),
  },
  {
    id: 5,
    nome: 'SACHÊ DO SONO',
    preco: 20.99,
    imagem: require('../../assets/produtos/sono.jpg'),
  },
  {
    id: 3,
    nome: 'TABLETES XÔ ANSIEDADE',
    preco: 15.99,
    imagem: require('../../assets/produtos/xoAnsiedade.jpg'),
  },
  {
    id: 4,
    nome: 'COMPRIMIDOS TRAVA-LÍNGUA',
    preco: 20.99,
    imagem: require('../../assets/produtos/travaLingua.jpg'),
  },
]; */

export const Produtos = ({ navigation }) => {

  const [produtos, setProdutos] = useState([]);

  useFocusEffect(
    useCallback(() => {
      getProdutos();
    }, [])
  );

  const getProdutos = () => {

    axios.get(`https://6542dfe001b5e279de1fabce.mockapi.io/produto`)
      .then(response => {
        setProdutos(response.data);

      })
      .catch(error => {
        console.error('Erro ao buscar detalhes do produto:', error);
      });
  };

  return (
    <ScrollView
      contentContainerStyle={estilos.scrollView}
      showsVerticalScrollIndicator={false}
    >

      <TouchableOpacity activeOpacity={0.8}
        onPress={() => navigation.navigate("CadastrarProdutos")}
        style={estilos.botaoCadastrar}
      >
        <Text style={estilos.botaoTexto}>Cadastrar Novo Produto</Text>
      </TouchableOpacity>
      <FlatList data={produtos}
        keyExtractor={(index) => index.toString()}
        renderItem={({ item }) => (

          <View style={estilos.card} key={item.id}>

            <Image source={item.imagem} style={estilos.imagem} />
            <Text style={estilos.titulo}>{item.nome}</Text>
            <Text style={estilos.preco}>R$ {parseFloat(item.preco).toFixed(2)}</Text>

            <TouchableOpacity activeOpacity={0.8}
              onPress={() => navigation.navigate("DetalhesProdutos", { item })}
              style={estilos.botaoSaibaMais}
            >
              <Text style={estilos.botaoTextoDescricao}>Saiba Mais</Text>
            </TouchableOpacity>
          </View>
        )} />
    </ScrollView>
  );
};

const estilos = StyleSheet.create({
  scrollView: {
    backgroundColor: '#55b3d1',
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    width: '95%',
    height: 420,
    alignItems: 'center',
  },
  imagem: {
    width: '95%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  descricao: {
    fontSize: 12,
    marginTop: 5,
  },
  preco: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  botaoTexto: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center'
  },
  botaoTextoDescricao: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center'
  },
  botaoSaibaMais: {
    backgroundColor: '#55b3d1',
    borderRadius: 5,
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    opacity: 0.9,
    shadowColor: '#000',
    shadowRadius: 3,
    shadowOpacity: 0.3,
    shadowOffset: { width: -2, height: 4 }
  },
  botaoCadastrar: {
    backgroundColor: '#ffb25f',
    borderRadius: 5,
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    opacity: 0.9,
    alignSelf: 'flex-start',
  },
});
