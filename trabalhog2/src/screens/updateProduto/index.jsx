import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

export const UpdateProdutos = ({ route, navigation }) => {
  const { id } = route.params;
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [imagem, setImagem] = useState('');
  const [descricao, setDescricao] = useState('');
  const [detalhes, setDetalhes] = useState('');
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    axios.get(`https://6542dfe001b5e279de1fabce.mockapi.io/produto/${id}`)
      .then(response => {
        const produto = response.data;
        setNome(produto.nome);
        setPreco(produto.preco.toString());
        setImagem(produto.imagem);
        setDescricao(produto.descricao);
        setDetalhes(produto.detalhes);
        setUpdated(false); 
      })
      .catch(error => {
        console.error('Erro ao buscar detalhes do produto:', error);
      });
  }, [id, updated]);

  const handleAtualizacao = () => {
    if (!nome.trim() || !descricao.trim() || isNaN(preco)) {
      alert('Por favor, preencha todos os campos corretamente.');
      return;
    }

    const data = {
      nome,
      preco: parseFloat(preco),
      descricao,
      detalhes,
      imagem,
    };

    axios.put(`https://6542dfe001b5e279de1fabce.mockapi.io/produto/${id}`, data)
      .then(() => {
        console.log('Produto atualizado com sucesso!');
        setUpdated(true); 
        navigation.navigate('Produtos');
      })
      .catch(() => {
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
      {imagem ? (
        <Image source={{ uri: imagem }} style={styles.image} />
      ) : null}
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
