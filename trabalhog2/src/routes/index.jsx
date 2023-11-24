// Importe o hook useContext
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Login } from "../screens/Login";
import Cadastro from "../screens/cadastro";
import { AuthContext } from "../context/AuthProvider";
import { Produtos } from "../screens/produtos";
import { Stack } from "./stack";
import { Integrantes } from "../screens/integrantes";
import { Feather, Entypo, Fontisto } from "@expo/vector-icons";

const { Navigator, Screen } = createBottomTabNavigator();

export const Rotas = () => {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Navigator
        tabBarOptions={{
          activeTintColor: "#3498db",
          inactiveTintColor: "#bdc3c7",
        }}
      >
        {user ? (
          <>
            <Screen
              name="Stack"
              component={Stack}
              options={{
                tabBarLabel: "Inicio",
                header: () => null,
                tabBarIcon: ({ color, size }) => (
                  <Feather name="home" size={size} color={color} />
                ),
              }}
            />
            <Screen
              name="Produtos"
              component={Produtos}
              options={{
                tabBarLabel: "Produtos",
                header: () => null,
                tabBarIcon: ({ color, size }) => (
                  <Entypo name="shop" size={size} color={color} />
                ),
              }}
            />
            <Screen
              name="Integrantes"
              component={Integrantes}
              options={{
                tabBarLabel: "Integrantes",
                tabBarIcon: ({ color, size }) => (
                  <Fontisto name="persons" size={size} color={color} />
                ),
              }}
            />
          </>
        ) : (
          <>
            <Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <Feather name="log-in" size={size} color={color} />
                ),
              }}
            />
            <Screen
              name="Cadastro"
              component={Cadastro}
              options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <Feather name="user-plus" size={size} color={color} />
                ),
              }}
            />
          </>
        )}
      </Navigator>
    </NavigationContainer>
  );
};
