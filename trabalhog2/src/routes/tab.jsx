import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { Produtos } from "../screens/produtos";
import { Integrantes } from "../screens/integrantes";
import { Stack } from "./stack";

const { Navigator, Screen } = createBottomTabNavigator();

export const Tab = () => {
  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: "#3498db",
        inactiveTintColor: "#bdc3c7",
      }}
    >
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
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Integrantes"
        component={Integrantes}
        options={{
          tabBarLabel: "Integrantes",
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
};
