import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

const ModalComponent = ({ isVisible, closeModal }) => {
  const handleButtonPress = () => {
    closeModal();
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
          <TouchableOpacity onPress={handleButtonPress} style={styles.closeButton}>
            <Text>X</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.content}>
          <Text>Conteúdo do Modal</Text>
          <TouchableOpacity onPress={handleButtonPress} style={styles.modalButton}>
            <Text style={styles.modalButtonText}>aplicar</Text>
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
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#00ADB5',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  headerText: {
    color: 'white',
    marginRight: 180,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    bottom: 0,
    right: -90,
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
