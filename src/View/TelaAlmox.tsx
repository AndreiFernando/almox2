import { StyleSheet, Text, View, } from 'react-native';
import { NavbarAlmox } from '../components/NavbarAlmox'
import { BottomTabNavigator } from '../components/BottomTabNavigator';
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
  calendarioInfo: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginHorizontal: 30,
  },
  calendarioData: {
    fontSize: 20,
    color: '#383838',
  },
  calendarioVerMais: {
    fontSize: 20,
    color: '#383838',
    fontWeight: '500'
  },
  calendarioContainer: {
    backgroundColor: '#EEEEEE',
    borderRadius: 25,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 20,
  },
  tarefasContainer: {
    marginLeft: 80,
    marginBottom: 45,
  },
});
export default TelaAlmox;