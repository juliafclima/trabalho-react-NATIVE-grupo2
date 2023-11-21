import { View, Text, Image, StyleSheet, ScrollView, Button, Linking } from 'react-native';

export const Integrantes = () => {

  const membros = [
    {
      nome: 'HEVELISE DIAS DO CARMO',
      foto: require('../../assets/integrantes/liz.jpg'),
      descricao: "Completamente louco mas um louco consciente",
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
      foto: require('../../assets/integrantes/Pedro-Horacio.png'),
      linkedin: 'https://github.com/Pedroh88',
      descricao: "Eu não tenho mais vida social, tenho apenas uma API de amigos!",
    },
    {
      nome: 'PAULO JEFERSON WERNER DE ALCÂNTARA',
      foto: require('../../assets/integrantes/pj.jpg'),
      linkedin: 'https://github.com/Paulo-Jeferson',
      descricao: "“Na vida, não existe nada a temer, mas a entender.” - Marie Curie",
    },
  ];

  const handleLinkedInPress = (linkedin) => {
    Linking.openURL(linkedin);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >
      {membros.map((membro, index) => (
        <View key={index} style={styles.containerMembro}>
          <Image source={membro.foto} style={styles.imagemMembro} />
          <Text style={styles.nomeMembro}>{membro.nome}</Text>
          <Text style={styles.descricaoMembro}>{membro.descricao}</Text>
          {membro.linkedin && (
            <Button
              title="LinkedIn"
              onPress={() => handleLinkedInPress(membro.linkedin)}
            />
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  containerMembro: {
    marginBottom: 20,
  },
  imagemMembro: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  nomeMembro: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  descricaoMembro: {
    marginTop: 10,
  },
  linkedInMembro: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});