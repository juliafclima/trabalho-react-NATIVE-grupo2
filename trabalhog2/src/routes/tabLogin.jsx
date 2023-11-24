import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { Login } from "../screens/Login";
import Cadastro from "../screens/cadastro";

const { Navigator, Screen } = createBottomTabNavigator();

export const TabLogin = () => {
  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: "#3498db",
        inactiveTintColor: "#bdc3c7",
      }}
    >
      <Screen
        name='Login'
        component={Login}
        options={{
          headerShown: false,
          header: () => null,
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }} />
      <Screen
        name='Cadastro'
        component={Cadastro}
        options={{
          headerShown: false,
          header: () => null,
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }} />
    </Navigator>
  );
};
