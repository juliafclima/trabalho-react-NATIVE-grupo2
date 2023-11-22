import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Produtos } from '../screens/produtos';
import { Integrantes } from '../screens/integrantes';
import { DetalhesProdutos } from '../screens/detalhesprodutos';
import { CadastrarProdutos } from '../screens/cadastrarProdutos';
import { UpdateProdutos } from '../screens/updateProduto';
import { Home } from '../screens/Home';

const { Navigator, Screen } = createNativeStackNavigator();

export const Stack = () => {
  return (
    <Navigator>
      {/* <Screen
        name='Login'
        component={Login}
        options={{ headerShown: false }} />
      <Screen
        name='Cadastro'
        component={Cadastro}
        options={{ headerShown: false }} /> */}
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
        name='UpdateProdutos'
        component={UpdateProdutos}
        options={{ title: 'Editar produto' }} />
      <Screen
        name='Integrantes'
        component={Integrantes}
        options={{ title: 'Integrantes' }} />
    </Navigator>
  );
};
