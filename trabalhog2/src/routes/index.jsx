/* import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/home';
import { Login } from '../screens/login';
import { Produtos } from '../screens/produtos';
import { Integrantes } from '../screens/integrantes';
import { DetalhesProdutos } from '../screens/detalhesprodutos';

import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const { Navigator, Screen } = createNativeStackNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
      
      },
      tabBarShowLabel: false,
    }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color="black" />,
      }}
    />
    <Tab.Screen
      name="Produtos"
      component={Produtos}
      options={{
        tabBarIcon: ({ color }) => <AntDesign name="shoppingcart" size={24} color="black" />,
      }}
    />
    <Tab.Screen
      name="DetalhesProdutos"
      component={DetalhesProdutos}
      options={{
        tabBarIcon: ({ color }) => <AntDesign name="setting" size={24} color="black" />,
      }}
    />
    <Tab.Screen
      name="Integrantes"
      component={Integrantes}
      options={{
        tabBarIcon: ({ color }) => <AntDesign name="team" size={24} color="black" />,
      }}
    />
  </Tab.Navigator>
);

export const Rotas = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name='Login'
          component={Login}
          options={{ headerShown: false }}
        />
        <Screen
          name='Home'
          component={TabNavigator}
          options={{ title: 'Página Principal' }}
        />
      </Navigator>
    </NavigationContainer>
  );
};
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/home';
import { Login } from '../screens/login';
import { Produtos } from '../screens/produtos';
import { Integrantes } from '../screens/integrantes';
import { DetalhesProdutos } from '../screens/detalhesprodutos';
import Cadastro from '../screens/cadastro';
import { CadastrarProdutos } from '../screens/cadastrarProdutos';

const { Navigator, Screen } = createNativeStackNavigator();

export const Rotas = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name='Login'
          component={Login}
          options={{ headerShown: false }} />
        <Screen
          name='Cadastro'
          component={Cadastro}
          options={{ headerShown: false }} />
        <Screen
          name='Home'
          component={Home}
          options={{ title: 'Página Principal', headerShown: false }} />
        <Screen
          name='Produtos'
          component={Produtos}
          options={{ title: 'Produtos' }} />
        <Screen
          name='DetalhesProdutos'
          component={DetalhesProdutos}
          options={{ title: 'Detalhes dos produtos' }} />
        <Screen
          name='CadastrarProdutos'
          component={CadastrarProdutos}
          options={{ title: 'Cadastro de produtos' }} />
        <Screen
          name='Integrantes'
          component={Integrantes}
          options={{ title: 'Integrantes' }} />
      </Navigator>
    </NavigationContainer>
  );
};