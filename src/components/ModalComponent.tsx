// ModalComponent.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Modal from 'react-native-modal';

const ModalComponent = ({ isVisible, onClose }) => {
  const [patrimonio, setPatrimonio] = useState('');
  const [item, setItem] = useState('');

  const handleButtonPress = () => {
    // Lógica para aplicar as informações (pode ser adicionada aqui)
    onClose();
  };

  return (
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
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text>X</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <Text style={styles.leftText}>Digite o Patrimônio:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o patrimônio"
            value={patrimonio}
            onChangeText={(text) => setPatrimonio(text)}
          />

          <Text style={styles.leftText}>Item:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o item"
            value={item}
            onChangeText={(text) => setItem(text)}
          />

          <TouchableOpacity onPress={handleButtonPress} style={styles.modalButton}>
            <Text style={styles.modalButtonText}>Aplicar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    width: '90%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '100%',
    height: '100%',
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
    marginBottom: 25,
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
  closeButton: {
    color: 'white',
    padding: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
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
});

export default ModalComponent;




/* Seu arquivo principal (App.js)
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ModalComponent from './ModalComponent';

const App = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={toggleModal}>
        <Text>ABRIR MODAL</Text>
      </TouchableOpacity>

      <ModalComponent isVisible={isModalVisible} onClose={toggleModal} />
    </View>
  );
};

export default App;
*/

