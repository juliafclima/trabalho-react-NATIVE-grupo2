import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#ffb25f",
    padding: 15,
  },
  card: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowRadius: 3,
    shadowOpacity: 0.3,
    shadowOffset: { width: -2, height: 4 }
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
    backgroundColor: "#c9e4ed3e",
    padding: 8,
    borderTopLeftRadius: 5,
    borderTopEndRadius: 5,
  },
  subtitle2: {
    color: "black",
    fontSize: 18,
    paddingStart: "5",
    backgroundColor: "#c9e4ed3e",
    padding: 8,
    borderEndEndRadius: 5,
    borderEndStartRadius: 5,
  },
  botao: {
    backgroundColor: "#55b3d1",
    borderRadius: 5,
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    opacity: 0.9,
    marginRight: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowRadius: 3,
    shadowOpacity: 0.3,
    shadowOffset: { width: -2, height: 4 }
  },
  preco: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
    textAlign: "center",
  },
  botaoTexto: {
    fontSize: 12,
    color: "white",
    textAlign: "center",

    
  },

  foto: {
    resizeMode: "cover",
    borderRadius: 5,
    
  },

  fundo: {
    backgroundColor: "#c9e4ed3e",
  },
});