import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

export const UpdateProdutos = ({ route, navigation }) => {
  const productId = route?.params?.id;
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [imagem, setImagem] = useState('');
  const [descricao, setDescricao] = useState('');
  const [detalhes, setDetalhes] = useState('');
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    axios.get(`https://6542dfe001b5e279de1fabce.mockapi.io/produto/${productId}`)
      .then(response => {
        const produto = response.data;
        if (produto && produto.nome && produto.preco && produto.imagem && produto.descricao && produto.detalhes) {
          setNome(produto.nome);
          setPreco(produto.preco);
          setImagem(produto.imagem);
          setDescricao(produto.descricao);
          setDetalhes(produto.detalhes);
          setUpdated(true);
        }
      })
      .catch(error => {
        console.error('Erro ao buscar detalhes do produto:', error);
      });
  }, [productId, updated]);

  const handleAtualizacao = () => {
    if (!nome.trim() || !descricao.trim() || isNaN(preco)) {
      alert('Por favor, preencha todos os campos corretamente.');
      return;
    }

    const data = {
      nome,
      preco,
      descricao,
      detalhes,
      imagem,
    };

    axios.put(`https://6542dfe001b5e279de1fabce.mockapi.io/produto/${productId}`, data)
      .then(() => {
        console.log('Produto atualizado com sucesso!');
        setUpdated(true);
        navigation.navigate('Produtos');
      })
      .catch(error => {
        console.error('Erro ao atualizar o produto:', error);
        alert('Erro ao atualizar o produto!');
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome do Produto"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço"
        keyboardType="numeric"
        value={preco}
        onChangeText={(text) => setPreco(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        multiline
        numberOfLines={10}
        value={descricao}
        onChangeText={(text) => setDescricao(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Detalhes"
        multiline
        numberOfLines={10}
        value={detalhes}
        onChangeText={(text) => setDetalhes(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="URL da Imagem"
        value={imagem}
        onChangeText={(text) => setImagem(text)}
      />

      <Image source={{ uri: `../../assets/produtos/${imagem}` }} style={styles.image} />

      <TouchableOpacity
        activeOpacity={0.8}
        style={{ ...styles.button }}
        onPress={handleAtualizacao}
      >
        <Text style={styles.buttonText}>Atualizar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#55b3d1',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    backgroundColor: '#ffb25f',
    color: 'white',
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#f17064',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
