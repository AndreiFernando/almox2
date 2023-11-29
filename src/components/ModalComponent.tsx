// ModalComponent.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';

interface ModalComponentProps {
  isVisible: boolean;
  onClose: () => void;
}

const ModalComponent: React.FC<ModalComponentProps> = ({ isVisible, onClose }) => {
  const [patrimonio, setPatrimonio] = useState('');
  const [possuiMaterial, setPossuiMaterial] = useState('');
  const [local, setLocal] = useState('');
  const [descricao, setDescricao] = useState('');
  const [conclusao, setConclusao] = useState('');
  const [status, setStatus] = useState('');
  const [foto, setFoto] = useState('');
  const [criadoPor, setCriadoPor] = useState('');

  const toggleModal = () => {
    onClose();
  };

  const handleButtonPress = () => {
    toggleModal();
  };

  return (
    <View style={styles.container}>
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
            <Text style={styles.leftText}>Digite o Patrimônio:</Text>
            <TextInput
              style={styles.input}
              value={patrimonio}
              onChangeText={(text) => setPatrimonio(text)}
            />

            <Text style={styles.leftText}>Item:</Text>
            <TextInput
              style={styles.input}
              value={patrimonio}
              onChangeText={(text) => setPatrimonio(text)}
            />

            <View style={styles.row}>
              <View style={styles.column}>
                <Text style={styles.leftText}>Possui material:</Text>
                <TextInput
                  style={styles.input}
                  value={possuiMaterial}
                  onChangeText={(text) => setPossuiMaterial(text)}
                />
              </View>

              <View style={styles.column}>
                <Text style={styles.leftText}>Local:</Text>
                <TextInput
                  style={styles.input}
                  value={local}
                  onChangeText={(text) => setLocal(text)}
                />
              </View>
            </View>

            {/* New Input for Descrição */}
            <Text style={styles.leftText}>Descrição:</Text>
            <TextInput
              style={styles.fullWidthInput}
              value={descricao}
              onChangeText={(text) => setDescricao(text)}
            />

            {/* New Inputs */}
            <View style={styles.row}>
              <View style={styles.column}>
                <Text style={styles.leftText}>Conclusão (Data):</Text>
                <View style={styles.inputWithIcon}>
                  <TextInput
                    style={styles.input}
                    value={conclusao}
                    onChangeText={(text) => setConclusao(text)}
                  />
                  <Icon name="calendar-outline" size={20} color="#808080" />
                </View>
              </View>

              <View style={styles.column}>
                <Text style={styles.leftText}>Status:</Text>
                <TextInput
                  style={styles.input}
                  value={status}
                  onChangeText={(text) => setStatus(text)}
                />
              </View>
            </View>

            {/* Two Additional Inputs */}
            <View style={styles.row}>
              <View style={styles.column}>
                <Text style={styles.leftText}>Foto:</Text>
                <View style={styles.inputWithIcon}>
                  <TextInput
                    style={styles.input}
                    value={foto}
                    onChangeText={(text) => setFoto(text)}
                  />
                  <Icon name="camera-outline" size={20} color="#808080" />
                </View>
              </View>

              <View style={styles.column}>
                <Text style={styles.leftText}>Criado Por:</Text>
                <TextInput
                  style={styles.input}
                  value={criadoPor}
                  onChangeText={(text) => setCriadoPor(text)}
                />
              </View>
            </View>

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
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 0,
    marginBottom: 15,
    width: '100%',
    paddingLeft: 10,
    borderBottomWidth: 2,
  },
  fullWidthInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 0,
    marginBottom: 15,
    width: '100%',
    paddingLeft: 10,
    borderBottomWidth: 2,
  },
  halfWidthInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 0,
    marginBottom: 15,
    width: '48%',
    paddingLeft: 10,
    borderBottomWidth: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    width: '100%',
  },
  column: {
    flex: 1,
    marginRight: 10,
  },
  closeButton: {
    color: 'white',
    padding: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalButton: {
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
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
});

export default ModalComponent;
