import { StyleSheet, Text, View, ScrollView, StatusBar, SafeAreaView, Platform} from 'react-native';

const statusBarHeight = StatusBar.currentHeight;

export default function Preferencias() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text>Conteúdo</Text>
        </View>

        <View style={styles.content}>
          <Text>Conteúdo</Text>
        </View>

        <View style={styles.content}>
          <Text>Conteúdo</Text>
        </View>

        <View style={styles.content}>
          <Text>Conteúdo</Text>
        </View>

        <View style={styles.content}>
          <Text>Conteúdo</Text>
        </View>
        
        <View style={styles.content}>
          <Text>Conteúdo</Text>
        </View>

        <View style={styles.content}>
          <Text>Conteúdo</Text>
        </View>
        
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040316',
    paddingTop: Platform.OS === 'android' ? statusBarHeight : 25,
  },
  content:{
    alignSelf: 'center',
    flex:1,
    width: '98%',
    height: 120,
    marginBottom: 20,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
/*
<View>
<Navbar></Navbar>
<SafeAreaView style={styles.container}>
  <View style={styles.calendarioInfo}>
    <Text>janeiro, 2024</Text>
    <Text>ver mais</Text>
  </View>
</SafeAreaView>
</View>
  calendarioInfo: {
    marginHorizontal: 15,
    color: '#383838',
  }
  */