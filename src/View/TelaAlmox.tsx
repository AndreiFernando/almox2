import { StyleSheet,  View, } from 'react-native';
import { NavbarAlmox } from '../components/NavbarAlmox'
import { BottomTabNavigator } from '../components/BottomTabNavigator';
import { BotaoManutencao } from '../components/BtnManuten';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { StackNavigationProp } from '@react-navigation/stack';

const TelaAlmox = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.body}>
      <NavbarAlmox onPressBack={() => navigation.navigate('TelaHome')}
        onPressOption1={() => navigation.navigate('TelaAlmox')}
        onPressOption2={() => navigation.navigate('TelaAlmox')}></NavbarAlmox>
      <View style={styles.container}>

      <BotaoManutencao lblButton='Ferramentas' onPress={() => navigation.navigate('TelaEstoque')}></BotaoManutencao>
      <BotaoManutencao lblButton='Materiais de consumo' onPress={() => navigation.navigate('TelaEstoque')}></BotaoManutencao>
      <BotaoManutencao lblButton='Materiais de fixação' onPress={() => navigation.navigate('TelaEstoque')}></BotaoManutencao>
      <BotaoManutencao lblButton='Elétricos' onPress={() => navigation.navigate('TelaHome')}></BotaoManutencao>

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
    justifyContent: "center",
    marginHorizontal: 10,
  },
});
export default TelaAlmox;