import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Modal from 'react-native-modal';
import NumericInput from 'react-native-numeric-input';
//npm install npm install react-native-numeric-input --save

const ModalMenor = ({ isVisible, onClose }) => {
  const [item, setItem] = useState('');
  const [quantidade, setQuantidade] = useState(0);

  const toggleModal = () => {
    onClose();
  };

  const handleButtonPress = () => {
    toggleModal();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleModal}>
        <Text>ABRIR MODAL</Text>
      </TouchableOpacity>

      <Modal
        isVisible={isVisible}
        style={styles.modal}
        animationIn="slideInDown"
        animationOut="slideOutUp"
        backdropOpacity={0.5}
      >
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Solicitações</Text>
            <TouchableOpacity onPress={handleButtonPress} style={styles.closeButton}>
              <Text>X</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.content}>
            <Text style={styles.leftText}>Item:</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite o item"
              value={item}
              onChangeText={(text) => setItem(text)}
            />

            <Text style={styles.leftText}>Quantidade:</Text>
            <NumericInput
              value={quantidade}
              onChange={setQuantidade}
              totalWidth={240}
              totalHeight={50}
              iconSize={25}
              step={1}
              valueType="integer"
              rounded
              textColor='#00ADB5'
              rightButtonBackgroundColor='#00ADB5'
              leftButtonBackgroundColor='#00ADB5'
            />

            <TouchableOpacity onPress={handleButtonPress} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Aplicar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: '90%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '100%',
    height: '50%',
    backgroundColor: 'white',
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#00ADB5',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  headerText: {
    color: 'white',
    marginLeft: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    padding: 30,
  },
  leftText: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 0,
    marginBottom: 10,
    width: '100%',
    paddingLeft: 10,
    borderBottomWidth: 2,
  },
  modalButton: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    padding: 10,
    backgroundColor: '#00ADB5',
    borderRadius: 4,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalButtonText: {
    color: 'white',
  },
  closeButton: {
    color: 'white',
    padding: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ModalMenor;



/*Agora, você pode usar o componente ModalMenor em seu aplicativo e controlar a visibilidade e as ações usando as propriedades isVisible e onClose. Por exemplo:


import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ModalMenor from './ModalMenor';

const App = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleModalClose = (item, quantidade) => {
    console.log('Item:', item);
    console.log('Quantidade:', quantidade);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <ModalMenor isVisible={isModalVisible} onClose={handleModalClose} />
      <TouchableOpacity onPress={toggleModal}>
        <Text>ABRIR MODAL</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App; */
