import React from 'react';
import { ScrollView, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { Card, Image, Text } from 'react-native-elements';

export const Integrantes = () => {
  const membros = [
    {
      nome: 'HEVELISE DIAS DO CARMO',
      foto: 'URL_DA_FOTO_1',
      linkedin: 'https://github.com/Hevelise-Liz',
      descricao: 'Descrição maneira',
    },
    {
      nome: 'JULIA LIMA FERNANDES CARNEIRO',
      foto: 'URL_DA_FOTO_2',
      linkedin: 'https://github.com/juliafclima',
      descricao: 'Descrição do membro 2.',
    },
    {
      nome: 'LUCAS DE MELLO SELJAN',
      foto: 'URL_DA_FOTO_2',
      linkedin: 'https://github.com/Lucas-Seljan',
      descricao: 'Descrição do membro 2.',
    },
    {
      nome: 'LUCAS JOSÉ GONÇALVES',
      foto: 'URL_DA_FOTO_2',
      linkedin: 'https://github.com/Lucas-Jose-Goncalves',
      descricao: 'Descrição do membro 2.',
    },
    {
      nome: 'PEDRO HORÁCIO SAURINO FILHO',
      foto: 'URL_DA_FOTO_2',
      linkedin: 'https://github.com/Pedroh88',
      descricao: 'Descrição do membro 2.',
    },
    {
      nome: 'PAULO JEFERSON WERNER DE ALCÂNTARA',
      foto: 'URL_DA_FOTO_2',
      linkedin: 'https://github.com/Paulo-Jeferson',
      descricao: 'Descrição do membro 2.',
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
          <Text style={[styles.text, { fontStyle: 'italic', textAlign: 'center' }]}>
            {membro.descricao}
          </Text>
          <Text
            style={[
              styles.text,
              { color: '#477CFF', textAlign: 'center' },
            ]}
            onPress={() => Linking.openURL(membro.linkedin)}
          >
            LinkedIn
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
    width: "80%",
    height: 200,
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: 20,
  },
  text: {
    marginVertical: 5,
    color: '#F17064',
  },
});
