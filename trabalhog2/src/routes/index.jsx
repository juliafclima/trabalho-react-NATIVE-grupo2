import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/home';
import { Login } from '../screens/login';
import { Produtos } from '../screens/produtos';
import { Integrantes } from '../screens/integrantes';
import { DetalhesProdutos } from '../screens/detalhesprodutos';
import Cadastro from '../screens/cadastro';
import { CadastrarProdutos } from '../screens/cadastrarProdutos';
import { UpdateProdutos } from '../screens/updateProduto';

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
          name='CadastrarProdutos'
          component={CadastrarProdutos}
          options={{ title: 'Cadastro de produtos' }} />
        <Screen
          name='DetalhesProdutos'
          component={DetalhesProdutos}
          options={{ title: 'Detalhes dos produtos' }} />
        <Screen
          name='UpdateProdutos'
          component={UpdateProdutos}
          options={{ title: 'Editar produto' }} />
        <Screen
          name='Integrantes'
          component={Integrantes}
          options={{ title: 'Integrantes' }} />
      </Navigator>
    </NavigationContainer>
  );
};