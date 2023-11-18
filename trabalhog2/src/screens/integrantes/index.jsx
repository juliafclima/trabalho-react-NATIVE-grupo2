import React from 'react';
import { ScrollView, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { Card, Image, Text } from 'react-native-elements';

export const Integrantes = () => {
  const membros = [
    {
      nome: 'HEVELISE DIAS DO CARMO',
      foto: require('../../assets/integrantes/liz.jpg'), 
      descricao: "Estudante de programação feliz após usar os medicamentos da CodFarma",
    },
    {
      nome: 'JULIA LIMA FERNANDES CARNEIRO',
      foto: require('../../assets/integrantes/julia.jpg'),
      linkedin: 'https://github.com/juliafclima',
      descricao: 'Hello, world!',
    },
    {
      nome: 'LUCAS DE MELLO SELJAN',
      foto: require('../../assets/integrantes/lucasseljan.jpg'),
      linkedin: 'https://github.com/Lucas-Seljan',
      descricao: "Um projeto a programador amistoso, sofrido e genial",
    },
    {
      nome: 'LUCAS JOSÉ GONÇALVES',
      foto: require('../../assets/integrantes/lucasjose.jpg'),
      linkedin: 'https://github.com/Lucas-Jose-Goncalves',
      descricao: "Sou apenas um console querendo fugir dos erros da vida",
    },
    {
      nome: 'PEDRO HORÁCIO SAURINO FILHO',
      foto: 'URL_DA_FOTO_2',
      linkedin: 'https://github.com/Pedroh88',
      descricao: 'Descrição do membro 2.',
    },
    {
      nome: 'PAULO JEFERSON WERNER DE ALCÂNTARA',
      foto: require('../../assets/integrantes/pj.jpg'),
      linkedin: 'https://github.com/Paulo-Jeferson',
      descricao: "“Na vida, não existe nada a temer, mas a entender.” - Marie Curie",
    },
    
  ];

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      {membros.map((membro, index) => (
        <Card key={index} containerStyle={styles.card}>
          <Image source={{ uri: membro.foto }} style={styles.image} />
          <Text style={[styles.text, { fontSize: 20, fontWeight: 'bold', textAlign: 'center' }]}>
            {membro.nome}
          </Text>
          <Text style={[styles.text, { fontStyle: 'italic', textAlign: 'center', marginHorizontal: 10 }]}>
            {membro.descricao}
          </Text>

          <TouchableOpacity
            onPress={() => Linking.openURL(membro.linkedin)}
            style={[styles.linkedinButton, { backgroundColor: '#477CFF' }]}
            activeOpacity={0.7}
          >
            <Text style={styles.linkedinButtonText}>LinkedIn</Text>
          </TouchableOpacity>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEFF4',
    alignItems: 'center',
    paddingVertical: 20,
  },
  card: {
    width: '80%',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 20,
  },
  linkedinButton: {
    marginVertical: 10,
    padding: 10,
    width: '70%', 
    borderRadius: 5,
    alignSelf: 'center', 
  },
  linkedinButtonText: {
    color: '#FFF',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: 20,
    alignItems: 'center', 
  },
  text: {
    marginVertical: 5,
    color: '#F17064',
  },
});
