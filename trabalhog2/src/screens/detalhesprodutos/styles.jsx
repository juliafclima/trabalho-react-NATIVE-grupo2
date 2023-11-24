import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,

    backgroundColor: "#f17064b3",
  },

  card: {
    backgroundColor: "#fff",
    padding: 17,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowRadius: 3,
    shadowOpacity: 0.3,
    shadowOffset: { width: -2, height: 4 },
    width: "100%",
    height: "100%",
  },

  subCard: {
    width: "100%",
    height: "100%",
    backgroundColor: "#edc0bc26",
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
    textAlign: "center",
  },

  subtitle: {
    color: "black",
    fontSize: 18,
    paddingStart: "5",

    padding: 8,
    borderTopLeftRadius: 5,
    borderTopEndRadius: 5,
  },
  subtitle2: {
    color: "black",
    fontSize: 18,
    paddingStart: "5",

    padding: 8,
    borderEndEndRadius: 5,
    borderEndStartRadius: 5,
  },
  botao: {
    backgroundColor: "#55b3d1",
    borderRadius: 5,
    marginTop: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    opacity: 0.9,
    marginRight: 5,
    marginBottom: 15,
    shadowColor: "#000",
    shadowRadius: 3,
    shadowOpacity: 0.3,
    shadowOffset: { width: -2, height: 4 },
  },
  preco: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
    textAlign: "center",
    marginBottom: 10,
  },

  botaoTexto: {
    fontSize: 12,
    color: "white",
    textAlign: "center",
  },

  foto: {
    resizeMode: "cover",
    borderRadius: 5,
    borderRadius: 8,
  },
});
