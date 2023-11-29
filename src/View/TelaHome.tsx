import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Navbar } from '../components/NavbarInicial'
import { BtnCalendario } from '../components/BtnCalendario';
import { BtnCalendarioAtivo } from '../components/BtnCalendarioAtivo';
import { TarefaAtiva } from '../components/TarefaAtiva';
import { Tarefa } from '../components/Tarefa';
import { BottomTabNavigator } from '../components/BottomTabNavigator';

const TelaHome = () => {

  return (
    <View style={styles.body}>
      <Navbar></Navbar>
      <View style={styles.container}>
        <View style={styles.calendarioInfo}>
          <Text style={styles.calendarioData}>janeiro, 2024</Text>
          <TouchableOpacity>
            <Text style={styles.calendarioVerMais}>ver mais</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.calendarioContainer}>
          <BtnCalendario dataDay='01' dataWeekDay='Seg' />
          <BtnCalendario dataDay='02' dataWeekDay='Ter' />
          <BtnCalendarioAtivo dataDay='03' dataWeekDay='Qua' />
          <BtnCalendario dataDay='04' dataWeekDay='Qui' />
          <BtnCalendario dataDay='05' dataWeekDay='Sex' />
        </View>
        <ScrollView style={styles.tarefasContainer}>
          <TarefaAtiva tarefaTitulo='Cadeiras' tarefaDesc='Clique para saber mais' />
          <Tarefa tarefaTitulo='Lâmpadas' tarefaDesc='Serviço de trocas de lâmpadas' />
          <Tarefa tarefaTitulo='Portas' tarefaDesc="Manutenção nas portas da unidade" />
        </ScrollView>
      </View>
      <BottomTabNavigator />
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
export default TelaHome;