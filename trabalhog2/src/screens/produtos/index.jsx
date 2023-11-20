import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Text } from "react-native-paper";

export const Produtos = ({ navigation }) => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Card style={styles.cards1}>
        <Card.Cover
          style={styles.foto}
          source={{ uri: "https://picsum.photos/700" }}
        />

        <Text style={styles.title} variant="titleLarge">
          COMPRIMIDOS FOCU
        </Text>
        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("DetalhesProdutos", { produto: "COMPRIMIDOS FOCU" })}>
          <Text>
            Saiba mais
          </Text>
        </TouchableOpacity>
      </Card>

      <Card style={styles.cards2}>
        <Card.Cover
          style={styles.foto}
          source={{ uri: "https://picsum.photos/700" }}
        />

        <Text style={styles.title} variant="titleLarge">
          PÍLULAS ZOOM
        </Text>
        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("DetalhesProdutos", { produto: "PÍLULAS ZOOM" })}>
          <Text>
            Saiba mais
          </Text>
        </TouchableOpacity>
      </Card>

      <Card style={styles.cards3}>
        <Card.Cover
          style={styles.foto}
          source={{ uri: "https://picsum.photos/700" }}
        />

        <Text style={styles.title} variant="titleLarge">
          SACHÊ DO SONO
        </Text>
        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("DetalhesProdutos", { produto: "SACHÊ DO SONO" })}>
          <Text>
            Saiba mais
          </Text>
        </TouchableOpacity>
      </Card>

      <Card style={styles.cards1}>
        <Card.Cover
          style={styles.foto}
          source={{ uri: "https://picsum.photos/700" }}
        />

        <Text style={styles.title} variant="titleLarge">
          TABLETES XÔ ANSIEDADE
        </Text>
        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("DetalhesProdutos",{ produto: "TABLETES XÔ ANSIEDADE" })}>
          <Text>
            Saiba mais
          </Text>
        </TouchableOpacity>
      </Card>

      <Card style={styles.cards2}>
        <Card.Cover
          style={styles.foto}
          source={{ uri: "https://picsum.photos/700" }}
        />

        <Text style={styles.title} variant="titleLarge">
          COMPRIMIDOS TRAVA-LÍNGUA
        </Text>
        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("DetalhesProdutos", { produto: "COMPRIMIDOS TRAVA-LÍNGUA" })}>
          <Text>
            Saiba mais
          </Text>
        </TouchableOpacity>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "space-between",
    backgroundColor: "#eeeff4",
    padding: 15,
  },
  cards1: {
    marginBottom: 30,
    padding: 15,
    backgroundColor: "#f17064",
  },
  cards2: {
    marginBottom: 30,
    padding: 15,
    backgroundColor: "#ffb25f",
  },
  cards3: {
    marginBottom: 30,
    padding: 15,
    backgroundColor: "#55b3d1",
  },
  title: {
    fontWeight: "bold",
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
    color: "white",
  },
  subtitle: {
    color: "black",
    fontSize: 18,
    paddingStart: "5",
    backgroundColor: "white",
    padding: 8,
    borderRadius: 8,
  },
  botao: {
    padding: 10,
    alignItems: 'center',
    borderRadius: 15,
    width: '100%',
    color: 'white',
    backgroundColor: 'white',
  },
});