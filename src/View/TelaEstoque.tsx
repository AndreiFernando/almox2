import { StyleSheet, View, ScrollView } from 'react-native';
import { BottomTabNavigator } from '../components/BottomTabNavigator';
import { ItemLista } from "../components/ListaItens";
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { StackNavigationProp } from '@react-navigation/stack';
import NavbarEstoque from '../components/NavbarEstoque';

const TelaAlmox = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.body}>
      <NavbarEstoque onPressBack={() => navigation.navigate('TelaAlmox')}></NavbarEstoque>
      <View style={styles.container}>
        <ScrollView style={styles.itensContainer}>
            <ItemLista lblItem='Chave de Fenda'></ItemLista>
            <ItemLista lblItem='Serra'></ItemLista>
            <ItemLista lblItem='Furadeira'></ItemLista>
            <ItemLista lblItem='Parafusadeira'></ItemLista>
            <ItemLista lblItem='Serrote'></ItemLista>
            <ItemLista lblItem='Broca'></ItemLista>
            <ItemLista lblItem='Martelo'></ItemLista>
            <ItemLista lblItem='Morsa'></ItemLista>
            <ItemLista lblItem='Compressor'></ItemLista>
        </ScrollView>
      </View>
      <BottomTabNavigator></BottomTabNavigator>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  itensContainer: {
    marginBottom: 45,
  },
});
export default TelaAlmox;