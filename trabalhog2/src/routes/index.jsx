// import { NavigationContainer } from '@react-navigation/native';
// import { Tab } from './tab';
// import { TabLogin } from './tabLogin';

// export const Rotas = () => {
//   return (
//     <NavigationContainer>
//       {/* <TabLogin /> */}
//       <Tab />
//     </NavigationContainer>
//   );
// };






import React, { useState, useEffect, createContext, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Tab } from "./tab";
import { TabLogin } from "./tabLogin";

// Cria um contexto de autenticação que armazena o usuário logado e uma função para atualizar esse usuário
const AuthContext = createContext({
  user: null,
  setUser: () => {},
});

// Cria um componente que usa o contexto de autenticação e renderiza o TabLogin ou o Tab de acordo com o estado do usuário
const AuthNavigator = () => {
  // Obtém o usuário e a função do contexto de autenticação
  const { user, setUser } = useContext(AuthContext);

  // Verifica se o usuário está logado ou não usando o hook useEffect
  useEffect(() => {
    // Simula uma chamada assíncrona para verificar o usuário
    setTimeout(() => {
      // Define o usuário como um objeto fictício
      setUser({ name: "ola", email: "ola@gmail.com" });
    }, 9000);
  }, []);

  // Renderiza o TabLogin se o usuário for nulo, ou o Tab se o usuário for definido
  return user ? <Tab /> : <TabLogin />;
};

// Cria um componente que envolve o NavigationContainer e o AuthNavigator com o provedor do contexto de autenticação
export const Rotas = () => {
  // Cria um estado para armazenar o usuário e a função para atualizá-lo
  const [user, setUser] = useState(null);

  return (
    // Usa o provedor do contexto de autenticação para passar o usuário e a função para os componentes filhos
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};